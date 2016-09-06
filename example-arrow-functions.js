var names = ['Andrew', 'Julie', 'Jen'];

/*names.forEach(function (name) {
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('forEach', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Obi'));*/

/*var person = {
    name: 'Obi',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
}

person.greet();*/

function add(a,b) {
    return a + b;
}

var addExpression = (n, m) => n + m;

var addStatement = (n, m) => {
    return n + m;
}

console.log(addExpression(2,4));
console.log(addStatement(5,3));

/*console.log(add(1,3));
console.log(add(9,0));*/
