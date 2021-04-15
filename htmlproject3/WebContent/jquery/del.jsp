<%@page import="boardPkg.BoardDAO"%>
<%@page import="boardPkg.Board"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
String bno = request.getParameter("boardNo"); //getParameter 받는 타입값이 String
String til = request.getParameter("title");
String cnt = request.getParameter("content");
String wrt = request.getParameter("writer");
String date = request.getParameter("creationDate");

int boardNo = Integer.parseInt(bno);

Board board = new Board();
BoardDAO dao = new BoardDAO();

Board del = new Board();
del = dao.insertBoardResult(board);

out.print(del);
%>
