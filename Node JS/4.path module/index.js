import path from "path"

// console.log(path.basename("c:\\kimti\\desktop\\Mern\\pathmodule\\index.js"))
// console.log(path.basename("c:\\kimti\\desktop\\Mern\\pathmodule\\index.js",".js"))
// console.log(path.dirname("c:\\kimti\\desktop\\Mern\\pathmodule\\index.js"))
// console.log(path.extname("c:\\kimti\\desktop\\Mern\\pathmodule\\index.js"))

//go up a level

// console.log(path.join("c:","throw","saket","extend","final"));
// console.log(path.join("c:","throw","saket","extend","final",".."))
// console.log(path.join("c:","throw","saket","extend","final","..",".."))

//normalize
console.log(path.normalize("/users/./docs/../data/file.txt"))

//parse method
console.log(path.parse("c:/users/docs/file.txt"))