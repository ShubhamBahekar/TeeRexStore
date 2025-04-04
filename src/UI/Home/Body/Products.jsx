import { React, useContext } from "react";
import { productContext } from "../ProductToCartProvider";

function Products(props) {
  const { filteredProducts, handleTotalItemsCount } =
    useContext(productContext);
  console.log("FilteredData in ProductPage", filteredProducts);
  return (
    <div className="col-lg-8 col-md-8  col-sm-8 col-12  d-flex justify-content-center align-items-center flex-wrap ms-lg-4 ms-3" >
      {filteredProducts.map((product, index) => (
        <div
          className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4  d-flex justify-content-center"
          key={index}
        >
          <div
            className="card   h-sm-100 h-md-100 h-lg-100 border border-3 border-success ms-0 me-0"
            style={{ cursor: "pointer" }}
          >
            <img
              className="card-img-top"
              style={{ height: "250px", maxWidth: "240px", objectFit: "cover" }}
              src={`http://localhost:2121/uploads/${product.image}`}
              alt="Card_image"
            />
            <div className="card-img-overlay text-danger fw-bold p-0">
              {product.name}
            </div>
            <div className="card-body px-1 bg-secondary">
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-text h4 mb-0 text-wrap text-truncate fs-6 fs-sm-5 fs-md-6 fs-lg-6">
                  Rs {product.price}
                </p>
                <button
                  className="btn btn-dark text-white px-2 py-1 d-flex justify-content-center align-items-center fs-6 px-sm-1 py-sm-0 fs-sm-5 
            px-md-1 py-md-0 fs-md-4 
            px-lg-1 py-lg-0 fs-lg-6 text-center"
                  style={{ position: "relative", zIndex: 2 }}
                  onClick={() => handleTotalItemsCount(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
