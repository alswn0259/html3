function createCal() {

    // 2021년 4월
    let today = new Date();
    let thisYear = today.getFullYear(); // 2021
    let thisMonth = today.getMonth(); // 4 0:1월 ~ 11:12월
    let thisDate = today.getDate(); // 6
    let thisDay = today.getDay(); // 0:일 ~ 6:토
    console.log(thisYear);
    console.log(thisMonth);
    console.log(thisDate);
    console.log(thisDay);

    let lastDate = new Date(thisYear, thisMonth + 1, 0).getDate(); //0:지난달 마지막날 1:이번달의 첫째날 2:이번달의 둘째날 
    //thisMonth에 +1하고 0하면 이번달의 마지막날
    let firstDay = new Date(thisYear, thisMonth, 1).getDay(); //이번달 첫째날의 요일정보
    // firstDay = 4
    document.write(
        '<table border="1"><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>');
    document.write('<tr>');
    for (let j = 0; j < firstDay; j++) {
        document.write('<td></td>');
    }
    for (let i = 1; i <= lastDate; i++) {
        //if((firstDay+i)%7)
        //document.write('<td>');

        if ((firstDay + i) % 7 == 0) {
            document.write('<td style="background-color: blue";>' + i + '</td>');
            document.write('</tr><tr>');
        } else if ((i - firstDay) % 7 == 0) {
            document.write('<td style="background-color: red";>' + i + '</td>');
        } else if (i == thisDate) {
            document.write('<td style="background-color: yellow";>' + i + '</td>');
        } else {
            document.write('<td>' + i + '</td>');
        }
    }
    document.write('</tr>');
    document.write('</table>');
}