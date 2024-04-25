const accountId = 12345689
let accountEmail = "Kavyaamgadi@gmail.com" 
var accountPasword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

/*  Prefer not to use var because of issue in block scope and functional scope */

accountEmail = "kA@gmail.com"
accountPasword = "287654"
accountCity = "Bengaluru"


console.log(accountId);
console.table([accountId, accountEmail, accountCity, accountState]);


