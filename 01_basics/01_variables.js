const accountId = 1221
let accountEmail = "sonubainsla@google.com"
var accountPassword = "myPassword"
accountCity = "palwal"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@push.com"
accountPassword = "sdsdw"
accountCity = "noida"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])