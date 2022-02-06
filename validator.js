// function User(fN, lN) {
//     this.fN = fN,
//     this.lN = lN,
//     this.getN() {
//         return this.lN;
//     }
// }

// var user = new User('Pham', 'Hào');

// console.log(user.getN())

var ten = {
    name: 'Haodeptrai',
    age: 18,
    getN() {
        return this.name
    }
}

console.log(ten.getN())