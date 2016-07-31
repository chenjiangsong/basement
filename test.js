//test path.resolve()

const path = require('path')

console.log('__dirname:'+__dirname);

console.log(__dirname + '/src');

console.log(path.resolve(__dirname, '/src'));

console.log(path.resolve('/src'));
