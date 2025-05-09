// path 
const path = require('path');

const filePath = '/users/project/index.html';

// console.log(`path.sep`,path.sep); // returns the platform-specific path segment separator
// console.log(`path.join('/users', 'project', 'index.html')`,path.join('/users', 'project', 'index.html')); // joins all given path segments together using the platform-specific separator
// console.log(`path.basename(filePath)`,path.basename(filePath)); // returns the last portion of a path
// console.log(path.dirname(filePath)); // returns the directory name of a path
// console.log(path.extname(filePath)); // returns the extension of the path
// console.log(path.parse(filePath)); // returns an object whose properties represent significant elements of the path
// console.log(path.resolve('users', 'project', 'index.html')); // resolves a sequence of paths or path segments into an absolute path
// console.log(path.isAbsolute(filePath)); // returns true if the path is absolute   
// console.log(path.relative('/users/project', '/users/project/index.html')); // returns the relative path from one path to another


// console.log('Base name:', path.basename(filePath));
// console.log('Directory:', path.dirname(filePath));
// console.log('Extension:', path.extname(filePath));

// const joined = path.join('/users', 'project', 'assets', 'img.png');
// console.log('Joined Path:', joined);

// const resolved = path.resolve('src', 'index.js');
// console.log('Resolved Path:', resolved);

// const parsed = path.parse(filePath);
// console.log('Parsed Path:', parsed);

// const formatted = path.format({
//   dir: '/users/project',
//   name: 'index',
//   ext: '.js'
// });
// console.log('Formatted Path:', formatted);

// console.log('Is Absolute?', path.isAbsolute('/foo'));
// console.log('Relative Path:', path.relative('/users/docs', '/users/docs/file.txt'));

// console.log(path.normalize('///users//project/index.html')); // normalizes a path, resolving '..' and '.' segments




console.log(path.sep);

const joinedPath = path.join('/src/content', 'subfolder', 'text.txt');
console.log('Joined Path:', joinedPath);
const baseName = path.basename(joinedPath);
console.log('Base Name:', baseName);
const dirName = path.dirname(joinedPath);
console.log('Directory Name:', dirName);
const extName = path.extname(joinedPath);
console.log('Extension Name:', extName);
const parsedPath = path.parse(joinedPath);
console.log('Parsed Path:', parsedPath);
const resolvedPath = path.resolve('src', 'content', 'subfolder', 'text.txt');
console.log('Resolved Path:', resolvedPath);
const isAbsolutePath = path.isAbsolute(joinedPath);
console.log('Is Absolute Path:', isAbsolutePath);
const relativePath = path.relative('/src/content', '/src/content/subfolder/text.txt');
console.log('Relative Path:', relativePath);
const normalizedPath = path.normalize('/src//content/subfolder/../text.txt');
console.log('Normalized Path:', normalizedPath);    