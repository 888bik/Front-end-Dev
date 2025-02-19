//常见的类型保护
//type , in ,instanceof,===,!==
//instanceof:检查一个值是否是另一个值的"实例"

//in:用于确定对象是否具有带名称的属性
type Fish = {
  swim: () => void;
};

type DOg = {
  run: () => void;
};
function move(animal: Fish | DOg) {
  if ("swim" in animal) {
    animal.swim();
  } else if ("run" in animal) {
    animal.run();
  }
}
