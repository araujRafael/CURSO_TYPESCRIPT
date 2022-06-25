"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("iniciando decorator!");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator!");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("terminando execução do método");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
// 2 - multiplos decorators
console.log("==================== Multiple decorators ===================");
function a() {
    return function (target, propertKey, descriptor) {
        console.log("Executou funçõa a.");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
function b() {
    return function (target, propertKey, descriptor) {
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
    testing() {
        console.log("multiple decorators");
    }
    test() {
        console.log("from constructor of test()");
    }
}
__decorate([
    a() // Segundo
], MultipleDecorators.prototype, "testing", null);
__decorate([
    b() // Primeiro
], MultipleDecorators.prototype, "test", null);
const mult = new MultipleDecorators();
mult.testing();
// 3 - Class Decorators
console.log("==================== Class Decorators ===================");
function classDecor(constructor) {
    console.log(constructor.name);
    if (constructor.name == "User") {
        console.log("Criando Usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecor
], User);
const matheus = new User("Matheus");
console.log(matheus.name);
// 4 - Methods Decorators
console.log("==================== Methods Decorators ===================");
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    /*
      Enumerable retira o metodo da classe, true por default
    */
    showName() {
        return `O nome da maquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
// 5 - Accessor Decorators
console.log("==================== Accessor Decorators ===================");
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /*
      com getters ele funciona ao contrario.
    */
    get showName() {
        return `o nome do monstro é ${this.name}`;
    }
    get showAge() {
        return `a idade do monstro é ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
const charmander = new Monster("charmander", 6);
console.log(charmander);
console.log(charmander.showName);
console.log(charmander.showAge);
// 6 - Property Decorators
console.log("==================== Property Decorators ===================");
// id = 00001
function formatNumbers() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumbers()
], ID.prototype, "id", void 0);
const newId = new ID("1");
console.log(newId);
// 7 - Exemplo real
console.log("==================== Exemplo real ===================");
function createdAtGen(created) {
    created.prototype.created_at = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
    get showId() {
        return `o id é: ${this.id}`;
    }
};
Book = __decorate([
    createdAtGen
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
    get showId() {
        return `o id é: ${this.id}`;
    }
};
Pen = __decorate([
    createdAtGen
], Pen);
const book = new Book(1);
const pen = new Pen(12);
console.log(book);
console.log(pen);
