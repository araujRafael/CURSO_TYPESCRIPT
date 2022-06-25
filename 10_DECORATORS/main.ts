function myDecorator() {
  console.log("iniciando decorator!");
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator!");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  testing() {
    console.log("terminando execução do método");
  }
}
const myObj = new MyClass();
myObj.testing();

// 2 - multiplos decorators
console.log("==================== Multiple decorators ===================");
function a() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou funçõa a.");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

function b() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou funçõa b.");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}
class MultipleDecorators {
  constructor() {
    this.test();
  }
  @a() // Segundo
  testing() {
    console.log("multiple decorators");
  }

  @b() // Primeiro
  test(): void {
    console.log("from constructor of test()");
  }
}

const mult = new MultipleDecorators();
mult.testing();

// 3 - Class Decorators
console.log("==================== Class Decorators ===================");

function classDecor(constructor: Function) {
  console.log(constructor.name);
  if (constructor.name == "User") {
    console.log("Criando Usuário");
  }
}
@classDecor
class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
const matheus = new User("Matheus");
console.log(matheus.name);

// 4 - Methods Decorators
console.log("==================== Methods Decorators ===================");
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}
class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }
  /* 
    Enumerable retira o metodo da classe, true por default
  */
  @enumerable(false)
  showName() {
    return `O nome da maquina é ${this.name}`;
  }
}
const trator = new Machine("Trator");
console.log(trator.showName());

// 5 - Accessor Decorators
console.log("==================== Accessor Decorators ===================");

class Monster {
  protected name?;
  protected age?;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  /* 
    com getters ele funciona ao contrario.
  */
  @enumerable(true)
  get showName() {
    return `o nome do monstro é ${this.name}`;
  }
  get showAge() {
    return `a idade do monstro é ${this.age}`;
  }
}
const charmander = new Monster("charmander", 6);
console.log(charmander);
console.log(charmander.showName);
console.log(charmander.showAge);

// 6 - Property Decorators
console.log("==================== Property Decorators ===================");

// id = 00001
function formatNumbers() {
  return function (target: object, propertKey: string) {
    let value: string;
    const getter = function () {
      return value;
    };
    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0");
    };
    Object.defineProperty(target, propertKey, {
      set: setter,
      get: getter,
    });
  };
}
class ID {
  @formatNumbers()
  id;
  constructor(id: string) {
    this.id = id;
  }
}
const newId = new ID("1");
console.log(newId);

// 7 - Exemplo real
console.log("==================== Exemplo real ===================");

interface ProductType {
  id: number;
  created_at?: Date;
  get showId(): string;
}

function createdAtGen(created: Function) {
  created.prototype.created_at = new Date();
}

@createdAtGen
class Book implements ProductType {
  id;
  created_at?: Date;
  constructor(id: number) {
    this.id = id;
  }
  get showId(): string {
    return `o id é: ${this.id}`;
  }
}

@createdAtGen
class Pen implements ProductType {
  id;
  created_at?: Date;
  constructor(id: number) {
    this.id = id;
  }
  get showId(): string {
    return `o id é: ${this.id}`;
  }
}
const book = new Book(1);
const pen = new Pen(12);

console.log(book);
console.log(pen);
