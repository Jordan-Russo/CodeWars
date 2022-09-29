// url: https://www.codewars.com/kata/514a024011ea4fb54200004b
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
function domainName(url){
  let websiteRegex = /(.*www\.|.*:\/\/)?([^\.]+)(\..*)/;
  // first capture group may or may not capture (?) any start including www. or :// 
  //( http://www. also gets caught if we check for www. first)
  // then we capture anything that doesn't include a dot
  // then we capture whatever starts with a dot and everything after it
  // even if nothing is captured for the first capture group we can still refer the domain name as the second capture group "$2"
  // TLDR: captures the entire url in 3 groups only. 2nd group has domain name, so replace url with that and return it.
  return url.replace(websiteRegex, '$2');
}