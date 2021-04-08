 //정의문
 function square(num) {
    if (num == null){
        return 0;
    } else if(num == isNaN()) {
        return 0;
    }
    return num * num;
}
let result = square(3); //이거는 정의문 위에 와도 실행됨
console.log(result);

//표현식
let fnc = function(num) {
 if (num == null){
        return 0;
    } else if(num == isNaN()) {
        return 0;
    }
    return num * num;
}
console.log(fnc(4));

// count는 전역변수, cnt는 로컬변수
let count = 0;
function myFnc() {
 let cnt = 0;
 count++;
 cnt++;
 document.write(cnt+'<br>');
}
myFnc();

let theFnc = function() {
 let cnt = 0;
 count++;
 cnt++;
 document.write(cnt+'<br>');
}
theFnc(); theFnc(); theFnc(); theFnc();

//색깔바꾸기
let colors = ['yellow', 'red', 'blue', 'aqua'];
        let i = 0;

       function changeColor() {
            let bdy = document.getElementsByTagName('body'); //여러건중에 하나라 인덱스번호 붙음
            // bdy = document.getElementsByTagName('bdy'); //아이디값으로 받아오면 인덱스번호 안붙음
            
            // console.log(bdy[0]);
            // bdy[0].style.backgroundColor = 'yellow';

            console.log(bdy);
            bdy[0].style.backgroundColor = colors[i % 4];
            i++;
       }