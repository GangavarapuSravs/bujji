import * as path from 'path';


const __dirname = path.resolve();

const directory = path.join(__dirname, 'path');
console.log('Directory:', directory);

const fullPath = path.join(directory, 'path.ts');
console.log('Full Path:', fullPath);