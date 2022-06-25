var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("======= Section 5 =======");
console.log("======= Tipo void =======");
function voidReturn() {
    console.log("Não retorna nada!");
}
console.log("======= callback como argumento! =======");
function greeting(name) {
    return "ol\u00E1 ".concat(name);
}
function preGreeting(cb, userName) {
    console.log("Preparando a função");
    var greet = cb(userName);
    console.log(greet);
}
preGreeting(greeting, "João");
preGreeting(greeting, "Matheus");
console.log("======= Generic functions =======");
// generaliza o tipo de retorno
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjs(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObj = mergeObjs({ name: "Rafael" }, { age: 27, job: "Developer" });
console.log(newObj);
console.log("======= Constrain =======");
function biggetsNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggetsNumber("2", "3"));
console.log(biggetsNumber(2, 3));
console.log("========== Especificar tipo de arguentos ==========");
function mergeArr(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArr([1, 2, 3], [32, 2, 33]));
console.log(mergeArr([1, 2, 3], ["name", "age", "job"]));
console.log("========== Parametros opcionais ==========");
function modernGreeting(name, greet) {
    return greet ? "Ol\u00E1 ".concat(greet, " ").concat(name, ". Tudo bem?") : "Ol\u00E1, ".concat(name, ". Tudo bem?");
}
console.log(modernGreeting("Rafael"));
console.log(modernGreeting("Rafael", "Sr."));
console.log("========== Default value ==========");
function sumDefault(n1, n2) {
    if (n2 === void 0) { n2 = 10; }
    return n1 + n2;
}
console.log(sumDefault(10));
console.log(sumDefault(10, 2));
console.log("========== Unknow type ==========");
function doSomething(x) {
    if (Array.isArray(x))
        return x[0];
    return x;
}
console.log(doSomething("z"));
console.log(doSomething([99, 2, 3]));
console.log("========== Never type ==========");
function showErrorMessage(err) {
    throw new Error(err);
}
// showErrorMessage("TIPO NEVER!");
console.log("========== Rest operator ==========");
// rest une todos em uma lista
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (acc, x) { return acc + x; }, 0);
}
console.log(sumAll(2, 2, 2));
console.log("========== Destructuring ==========");
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "".concat(name, " custa R$").concat(price);
}
var shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
