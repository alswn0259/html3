var num1;
num1 = 10;
num1 = 'Hello';
num1 = false;
num1 = null;
num1 = {
    name: 'Hong',
    age: 20
}
num1 = [];
num1[0] = 10;
num1[1] = 20;
num1[2] = 'Hello';

num1 = function() {
    window.alert('Hello'); //창하나 띄워주는거
}

console.log(num1()); 
// console.log(typeof num1);

let num2; //let은 중복 선언이 안됨.
num2 = 10;

{
    let num2; //블럭안에서는 새로 선언가능
    num2 = 20;
    console.log('{num2: }' + num2);
}
num2 = 15;
console.log('num2: ' + num2);

const num3 = 77; //상수 선언
// num3 = 78;  다시 담는거 안됨




