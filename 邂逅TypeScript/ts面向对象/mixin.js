function mixinAnimal(BaseClass) {
  return class extends BaseClass {
    running() {
      console.log("跑步");
    }
  };
}
function mixinFlying(BaseClass) {
  return class extends BaseClass {
    flying() {
      console.log("飞行");
    }
  };
}
class Bird {
  eating() {
    console.log("吃饭");
  }
}

class NewBird extends mixinAnimal(mixinFlying(Bird)) {}

const bird = new NewBird();
bird.running();
bird.eating();
bird.flying();
