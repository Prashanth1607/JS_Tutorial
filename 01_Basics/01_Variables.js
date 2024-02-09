const accountId = 145563
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState = "success"

// accountId = 2 // not allowed

accountEmail = "xyz@email.com"
accountPassword = "2121"
accountCity = "Bengaluru"


console.log("accountId");

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])