// 元组写法:
const p: [string, number, boolean] = ["hhh", 12, false];
console.log(p[0]);
console.log(typeof p.length);

const p1: [number, string?, string?] = [3];
console.log(p1[0]);

//元组的可读性可能不好,这里并不能直接知道这三个元素都代表什么,所以在ts4.0中,有了具名元组的支持:
const p2: [name: string, age: number, isGood: boolean] = ["zsd", 21, true];
