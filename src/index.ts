let a = () => {
  console.log('priyank');
};

a();

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName () {
    return this.name;
  }
}

let p = new Person('priyank');
p.getName();
