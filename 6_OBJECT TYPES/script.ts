console.log("============== Interface ==============");

interface Product {
  name: string;
  price: number;
  isAvaliable: boolean;
}
function showProduct(product: Product) {
  if (product.isAvaliable) {
    return `${product.name} custa R$${product.price}`;
  } else {
    return `Indisponivel`;
  }
}
const tshirt: Product = {
  name: "Camiseta",
  price: 39.99,
  isAvaliable: true,
};
console.log(showProduct(tshirt));

console.log("=========== Interface com parametro opcional ===========");

interface UserTypes {
  email: string;
  myRole?: string;
}
function showUserDetails(user: UserTypes) {
  console.log(`o usuario tem o email: ${user.email}`);
  if (user.myRole) {
    console.log(`Sua função é ${user.myRole}`);
  }
}
const u1: UserTypes = { email: "araujRafael@email.com", myRole: "Dev" };
const u2: UserTypes = { email: "jhon@email.com" };
showUserDetails(u1);
showUserDetails(u2);

console.log("=========== readonly ===========");

interface Car {
  brand: string;
  readonly wheels: number;
}
const fusca: Car = {
  brand: "vw",
  wheels: 4,
};
// fusca.wheels = 5 -> não pode alterar por causa do readonly
console.log(fusca);

console.log("=========== index signature ===========");

interface Coords {
  [index: string]: number;
}
const coords: Coords = {
  x: 10,
};
coords.y = 15;
console.log(coords);

console.log("=========== Extends Interface ===========");

interface Human {
  name: string;
  age: number;
}
interface SuperHuman extends Human {
  powers: string[];
}

const rafa: Human = {
  name: "Rafael",
  age: 27,
};
const goku: SuperHuman = {
  name: "Goku",
  age: 30,
  powers: ["kamekameha", "dinkedama"],
};
console.log(rafa, goku);

console.log("=========== Intersection type ===========");

interface Character {
  name: string;
}
interface Gun {
  type: string;
  caliber: number;
}
interface Movies {
  movies: string[];
}

type HumanWithGun = Character & Gun & Movies;
const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
  movies: ["Terminator", "..."],
};
console.log(arnold);

console.log("=========== ReadOnlyArray ===========");
const arr: ReadonlyArray<string> = ["maca", "pera", "uva"];
// arr[3] = "mamao" -> não permite
// apenas por metodos como map

console.log("=========== Tupla ===========");

type FiveNumbers = [number, number, number, number, number];
const myNumberArray: FiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: FiveNumbers = [1, 2, 3, 4, 5, 6]; -> erro de tipo
console.log(myNumberArray);

console.log("=========== Tupla com readonly ===========");
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10 -> não pode!
  console.log(numbers[0]);
  console.log(numbers[1]);
}
showNumbers([1, 2]);
