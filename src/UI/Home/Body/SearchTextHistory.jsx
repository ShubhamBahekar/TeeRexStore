import React, { useContext } from "react";
import { productContext } from "../ProductToCartProvider";

function SearchTextHistory(props) {
  const { searchText, searchTextHistory, handleHistoryItemClicked } =
    useContext(productContext);

  return (
    <div className="d-flex  align-items-center justify-content-center">
      {typeof searchText === "string" && searchText.trim() !== "" && (
        <ul
          className="list-group list-group-item-warning list-unstyled me-lg-5 me-md-5 me-5"
          style={{
            maxWidth: "35rem",
            width: "100%",
          }}
        >
          {searchTextHistory.map((item) => (
            <li className="list-group-item" onClick={handleHistoryItemClicked}>
              <h6>{item}</h6>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchTextHistory;
