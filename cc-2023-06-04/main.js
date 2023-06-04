// url: https://www.codewars.com/kata/54dc6f5a224c26032800005c
// Help the bookseller!
// given an array of books
  // With the first letter in the name it's category
  // followed by its quantity
  // i.e. ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
// Also given an array of requested categories
// If either of the arrays are empty return ""
// Return the categories in the requested order formatted with the total available quantity for it as a string.
  // "(A : 0) - (B : 1290) - (C : 515) - (D : 600)" 
// example:
  // stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]) -> "(A : 200) - (B : 1140)"
// function that intakes arr of booknames and requested categories
  // immediate edge case check for 0 length in either param to return ''
  // initialize a hash
  // loop through each book
    // make a category in the hash for a book if it doesn't already exist and add it's quantity
  // loop through each of the categories requested
    // for each check the hash for a number or return 0 in the required (category : quantity) format
    // join each of those together with a ' - '
  // return the string request for the request array
  function stockList(listOfArt, listOfCat){
    if(listOfArt.length === 0 || listOfCat.length === 0){return ''}
    let stocks = {}
    for(let book of listOfArt){
      let category = book[0]
      let stock = Number(book.split(' ')[1])
      stocks[category] ??= 0
      stocks[category] += stock
    }
    return listOfCat.map(cat => `(${cat} : ${stocks[cat] || 0})`).join(' - ')
  }