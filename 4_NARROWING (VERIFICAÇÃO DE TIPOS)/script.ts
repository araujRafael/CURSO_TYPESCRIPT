// operador instanceof
console.log("------ operador instanceof ------");

class User {
  public name;
  public role;
  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }
}
class SuperUser extends User {
  constructor(name: string, role: string) {
    super(name, role);
  }
}
const rafael: SuperUser = new SuperUser("Rafael", "adm");
const paul: User = new User("Paul", "user");
console.log(rafael);
console.log(paul);

function greetings(user: User | SuperUser) {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name} você é um ${user.role}.`);
  } else if (user instanceof User) {
    console.log(`Olá ${user.name} você é um ${user.role}.`);
  }
}
greetings(rafael);
greetings(paul);

// operador in
console.log("-------- operador in --------");

class Dog {
  name;
  breed;
  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const caramelo = new Dog("Caramelo");
const bob = new Dog("Bob", "Pastor alemão");

function showDogDetails(dog: Dog) {
  // "in" verifica se é uma variavel da classe
  if ("breed" in dog) {
    console.log(`O cachorro é da raça ${dog.breed}`);
  } else {
    console.log(`O cachorro é um SRD`);
  }
}
showDogDetails(caramelo);
showDogDetails(bob);

// Teste
function handleReview(review: boolean | number) {
  if (typeof review === "boolean") {
    return `O usuário não deixou o review.`;
  } else if (typeof review === "number") {
    switch (review) {
      case 1:
        return "Precisa melhorar!";
      case 2:
        return "Está melhor do que antes!";
      case 3:
        return "Quase lá!";
      case 4:
        return "Muito bom!";
      default:
        return "Magnífico!";
    }
  }
}
console.log(handleReview(false));
console.log(handleReview(5));
