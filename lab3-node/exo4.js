
const fs = require('fs');

const text = process.argv[2];

fs.writeFileSync('f.txt', text);
console.log('The file has been saved!');
