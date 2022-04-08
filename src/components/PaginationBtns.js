import { useSelector } from "react-redux";


const PaginationBtns = ({prevPage,handlePage,nextPage,page}) => {
   

    const newIssues = useSelector((state) => state.issues.newIssues);

    return <div className="pagination-btns">
    <button type="button" className="prev-btn" onClick={prevPage}>
      Prev
    </button>
    {newIssues &&
      newIssues.map((_, i) => {
        return (
          <button
            type="button"
            onClick={() => handlePage(i)}
            className={`${i === page ? "active pag-btn" : "pag-btn"}`}
            key={i}
          >
            {i + 1}
          </button>
        );
      })}
    <button type="button" className="next-btn" onClick={nextPage}>
      Next
    </button>
  </div>
}

export default PaginationBtns;