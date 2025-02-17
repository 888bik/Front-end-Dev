//交叉类型表示要同时满足多个类型

//表示变量要同时满足string和number,但是没有满足这样条件的值,所以Id是一个never类型
type Id = string & number;

//所以通常是对对象类型进行交叉的
interface Info {
  name: string;
  age: number;
}
interface Action {
  eating?: () => void;
  playing?: () => void;
}

type Person = Info & Action;

const bik: Person = {
  name: "bik",
  age: 20,
  eating: function () {
    console.log("干饭");
  },
  playing: function () {
    console.log("游戏");
  },
};
