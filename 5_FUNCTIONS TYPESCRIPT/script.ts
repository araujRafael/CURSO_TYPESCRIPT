console.log("======= Section 5 =======");
console.log("======= Tipo void =======");

function voidReturn(): void {
  console.log("Não retorna nada!");
}

console.log("======= callback como argumento! =======");
function greeting(name: string) {
  return `olá ${name}`;
}
function preGreeting(cb: (name: string) => string, userName: string) {
  console.log("Preparando a função");
  const greet = cb(userName);
  console.log(greet);
}
preGreeting(greeting, "João");
preGreeting(greeting, "Matheus");

console.log("======= Generic functions =======");
// generaliza o tipo de retorno
function firstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

function mergeObjs<T, U>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}
interface objType {
  name: string;
  age: number;
  job: string;
}
const newObj: objType = mergeObjs<any, any>(
  { name: "Rafael" },
  { age: 27, job: "Developer" }
);
console.log(newObj);

console.log("======= Constrain =======");

function biggetsNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;
  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}
console.log(biggetsNumber("2", "3"));
console.log(biggetsNumber(2, 3));

console.log("========== Especificar tipo de arguentos ==========");

function mergeArr<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}
console.log(mergeArr([1, 2, 3], [32, 2, 33]));
console.log(mergeArr<number | string>([1, 2, 3], ["name", "age", "job"]));

console.log("========== Parametros opcionais ==========");

function modernGreeting(name: string, greet?: string) {
  return greet ? `Olá ${greet} ${name}. Tudo bem?` : `Olá, ${name}. Tudo bem?`;
}

console.log(modernGreeting("Rafael"));
console.log(modernGreeting("Rafael", "Sr."));

console.log("========== Default value ==========");

function sumDefault(n1: number, n2 = 10): number {
  return n1 + n2;
}

console.log(sumDefault(10));
console.log(sumDefault(10, 2));

console.log("========== Unknow type ==========");
function doSomething(x: unknown) {
  if (Array.isArray(x)) return x[0];
  return x;
}
console.log(doSomething("z"));
console.log(doSomething([99, 2, 3]));

console.log("========== Never type ==========");

function showErrorMessage(err: string): never {
  throw new Error(err);
}
// showErrorMessage("TIPO NEVER!");

console.log("========== Rest operator ==========");
// rest une todos em uma lista
function sumAll(...n: number[]) {
  return n.reduce((acc, x) => acc + x, 0);
}
console.log(sumAll(2, 2, 2));

console.log("========== Destructuring ==========");

interface destructuringType {
  name: string;
  price: number;
}
function showProductDetails({ name, price }: destructuringType): string {
  return `${name} custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
