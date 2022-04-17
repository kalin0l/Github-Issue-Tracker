import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { getComments } from "../store/IssueActions";
import Reactions from "../components/Reactions";
import moment from "moment";
import "./CommentsPage.css";

const CommentsPage = () => {
  const { id } = useParams();

  const username = useSelector((state) => state.issues.username);
  const repo = useSelector((state) => state.issues.repo);

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.issues.comments);

  useEffect(() => {
    dispatch(getComments(username, repo, id));
  }, [dispatch, repo, username, id]);

  return (
    <section className="comments-section">
      <h1>Comments section</h1>
      <div className="comments">
        {comments.length > 0 ? (
          comments.map((comment, i) => {
            const {
              reactions: { heart, confused, eyes, laugh, rocket },
            } = comment;
            const date = moment(comment.created_at).format("YYYY-MM-DD");
            return (
              <div key={i} className="comments-container">
                <div className="user-container">
                  <img src={comment.user.avatar_url} alt="user" />
                  <div className="user">
                    {comment.user.login} commented at <span>{date}</span>
                  </div>
                </div>
                <p>{comment.body}</p>
                <Reactions heart={heart} comment={comment} eyes={eyes} confused={confused} laugh={laugh} rocket={rocket}/>
              </div>
            );
          })
        ) : (
          <h2>There is no comments for this issue.</h2>
        )}
      </div>
      <Footer />
    </section>
  );
};
export default CommentsPage;
