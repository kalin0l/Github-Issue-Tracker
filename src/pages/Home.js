import Form from "../components/Form";
import IssueSection from "../components/IssueSection";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../App.css";

const Home = () => {
  const [page, setPage] = useState(0);
  const newIssues = useSelector((state) => state.issues.newIssues);

  const handlePage = (i) => {
    setPage(i);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;
      if (newPage > newIssues.length - 1) {
        newPage = 0;
      }
      return newPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage - 1;
      if (newPage < 0) {
        newPage = newIssues.length - 1;
      }
      return newPage;
    });
  };

  return (
    <section className="upper-section">
      <Form />
      <IssueSection
        page={page}
        handlePage={handlePage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </section>
  );
};
export default Home;
