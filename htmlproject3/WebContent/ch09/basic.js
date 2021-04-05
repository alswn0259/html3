var fruit = 'Cherry';
fruit = ['Cherry', 'Strawberry', 'Melon'];
document.write('<h1>hello</h1>');
document.write('<ul>');
document.write('<li>Apple</li>');
document.write('<li>Banana</li>');
for(var i=0; i<fruit.length; i++) {
    document.write('<li>' + fruit[i] + '</li>');
}
document.write('</ul>');

function turn_on() {
    var bulbon = 10;
    bulbon = 'hello';
    bulbon = document.getElementById('img1');
    bulbon.setAttribute('class', 'img');
    bulbon.setAttribute('src',"https://www.w3schools.com/js/pic_bulbon.gif");
    console.log(bulbon);
}
function turn_off() {
    img = 'screen'; //선언 안하면 그냥 전역변수로됨
    console.log(img);
    var bulboff = document.getElementById('img1');
    bulboff.setAttribute('src',"https://www.w3schools.com/js/pic_bulboff.gif");
}
turn_off();

console.log(img);