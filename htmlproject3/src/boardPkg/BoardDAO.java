package boardPkg;

import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

//import boardPkg.DBCon;
//import boardPkg.Board;

public class BoardDAO {
	Connection conn = null; // 연결
	Statement stmt = null; // 쿼리 담당
	ResultSet rs = null; // 쿼리한거 담아주는 거

	String sql = null;

	public void close() {
		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if (stmt != null) {
			try {
				stmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} 
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
				}
			}
		}


	// 전체리스트
	public Board[] selectBoards() {
		sql = "select * from board order by board_no desc";
		conn = DBCon.getConnection(); // 이거만 하면 에러뜨니까 밑에 예외처리 해줌
		Board[] boards = new Board[100];
		int i = 0;
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql); // 쿼리한 결과 담겨짐
			while (rs.next()) { // 한건씩 읽어오겠다
				Board brd = new Board();
				brd.setBoardNo(rs.getInt("board_no")); // setBoardNo 매개값이 int 였음.
				brd.setTitle(rs.getString("title")); // setTitle 매개값이 String 이었음
				brd.setContent(rs.getString("content"));
				brd.setCreationDate(rs.getString("creation_date"));

				boards[i++] = brd;

			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
//			e.printStackTrace(); 에러났을때 빨간줄 뜨는거
			System.out.println("죄회처리중에 에러가 발생했습니다.");
		} finally {
			// 정상실행 or 예외발생 -> 항상 실행해야할 내용이 있으면 구현.
			close();
		}
		return boards;
	}

	// 한건조회
	public Board selectBoard(int boardNo) {
		sql = "select * from board where board_no = " + boardNo;
		conn = DBCon.getConnection(); // 항상 연결해줘야함
		Board brd = null;
		try {
			stmt = conn.createStatement(); // 연결하고 끊어주고
			rs = stmt.executeQuery(sql); // sql에서 받은 값 넣어주는거 stmt.executeQuery(String sql)
			if (rs.next()) {
				brd = new Board(rs.getInt("board_no"), rs.getString("title"), rs.getString("content"),
						rs.getString("writer"), rs.getString("creation_date"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			close();
		}
		return brd;
	}

	// 입력
	public void insertBoard(Board board) { // 5개의 변수 다 매개변수로 하는거보다 Board 클래스 쓰는게 나음
		conn = DBCon.getConnection();
		sql = "insert into board values(" + board.getBoardNo() + ", '" + board.getTitle() + "'" + ", '"
				+ board.getContent() + "'" + ", '" + board.getWriter() + "'" + ", sysdate" + ")";
		try {
			stmt = conn.createStatement();
			int r = stmt.executeUpdate(sql);
			System.out.println( r + "건 입력되었습니다.");

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
	}

	// 수정
	public void updateBoard(Board board) {
		conn = DBCon.getConnection();
		sql = "update board set content = " 
		  + "'" + board.getContent() + "'"
		  + "where board_no = " + board.getBoardNo();
		try {
			stmt = conn.createStatement();
			int r = stmt.executeUpdate(sql);
			System.out.println( r + "건 수정되었습니다.");
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
	}

	// 삭제
	public void deleteBoard(Board board) {
		conn = DBCon.getConnection();
		sql = "delete from board where board_no = " 
				+ board.getBoardNo();
		try {
			stmt = conn.createStatement();
			int r = stmt.executeUpdate(sql);
			System.out.println( r + "건 삭제되었습니다.");
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
	}
	
	
	public List<Board> getBoardList() {
		sql = "select * from board order by board_no desc";
		conn = DBCon.getConnection(); // 이거만 하면 에러뜨니까 밑에 예외처리 해줌
		List<Board> boards = new ArrayList<>();
		int i = 0;
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql); // 쿼리한 결과 담겨짐
			while (rs.next()) { // 한건씩 읽어오겠다
				Board brd = new Board();
				brd.setBoardNo(rs.getInt("board_no")); // setBoardNo 매개값이 int 였음.
				brd.setTitle(rs.getString("title")); // setTitle 매개값이 String 이었음
				brd.setContent(rs.getString("content"));
				brd.setWriter(rs.getString("writer"));
				brd.setCreationDate(rs.getString("creation_date"));

				boards.add(brd);

			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
//			e.printStackTrace(); 에러났을때 빨간줄 뜨는거
			System.out.println("죄회처리중에 에러가 발생했습니다.");
		} finally {
			// 정상실행 or 예외발생 -> 항상 실행해야할 내용이 있으면 구현.
			close();
		}
		return boards;
	}
	
}
