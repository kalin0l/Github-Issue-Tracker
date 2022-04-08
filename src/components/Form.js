import { useDispatch, useSelector } from "react-redux";
import { IssueSliceActions } from "../store/Issue-slice";
import { getAllIssues } from "../store/IssueActions";
import "./Form.css";

const Form = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.issues.username);
  const repo = useSelector((state) => state.issues.repo);
  const error = useSelector((state) => state.issues.error);

  const FormHandler = (e) => {
    e.preventDefault();

    dispatch(IssueSliceActions.setError(""));
    dispatch(getAllIssues(username, repo));
  };

  return (
    <form onSubmit={FormHandler} className="issue-search">
      <label>
        <span>Enter username</span>
        <input
        className={`${error ? 'error':null}`}
          type="text"
          value={username}
          onChange={(e) =>
            dispatch(IssueSliceActions.setUsername(e.target.value))
          }
        />
      </label>
      <label>
        <span>Enter repo</span>
        <input
        className={`${error ? 'error':null}`}
          type="text"
          value={repo}
          onChange={(e) => dispatch(IssueSliceActions.setRepo(e.target.value))}
        />
      </label>
      {error && <p className="error-msg">{error}</p>}
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};
export default Form;
