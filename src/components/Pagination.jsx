import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <button>«</button>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <button key={num}>{num}</button>
      ))}
      <button>»</button>
    </div>
  );
};

export default Pagination;
