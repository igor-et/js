"use strict";


var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

const checkEmail = /^[a-zA-Z0-9._-]+@(gmail|yahoo)\.com$/;

//const validUsers = arr.filter(user => checkEmail.test(user.email));
//console.log(validUsers);

var validArr = [];


for (let user of arr) {
    if (checkEmail.test(user.email)) {
        console.log("ok :", user.email + " --> adding to new arr");
        validArr.push(user);
    } else {
        console.log("not ok:", user.email);
    }
}
console.log("New array with valid email: " );
console.log(validArr);


