// $(document).ready(function () {
        //     $.ajax({
        //         url:'../MOCK_DATA.json',
        //         success: function(data) {
        //             let ulTag = $('<ul />');
        //             console.log(data);
        //             for(let i=0; i<data.length; i++) {
        //             let liTag = $('<li />').html(data[i].id);
        //             ulTag.append(liTag);
        //         }
        //         $('body').append(ulTag);
        //         }
        //     });
        
        //방법1 : 나
        // $(document).ready(function () {
        //     $.ajax({
        //         url:'../MOCK_DATA.json',
        //         success: function(data) {
        //             let tbl = $('<table border="1" />').css('background-color', 'aqua');
        //             for(da of data) {
        //             let trTag = $('<tr />');
        //             for(field in da) {
        //                 let tdTag = $('<td />').html(da[field]);
        //                 trTag.append(tdTag);
        //             }
        //             tbl.append(trTag);
        //         }
        //             $('body').append(tbl);
        //         }
        //     })
        // });

        //방법2 : 교수님
        $(document).ready(function() {
            $.ajax({
                url: '../MOCK_DATA.json',
                success: function(data) {
                    let table = [];
                    table.push('<table border="1">');
                    for(let i=0; i<data.length; i++) {
                        table.push('<tr>');
                            for(field in data[i]) {
                                table.push('<td>' + data[i][field] + '</td>');
                            }
                        table.push('</tr>');
                    }
                    table.push('</table>');
                    let tag = table.join('');
                    $('body').html(tag);
                }
            })
        })

        //each (java에서 jsp 파일 이용 )
        $.ajax({
            url: '../MOCK_DATA.json',
            type: 'get', //default
            data: 'name=hong&age=20', //페이지 호출할대 
            dataType: 'json',
            success: function(data) {
                console.log(data);
                let arry = data;
                let ulTag = $('<ul />');
                $(arry).each(function(idx, obj) {
                    console.log(idx, obj);
                    //두개 결과 같음
                    // ulTag.append($('<li />').html('<a href="#">' + obj.first_name + '</a>'));
                    ulTag.append($('<li />').append(
                                    $('<a />')
                                    .html(obj.first_name)
                                    .attr('href','get.jsp?name=' + obj.first_name)
                                    )
                                );
                });
                $('body').append(ulTag);
            },
            error: function(reject) {
                console.error(reject.status, reject.statusText);
            }
        });