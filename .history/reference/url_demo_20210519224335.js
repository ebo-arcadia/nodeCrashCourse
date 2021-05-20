// cons url = require('url');

const newUrl = new URL('http://google.com:3000/yibolime.html?id=100&status=active');

// serialized URL
console.log(newUrl.href);
console.log(newUrl.toString());

// Host (root domain)
console.log(newUrl.host);

// Host name (does got include port)
console.log(newUrl.hostname);

// path name
console.log(newUrl.pathname)