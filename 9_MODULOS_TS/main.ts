import greetFunc from "./greet";
greetFunc();
import { x } from "./var";
console.log(x);
import { changeName as name } from "./changeName";
console.log(name);
// 5 - Import All
import * as nums from "./numbers";
import { HumnaType } from "./types";
console.log(nums.n1);
console.log(nums.n2);
console.log(nums.n3);

class User implements HumnaType {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const Rafa: User = new User("Rafa", 27);
console.log(Rafa);
