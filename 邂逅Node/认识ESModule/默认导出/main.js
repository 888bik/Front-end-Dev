let flag = true;
if (true) {
  import('./bar.js').then(bar => {
    console.log(bar.age);
    console.log(bar.name);
  })
}



//fn可以任何命名
// import fn from "./bar.js"
// console.log(fn());
