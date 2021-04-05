<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<% request.setCharacterEncoding("utf-8");
		String name = request.getParameter("name");
		String major = request.getParameter("major");
		String passwd = request.getParameter("passwd");
	%>
	<h2>이름:<%=name %></h2>
	<h2>전공:<%=major %></h2>
	<h2>비번:<%=passwd %></h2>
</body>
</html>