const accountId = 144553
let accountEmail = "heyuser@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail  = "usr@usr.com"
accountPassword = "2121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/* 
Preffer  not to use var
because of issue in block scope and functional scope  
*/