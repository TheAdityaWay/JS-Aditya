const accountId = 144757  // for don't change value
let accountEmail = "adityaraj@gmail.com"
var accountPassword = "123456"
accountCity = "Patna"
let accontState;

//accountId = 2     //not allowed to change const
accountEmail = "ar@google.com"
accountPassword = "2311223342"
accountCity = "Barh"

console.log(accountId);
/*prefer not to use "var" because of issuse in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accontState])