import { useSelector } from "react-redux";
import React from "react";

const IssueItem = ({ page, openIssue }) => {
  const newIssues = useSelector((state) => state.issues.newIssues);

  return (
    <div>
      {newIssues &&
        newIssues.length > 0 &&
        newIssues[page].map((issue, i) => {
          return (
            <div key={i} className="issues">
              <div
                onClick={() => openIssue(issue.number)}
                className="user-details"
              >
                <img src={issue.user.avatar_url} alt="avatar" />
                <h1>{issue.title}</h1>
              </div>
              {issue.assignee ? (
                <span>{issue.assignee}</span>
              ) : (
                <span>unassigned</span>
              )}
            </div>
          );
        })}
    </div>
  );
};
export default IssueItem;
