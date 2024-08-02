const fs = require('fs'); // Import fs module
fs.writeFileSync('notes.txt', 'I hate to code');
fs.writeFileSync('notes.txt', 'this is sravani');

const fs = require('fs');
fs.readFile('notes.txt', 'utf8', (err, data) => {
   if (err) throw err;
   console.log(data);
});

