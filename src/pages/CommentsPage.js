import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { getComments } from "../store/IssueActions";
import "./CommentsPage.css";

const CommentsPage = () => {
  const { id } = useParams();
  console.log(id);

  const username = useSelector((state) => state.issues.username);
  const repo = useSelector((state) => state.issues.repo);

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.issues.comments);

  useEffect(() => {
    dispatch(getComments(username,repo,id));
  }, [dispatch,repo,username, id]);


  return (
    <section className="comments-section">
      <h1>Comments section</h1>
      <div className="comments">
        {comments.length > 0 ?
          comments.map((comment, i) => {
            const {
              reactions: { heart, confused, eyes, laugh, rocket },
            } = comment;

            return (
              <div key={i} className="comments-container">
                <div className="user-container">
                  <img src={comment.user.avatar_url} alt="user" />
                  <div className="user">
                    {comment.user.login} commented at{" "}
                    <span>{comment.created_at}</span>
                  </div>
                </div>
                <p>{comment.body}</p>
                <div className="reactions">
                  {heart > 0 && (
                    <div>
                      <span>
                        ❤️
                        {heart}
                      </span>
                    </div>
                  )}
                  {comment.reactions["+1"] > 0 && (
                    <div>
                      <span>
                        👍
                        {comment.reactions["+1"]}
                      </span>
                    </div>
                  )}
                  {comment.reactions["-1"] > 0 && (
                    <div>
                      <span>
                        👎
                        {comment.reactions["-1"]}
                      </span>
                    </div>
                  )}
                  {eyes > 0 && (
                    <div>
                      <span>
                        👀
                        {eyes}
                      </span>
                    </div>
                  )}
                  {confused > 0 && (
                    <div>
                      <span>
                        confused
                        {confused}
                      </span>
                    </div>
                  )}
                  {laugh > 0 && (
                    <div>
                      <span>
                        😄
                        {laugh}
                      </span>
                    </div>
                  )}
                  {rocket > 0 && (
                    <div>
                      <span>
                        🚀
                        {rocket}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          }) : <h2>There is no comments for this issue.</h2>}
      </div>
      <Footer/>
    </section>
  );
};
export default CommentsPage;
