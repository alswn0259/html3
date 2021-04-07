let names = [] // new Array();
        names[0] = 'Hong';
        names.push('한주환'); //배열의 마지막 요소에 값 추가
        names.push('이동식');
        names.unshift('박정재'); //배열 맨 앞에 추가

        delete names[0]; //배열 요소 삭제 . 빈공간 undefine으로 공간만 남음
        names.pop(); //제일 뒤쪽 요소부터 제거
        names.shift();//제일 앞쪽 요소부터 제거. 공간까지 삭제됨. 요소들 앞으로 당겨짐

        for(let i=0; i<names.length; i++) {
            console.log(i, names[i]);
        }
        let ns = names.join(', '); //-매개값으로 요소들 join해줌
        console.log(ns);

        ns = names.reverse(); //또 다른 배열 만들어져 순서바꿔줌
        console.log(ns);
        console.log(names); //위에 바꿔서 원본도 바뀜

        names.reverse();
        names.push('오지화');

        ns =  names.slice(1,2); //원본은 유지. 1부터 2까지 잘라내겠습니다.
        console.log(ns);
        console.log(names);
