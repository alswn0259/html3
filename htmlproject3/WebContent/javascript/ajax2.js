let xhtp = new XMLHttpRequest();
xhtp.onreadystatechange = function() { //이 이벤트가 발생할대마다 함수 실행하시오
    // 4: request finished and response is ready
    // 200: server status : OK
    if(xhtp.readyState == 4 && xhtp.status == 200) {
        console.log(xhtp.responseXML); //XML 속성값을 읽어옴
        let doc = xhtp.responseXML;
        let rows = doc.getElementsByTagName('record');
        for(let i=0; i<rows.length; i++) {
            console.log(rows[i].children[0].innerHTML, 
                        rows[i].children[1].innerHTML, 
                        rows[i].children[2].innerHTML,
                        rows[i].children[3].innerHTML,
                        rows[i].children[4].innerHTML
                        );
        }
        
    }
}
xhtp.open('get', 'dataset.xml');
xhtp.send();