<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
    <%
		String name = request.getParameter("name");
		String sex = request.getParameter("sex");
		String year = request.getParameter("year");
        String[] subject = request.getParameterValues("subject");
        String[] hobby = request.getParameterValues("hobby");
	%>

    <h2>이름:<%=name %></h2>
	
    <h2>성별:<%=sex %></h2>
	
    <h2>학년:<%=year %></h2>
    
    <h2>관심:
    <%  
    for(int i=0; i<subject.length; i++) {
    String checkSubject = subject[i]; %>
    <%=checkSubject %>/
    <%} %>
	
	<h2>취미:
    <%  
    for(int i=0; i<hobby.length; i++) {
    String selectHobby = hobby[i]; %>
    <%=selectHobby %>/
    <%} %>
</body>
</html>