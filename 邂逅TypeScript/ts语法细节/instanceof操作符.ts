class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}
class Teacher extends Person {
  constructor(
    name: string,
    age: number,
    private subject: string,
    private salary: number
  ) {
    super(name, age);
  }
  teaching() {
    console.log(this.name + "教书" + "薪水:", this.salary);
  }
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    private _score: number,
    private _id: number
  ) {
    super(name, age);
  }
  learning() {
    console.log(this.name + "学习");
  }

  public get score(): string {
    return this.score;
  }

  public set id(v: number) {
    this._id = v;
  }
}

function test(instance: Teacher | Student) {
  if (instance instanceof Teacher) {
    instance.teaching();
  } else {
    instance.learning();
  }
}

test(new Teacher("zkz", 29, "计算机", 9999));
test(new Student("bik", 18, 100, 111));

const s = new Student("eee", 13, 100, 112);
s.id = 200;

const t = new Teacher("abc", 39, "物理", 10000);

export {};
