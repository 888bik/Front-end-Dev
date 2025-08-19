function toUpperCase(value, context) {
  if (context.kind === "filed") {
    return function (initialValue) {
      return typeof initialValue === "string"
        ? initialValue.toUpperCase()
        : initialValue;
    };
  }
}

class Person {
  name = initialName.call(this, "bik");
  constructor() {}
}

let initialName = toUpperCase(undefined, {
  kind: "filed",
  name: "name",
});

const p = new Person();
console.log(p.name);

export {};
