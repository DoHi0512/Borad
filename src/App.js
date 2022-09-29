import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="con">
      <h1>게시글</h1>
      <div className="post">
        <div className="explain">
          <div className="line">
            <span>게시판 종류</span>
            <span>자유게시판</span>
          </div>
          <div className="line">
            <span>시간</span>
            <span>자유게시판</span>
          </div>
          <div className="line">
            <span>제목</span>
            <span>test</span>
          </div>
          <div className="line">
            <span>작성자</span>
            <span>자유게시판</span>
          </div>
          <div className="line">
            <span>조회수</span>
            <span>자유게시판</span>
          </div>
          <div className="line cont">
            <span>내용</span>
          </div>
          <div className="content">
            <span>
             개추 부탁드립니다
            </span>
          </div>
          <button className="goodbtn">추천 {1}</button>
        </div>
      </div>
      <button className="listbtn">목록으로</button>
      <div className="prev">
        <a href="" className="prevComment">
          이전 댓글 더보기
        </a>
      </div>
      <div className="comments">
        <span className="comment">댓글 {1}개</span>
      </div>
      <div className="commentlist">
        <span className="author">이동훈</span>
        <span className="story">멋진 글이네요</span>
        <span className="date">날짜</span>
      </div>
      <div className="write">
        <form>
          <textarea
            rows="10"
            cols="150"
            className="textbox"
            placeholder="내용을 입력해주세요"
          ></textarea>
          <input type="submit" value="댓글쓰기" className="sub" />
        </form>
      </div>
    </div>
  );
}

export default App;
