// url: https://www.codewars.com/kata/515bb423de843ea99400000a
// PaginationHelper
// Given an array of items, and how many go per page.
// Make a constructor that has the following prototype methods:
// itemCount - returns the length of the collection arr
// pageCount - returns how many pages the collection will take given the itemsPerPage
// pageItemCount - #items on a pageIndex
  // has a parameter of pageIndex
  // return the number of items on the specified index of page.
  // if pageIndex is not in the range of the pages for the collection, return -1
// pageIndex - returns the pageIndex of an itemIndex
  // parameter of itemIndex
  // if itemIndex is out of range return -1

// Examples: 
  // const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
  // helper.pageCount(); //2
  // helper.itemCount(); //6
  // helper.pageItemCount(0); //4
  // helper.pageItemCount(1); //2
  // helper.pageItemCount(2); //-1
  // pageIndex takes an item index and returns the page that it belongs on
  // helper.pageIndex(5); // 1 (zero based index)
  // helper.pageIndex(2); // 0
  // helper.pageIndex(20); // -1
  // helper.pageIndex(-10); // -1
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	  this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
    return this.collection.length
	}
	pageCount() {
	  return Math.ceil(this.collection.length / this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
    if(pageIndex < 0){return -1}
    if(pageIndex + 1 > this.pageCount()){return -1}
    if(pageIndex + 1 < this.pageCount()){return this.itemsPerPage}
    return this.itemCount() - (this.itemsPerPage * pageIndex)
	}
	pageIndex(itemIndex) {
    if(itemIndex < 0 || itemIndex > this.itemCount() - 1){return -1}
    const expectedPageIndex = Math.floor(itemIndex / this.itemsPerPage)
    return expectedPageIndex > this.pageCount() - 1 ? - 1 : expectedPageIndex
	}
}