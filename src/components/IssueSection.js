import React from "react";
import { useNavigate } from "react-router-dom";
import IssueItem from "./IssueItem";
import "./IssueSection.css";
import PaginationBtns from "./PaginationBtns";

const IssueSection = ({page,handlePage,nextPage,prevPage}) => {
    const history = useNavigate();


  const openIssue = (id) => {
      history(`/comments/${id}`);
  }

  return (
    <React.Fragment>
      <section className="issue-section">
       <IssueItem page={page} openIssue={openIssue}/>
      </section>
      <PaginationBtns handlePage={handlePage} nextPage={nextPage} prevPage={prevPage} page={page}/>
    </React.Fragment>
  );
};
export default IssueSection;
