import React from "react";
import Products from "./Products";
import Filters from "./Filters";
function ProductsPage() {
  return (
    <div className="container-fluid row mt-5">
      <Filters />
      <Products />
    </div>
  );
}

export default ProductsPage;
