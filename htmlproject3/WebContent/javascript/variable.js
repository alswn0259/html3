// let num2 = 30; basic.js 랑 같이 script 되고 있어서 에러남

let numbers = [1, 2, 3, 4, 5];
document.write('<h1>Number</h1>');
document.write('<ul>')
let sum = 0;
for(let i=0; i<numbers.length; i++) {
   
    sum += numbers[i];
    document.write('<li>' + numbers[i] + '</li>');
}
document.write('<li>합계: ' + sum + '</li></ul>');
