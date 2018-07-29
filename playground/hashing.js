const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id:10
};

let token = jwt.sign(data,'123abc');

console.log(token);

let decoded = jwt.verify(token, '123abc');

console.log(decoded);

// 

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not change');
// } else {
//     console.log('data was change. do not trust');

// }