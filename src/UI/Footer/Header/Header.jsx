import { React, useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../Home/ProductToCartProvider";

function Header(props) {
  const { goToCart, cartProductList } = useContext(productContext);
  const location = useLocation();
  const isInCart = location.pathname === "/cart";
  return (
    <nav className="navbar navbar-expand-sm  bg-success p-0">
      <div className="container-fluid ">
        {isInCart && (
          <p onClick={() => window.history.back()} className="cursor-pointer">
            <FaArrowLeftLong color="orange" />
          </p>
        )}
        <p className="h1 text-warning">TeeRex Store</p>

        <div className="d-flex justify-content-between">
          <div
            className=" h3 ps-5 collapse navbar-collapse"
            style={{ cursor: "pointer" }}
          >
            <ul className="nav nav-underline">
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="h3 ps-5"
            style={{ cursor: "pointer" }}
            onClick={goToCart}
          >
            <ul className="nav nav-underline">
              <li className="nav-item d-flex align-items-center">
                <div
                  className="nav-link text-warning d-flex flex-column align-items-center"
                  // Trigger the goToCart function on click
                  style={{ cursor: "pointer" }}
                >
                  <span className="badge text-danger fw-bold px-1 py-0 fs-5">
                    {cartProductList?.length}
                  </span>
                  <BsFillCartFill color="orange" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
