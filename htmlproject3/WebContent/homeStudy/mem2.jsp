<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
 
    request.setCharacterEncoding("UTF-8");
 
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
    .tbl {
        border: 1px solid gray;
        text-align: left;
    }
</style>
</head>
<body>
	<%
		String email1 = request.getParameter("email1");
        String email2 = request.getParameter("email2");
        String passwd1 = request.getParameter("passwd1");
        String passwd2 = request.getParameter("passwd2");
        String name = request.getParameter("name");
        String year = request.getParameter("year");
        String month = request.getParameter("month");
        String day = request.getParameter("day");
        String sex = request.getParameter("sex");
        String[] hobby = request.getParameterValues("hobby");
	%>
	
	<table class="tbl">
        <tr>
            <th>아이디(이메일)</th>
            <td><%=email1%>@<%=email2%></td>
        </tr>
        <tr>
            <th>비밀번호</th>
            <td><%=passwd1%></td>
        </tr>
        <tr>
            <th>비밀번호확인</th>
            <td><%=passwd2%></td>
        </tr>
        <tr>
            <th>이름</th>
            <td><%=name%></td>
        </tr>
        <tr>
            <th>생년월일</th>
            <td>
                <%=year %>년 <%=month %>월 <%=day %>일
            </td>
        </tr>
        <tr>
            <th>성별</th>
            <td><%=sex %></td>
        </tr>
        <tr>
            <th>취미</th>
            <td>
                <% 
                for(int i=0; i<hobby.length; i++) {
                String checkHobby = hobby[i]; %>
                <%=checkHobby %>/
                <%} %>
            </td>
        </tr>
	</table>

</body>
</html>