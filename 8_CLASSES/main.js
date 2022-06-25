"use strict";
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    get itemTitle() {
        return `O titulo é: ${this.title}`;
    }
    set itemTitle(t) {
        this.title = t;
    }
}
const myBlog = new BlogPost("Meu Cenario de amor");
console.log(myBlog.itemTitle);
myBlog.itemTitle = "Carolina";
console.log(myBlog.itemTitle);
// 10 - Override de Métodos
class Base {
    someMethod() {
        console.log("log da classe Base");
    }
}
// herdou um metodo da classe
class Nova extends Base {
    /*
      Caso você crie um metodo com o mesmo nome
      ele irá sobreescrever o metodo herdado nõa o utilizando mais
    */
    someMethod() {
        console.log("log da classe Nova");
    }
}
const myObj = new Nova();
myObj.someMethod();
// 11 - Acesso as classes
// public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
// Mesmo herdando de outra classe é possivel ter acesso
const dInstance = new D();
console.log(dInstance.x);
// protected
class E {
    constructor() {
        this.x = 10;
    }
}
class F extends E {
    showX() {
        console.log(`X = ${this.x}`);
    }
}
const fInstance = new F();
// console.log(fInstance.x); não tem a cesso a propriedade x
fInstance.showX();
// private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    // metodos e proriedades so podem ser acessados por outros metodos
    privateMethod() {
        return this.name + "method";
    }
    showName() {
        return this.name;
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
class ExtendsPrivate extends PrivateClass {
    returnPriveteMethod() {
        /*
          Por ser um metodo privado so pode ser
          acessado pela propria classe. Se fosse
          protected porderia ser acessado
        */
        // return this.privateMethod()
    }
}
// 14 - Static members
class StaticMembers {
    static staticMethod() {
        console.log("Metodo statico");
    }
}
StaticMembers.prop = "Test Static";
const Stt = new StaticMembers(); // instancia de uma classe
StaticMembers.prop;
StaticMembers.staticMethod();
/*
  static permite que chame
  uma propriedade ou metodo
  sem instanciar uma classe
*/
//15 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    showItems() {
        return `${this.first} ${this.second}`;
    }
}
const newItem1 = new Item("Caixa", "Surpresa");
// newItem1.first = "Ca";
console.log(newItem1.showItems());
// 16 - Parameters properties
class ParametersProperty {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    showPrice() {
        return `O preço é ${this.price}`;
    }
    showQty() {
        return `O quantidade é ${this.qty}`;
    }
}
const newShirt = new ParametersProperty("Camisa", 5, 19.9);
console.log(newShirt.name);
// console.log(newShirt.price);
console.log(newShirt.showPrice());
console.log(newShirt.showQty());
// 17 - Class Expressions
const myGenericClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myGenericClass("Rafael");
console.log(pessoa);
console.log(pessoa.name);
// 18 - abstract class
class AbstractClass {
}
// const abs = new AbstractClass()
/*
  Não pode criar uma instacia de uma classe abstrata
*/
class ExtendsAbsClass extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const exds = new ExtendsAbsClass("Rafa extends");
exds.showName();
