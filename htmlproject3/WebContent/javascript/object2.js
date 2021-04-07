let obj = {} //new Object();
        obj.color = 'white';
        obj.price = 1000000;
        obj.info = function() {
            return obj.color + '' + obj.price;
        }
        // console.log(obj.color);
        // console.log(obj.price);
        // console.log(obj.info); //실행하고 싶으면 obj.info() 해주면됨

        function getTime() {
        let show = document.getElementById('show');
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth();
        let date = time.getDate();
        let hh = time. getHours();
        let mm = time.getMinutes();
        let ss = time.getSeconds();

        show.innerHTML = year + '년' + (month+1) + '월' + date + '일' 
                        + hh + ':' + mm + ':' + ss; 
        
        }
        // setInterval(function() {
        //     getTime();
        // },1000);

        var today = new Date();
        var nowYear = today.getFullYear();
        
        var theDate = new Date(nowYear, 11, 31);
        var diffDate = theDate.getTime() - today.getTime();

        var result = Math.ceil(diffDate / (60*1000*60*24));
        document.write("연말 D-day : " + result + "일 남았습니다.<br>");
        
        var today = new Date();
        
        var theTime = new Date(12, 50);
        var diffTime = theTime.getTime() - today.getTime();

        var result2 = Math.ceil(diffTime / (60*1000*60*24*365));
        document.write("점심시간까지 " + result2 + "분 남았습니다.");

        console.log(Math.abs(-100));
        console.log(Math.round(3.5));
        console.log(Math.ceil(3.5)); // 올림
        console.log(Math.ceil(Math.random()*6));
        console.log(Math.floor(Math.random()*6)+1);
        for (let i=0; i<10; i++) {
            console.log(Math.floor(Math.random()*45)+1);
        }
        console.log(Math.max(2, 4, 6, 1, -7));
        
