console.log("============== Interface ==============");
function showProduct(product) {
    if (product.isAvaliable) {
        return "".concat(product.name, " custa R$").concat(product.price);
    }
    else {
        return "Indisponivel";
    }
}
var tshirt = {
    name: "Camiseta",
    price: 39.99,
    isAvaliable: true
};
console.log(showProduct(tshirt));
console.log("=========== Interface com parametro opcional ===========");
function showUserDetails(user) {
    console.log("o usuario tem o email: ".concat(user.email));
    if (user.myRole) {
        console.log("Sua fun\u00E7\u00E3o \u00E9 ".concat(user.myRole));
    }
}
var u1 = { email: "araujRafael@email.com", myRole: "Dev" };
var u2 = { email: "jhon@email.com" };
showUserDetails(u1);
showUserDetails(u2);
console.log("=========== readonly ===========");
var fusca = {
    brand: "vw",
    wheels: 4
};
// fusca.wheels = 5 -> não pode alterar por causa do readonly
console.log(fusca);
console.log("=========== index signature ===========");
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
console.log("=========== Extends Interface ===========");
var rafa = {
    name: "Rafael",
    age: 27
};
var goku = {
    name: "Goku",
    age: 30,
    powers: ["kamekameha", "dinkedama"]
};
console.log(rafa, goku);
console.log("=========== Intersection type ===========");
var arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
    movies: ["Terminator", "..."]
};
console.log(arnold);
console.log("=========== ReadOnlyArray ===========");
var arr = ["maca", "pera", "uva"];
// arr[3] = "mamao" -> não permite
// apenas por metodos como map
console.log("=========== Tupla ===========");
var myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: FiveNumbers = [1, 2, 3, 4, 5, 6]; -> erro de tipo
console.log(myNumberArray);
console.log("=========== Tupla com readonly ===========");
function showNumbers(numbers) {
    // numbers[0] = 10 -> não pode!
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
