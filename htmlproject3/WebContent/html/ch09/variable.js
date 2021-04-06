var num1 = 10.5;
var num2 = 20;
console.log(typeof num1);
num1 = '10.05';
num2 = '20.45';
console.log(typeof num1);

// var result = parseInt(num1) + parseInt(num2);
var result = parseFloat(num1) + parseFloat(num2);

console.log(result);

var num3 = null;
num3 = {
    name: 'Hong',
    age: 20
};
console.log(typeof num3);
console.log(num3.name);
console.log(num3.age);

num3 = true;
console.log(typeof num3);
num3 = 0; //0, '', null => 거짓  나머지는 숫자,문자 => 참
if (num3) {
    console.log('참입니다.');
} else {
    console.log('거짓입니다.');
}

numbers = [];
numbers[0] = 10;
numbers[1] = 20;
// numbers[2] = 'hello';
numbers[2] = 30;
result = 0;

for(var i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
    result += numbers[i];
}
console.log('합계: ' + result);

document.write('<table border="1">');
for(var i = 1; i < 10; i++) {
    // document.write('2 * ' + i + ' = ' + (2*i) + '<br>');
    document.write('<tr><td>2 * ' + i + '</td><td class = "equals"> = </td><td>' + 2*i + '</td></tr>');    
    console.log('2 * ' + i + ' = ' + (2*i) );
}
document.write('</table>');

// var n1 = window.prompt('첫번째 값: ');
// var n2 = window.prompt('두번째 값: ');
// console.log(parseInt(n1) + parseInt(n2) + '을 입력....');

var num = window.prompt('구구단 몇단?');
for(var i=1; i<10; i++) {
    document.write('<tr><td>' +  num + ' * ' + i + '</td><td class = "equals"> = </td><td>' + num*i + '</td><br></tr>');
}


