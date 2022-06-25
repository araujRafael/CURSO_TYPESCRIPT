var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// operador instanceof
console.log("------ operador instanceof ------");
var User = /** @class */ (function () {
    function User(name, role) {
        this.name = name;
        this.role = role;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name, role) {
        return _super.call(this, name, role) || this;
    }
    return SuperUser;
}(User));
var rafael = new SuperUser("Rafael", "adm");
var paul = new User("Paul", "user");
console.log(rafael);
console.log(paul);
function greetings(user) {
    if (user instanceof SuperUser) {
        console.log("Ol\u00E1 ".concat(user.name, " voc\u00EA \u00E9 um ").concat(user.role, "."));
    }
    else if (user instanceof User) {
        console.log("Ol\u00E1 ".concat(user.name, " voc\u00EA \u00E9 um ").concat(user.role, "."));
    }
}
greetings(rafael);
greetings(paul);
// operador in
console.log("-------- operador in --------");
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var caramelo = new Dog("Caramelo");
var bob = new Dog("Bob", "Pastor alemão");
function showDogDetails(dog) {
    // "in" verifica se é uma variavel da classe
    if ("breed" in dog) {
        console.log("O cachorro \u00E9 da ra\u00E7a ".concat(dog.breed));
    }
    else {
        console.log("O cachorro \u00E9 um SRD");
    }
}
showDogDetails(caramelo);
showDogDetails(bob);
// Teste
function handleReview(review) {
    if (typeof review === "boolean") {
        return "O usu\u00E1rio n\u00E3o deixou o review.";
    }
    else if (typeof review === "number") {
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
