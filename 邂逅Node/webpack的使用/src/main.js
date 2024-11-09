const message = "hello webpack"
console.log(message);

function foo(x,y) {
  return x + y
}
const result = foo(100,392)
console.log(result);


bar = () => {
  console.log("I am bar");
}
bar();

const divEL = document.createElement("div");
divEL.textContent = "I am div";
const bodyEl = document.querySelector("body");
bodyEl.append(divEL);

const spanEl = document.createElement("span");
spanEl.textContent = "I am span";
divEL.append(spanEl);

const pEl = document.createElement("p");
pEl.textContent = "I am p";
bodyEl.append(pEl);