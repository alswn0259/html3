//동기, 비동기
        // console.log('1');
        // setTimeout(function () {
        //     console.log('2');
        // }, 1000);
        // console.log('3');
  
        let xhtp = new XMLHttpRequest(); //서버랑 데이터 주고 받는 역할
        xhtp.onreadystatechange = function () {
            console.log(xhtp.readyState, xhtp.status);
            if (xhtp.readyState == 4 && xhtp.status == 200) {
                console.log(xhtp.responseText);
                let data = JSON.parse(xhtp.responseText);
                console.log(data);

                let trTag, tdTag, text;

                for(obj of data) { // 0, ...., 14
                    trTag = document.createElement('tr');

                    for(field in obj) { // id, first_name, .... , ip_adress
                        tdTag = document.createElement('td');
                        text = document.createTextNode(obj[field]);
                        tdTag.appendChild(text);
                        trTag.appendChild(tdTag);
                    }

                    tbl.appendChild(trTag);
                }
            }
            //1 서버연결 준비단계 0이 초기호됨
            //2 서버요청 받았다 200 페이지 정상적으로 있음
            //3 처리중이다
            //4 처리가 끝났다. 클라이언트에게 응답완료 200 정상적으로 잘 받아옴
        }
        xhtp.open('get', 'MOCK_DATA.json');
        xhtp.send();
