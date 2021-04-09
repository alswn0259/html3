let json = [{
            id:1,
            first_name:"Beulah",
            last_name:"Britee",
            email:"bbritee0@amazonaws.com",
            gender:"Male",
            ip_address:"35.154.246.112"
        }, {
            id:2,
            first_name:"Chloette",
            last_name:"Ferenczi",
            email:"cferenczi1@printfriendly.com",
            gender:"Female",
            ip_address:"214.96.74.88"
        }, {
            id:3,
            first_name:"Ginni",
            last_name:"Gabey",
            email:"ggabey2@weebly.com",
            gender:"Female",
            ip_address:"150.22.138.195"
        }, {
            id:4,
            first_name:"Grace",
            last_name:"Jaulme",
            email:"gjaulme3@zdnet.com",
            gender:"Male",
            ip_address:"52.69.205.163"
        }, {
            id:5,
            first_name:"Jose",
            last_name:"Gainseford",
            email:"jgainseford4@forbes.com",
            gender:"Genderqueer",
            ip_address:"118.17.1.232"
        }];

        

        console.log(json);

        //id, first_name, last_name, email, gendar
        let bdy = document.getElementsByTagName('body');
        let tb = document.createElement('table');
        tb.setAttribute('border',1);
        bdy[0].appendChild(tb);

        let titles = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];

        let trTag = document.createElement('tr');

        let chkbox = document.createElement('input');
        chkbox.setAttribute('type','checkbox');
        chkbox.onchange = allCheck;
        let thTag = document.createElement('th');
        thTag.appendChild(chkbox);
        trTag.appendChild(thTag);

        for(title of titles) {
             thTag = document.createElement('th');
            let text = document.createTextNode(title);
            thTag.appendChild(text);
            trTag.appendChild(thTag);
        }

        btn = document.createElement('input');
        btn.setAttribute('type', 'button');
        btn.setAttribute('value','SelectedDel');
        btn.onclick = delSelected;
        tdTag = document.createElement('td');
        tdTag.appendChild(btn);
        trTag.appendChild(tdTag);

       tb.appendChild(trTag);

        for(data of json) {
        trTag = document.createElement('tr');

        
        chkbox = document.createElement('input');
        chkbox.setAttribute('type','checkbox')
        chkbox.onchange = allCheck;
        let tdTag = document.createElement('td');
        tdTag.appendChild(chkbox);
        trTag.appendChild(tdTag);
        
        for(field in data) {
        tdTag = document.createElement('td');
        let text = document.createTextNode(data[field]);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
        }
        //btn 항목 추가
        btn = document.createElement('input');
        btn.setAttribute('type', 'button');
        btn.setAttribute('value','Del');
        btn.onclick = delFunc;
        tdTag = document.createElement('td');
        tdTag.appendChild(btn);
        trTag.appendChild(tdTag);

        tb.appendChild(trTag);
        }

        //한건 지우기
        function delFunc() {
            console.log(this.parentNode.parentNode.remove()); //이벤트에서 쓰이면 버튼을 말함.
        }
        //전체선택
        function allCheck() {
            let tChk = document.querySelector('th>input[type="checkbox"]') ;
            let checks = document.querySelectorAll('td>input[type="checkbox"]');
            for(let i=0; i<checks.length; i++) {
                checks[i].checked = tChk.checked;
            }
        }
        
        //선택지우기
        function delSelected() {
            let checkedAll = document.querySelectorAll('td>input[type="checkbox":checked]'); //checkbox중에서 체크된거 가지고오겠다
            console.log(checkedAll);
            for (let i=0; i<checkedAll.length; i++) {
                checkedAll[i].parentNode.parentNode.remove();
            }
        }
