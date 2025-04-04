import React, { useContext, useState } from "react";
import { productContext } from "../ProductToCartProvider";
function Filters() {
  const { handleFilterChange } = useContext(productContext);

  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    gender: [],
    price: [],
    type: [],
  });

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];

      console.log("updatedCategory==>", updatedCategory);
      handleFilterChange({ ...prev, [category]: updatedCategory });

      return { ...prev, [category]: updatedCategory };
    });
  };

  return (
    <div
      className="container-fuid col-lg-3 col-md-3 col-sm-3 d-none d-sm-block rounded px-0 ms-3 h-50 sticky-top"
      style={{ backgroundColor: "pink" }}
    >
      <p className="h3 fs-1 fs-sm-4 fs-md-3 fs-lg-2 border">Color</p>
      {["Red", "Blue", "Green"].map((colorName, index) => (
        <div className="form-check ms-4" key={index}>
          <input
            type="checkbox"
            className="form-check-input"
            id="check1"
            name="option1"
            value={colorName.toLowerCase()}
            onChange={() =>
              handleCheckboxChange("color", colorName.toLowerCase())
            }
            checked={
              Array.isArray(selectedFilters.color) &&
              selectedFilters.color.includes(colorName.toLowerCase())
            }
          />
          <label
            className="form-check-label fs-6 fs-sm-5 fs-md-4 fs-lg-3"
            htmlFor="check1"
          >
            {colorName}
          </label>
        </div>
      ))}
      <p className="h3 fs-1 fs-sm-4 fs-md-3 fs-lg-2">Gender</p>
      {["Men", "Women"].map((genderType, index) => (
        <div className="form-check ms-4" key={index}>
          <input
            type="checkbox"
            className="form-check-input"
            id="check3"
            name="option3"
            value={genderType.toLowerCase()}
            onChange={() =>
              handleCheckboxChange("gender", genderType.toLowerCase())
            }
            checked={
              Array.isArray(selectedFilters.gender) &&
              selectedFilters.gender.includes(genderType.toLowerCase())
            }
          />
          <label
            className="form-check-label fs-6 fs-sm-5 fs-md-4 fs-lg-3"
            htmlFor="check3"
          >
            {genderType}
          </label>
        </div>
      ))}

      <h3 className="fs-1 fs-sm-4 fs-md-3 fs-lg-2">Price</h3>
      {[
        { label: "0 - Rs 250", value: "0-250" },
        { label: "Rs 251 - Rs 450", value: "251-450" },
        { label: "Above Rs 450", value: "451+" },
      ].map((priceRange, index) => (
        <div className="form-check ms-4" key={index}>
          <input
            type="checkbox"
            className="form-check-input"
            id="check5"
            name="option5"
            value={priceRange.value}
            onChange={() => handleCheckboxChange("price", priceRange.value)}
            checked={
              Array.isArray(selectedFilters.price) &&
              selectedFilters.price.includes(priceRange.value)
            }
          />
          <label
            className="form-check-label fs-6 fs-sm-5 fs-md-4 fs-lg-3"
            htmlFor="check5"
          >
            {priceRange.label}
          </label>
        </div>
      ))}

      <p className="h3 fs-1 fs-sm-4 fs-md-3 fs-lg-2">Type</p>
      {["Polo", "Hoodie", "Basic"].map((clothType, index) => (
        <div className="form-check ms-4" key={index}>
          <input
            type="checkbox"
            className="form-check-input"
            id="check1"
            name="option1"
            value={clothType.toLowerCase()}
            onChange={() =>
              handleCheckboxChange("type", clothType.toLowerCase())
            }
            checked={
              Array.isArray(selectedFilters.type) &&
              selectedFilters.type.includes(clothType.toLowerCase())
            }
          />
          <label
            className="form-check-label fs-6 fs-sm-5 fs-md-4 fs-lg-3"
            htmlFor="check1"
          >
            {clothType}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Filters;
