const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    _id: 10
};
var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);
//jwt.verify
// var message = "I am user number 3";

// var hash = SHA256(message).toString();

// console.log(`String: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     _id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash = token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust');
// }