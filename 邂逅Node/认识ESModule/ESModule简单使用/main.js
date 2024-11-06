// //导入方式一:
// // import {name,age,height} from "./foo.js"
// //导入方式二:
// // import * as foo from "./foo.js"
// //导入方式三:
// import { name as MyName, age as MyAge,height as MyHeight} from "./foo.js";
// console.log(MyName);
// console.log(MyAge);
// console.log(MyHeight);

export {age } from "./foo.js"
//export和import结合使用
console.log(name);