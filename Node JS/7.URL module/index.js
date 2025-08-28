import {URL} from "url"

const myurl=new URL("http://www.google.com:8000/p/a/t/?query=string#yash")

// console.log(myurl.href)
// console.log(myurl.protocol)
// console.log(myurl.host)
// console.log(myurl.port)
// console.log(myurl.search)
// console.log(myurl.searchParams)
// console.log(myurl.search)

//both are same
console.log(myurl.toString())
console.log(myurl.toJSON())