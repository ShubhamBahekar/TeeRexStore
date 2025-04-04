import React, { useContext } from "react";
import { productContext } from "../ProductToCartProvider";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

function SearchBar() {
  const { handleSearchSubmit, handleSearchChange, searchText } =
    useContext(productContext);

  return (
    <div className="container-fluid  d-flex justify-content-center align-items-center mt-4">
      <div className="d-flex justify-content-center  gap-2 w-100">
        <form
          onSubmit={handleSearchSubmit}
          className="d-flex justify-content-center gap-2 w-100"
        >
          <input
            type="text"
            className="form-control flex-grow-1"
            style={{ minWidth: "180px", maxWidth: "35rem" }}
            placeholder="Search any product"
            onChange={handleSearchChange}
            value={searchText}
          />
          <button
            className="btn btn-success d-none d-sm-block"
            style={{ width: "45px", height: "35px", padding_left: "2px" }}
            type="submit"
            onSubmit={handleSearchSubmit}
          >
            <IoSearchOutline size={25} />
          </button>
          <div className="d-flex d-sm-none gap-2">
            <button
              className="btn btn-success"
              style={{ width: "45px", height: "35px", padding_left: "2px" }}
              type="submit"
              onSubmit={handleSearchSubmit}
            >
              <IoSearchOutline size={25} />
            </button>
            <button
              className="btn btn-success"
              style={{ width: "45px", height: "35px", padding_left: "2px" }}
              type="submit"
            >
              <FaFilter size={25} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
