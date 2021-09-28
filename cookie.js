const cookie = require('cookie');

const data = cookie.serialize('id', '123', {httpOnly: true, sameSite: true, secure:true})
console.log(data)