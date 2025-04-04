import { React, useState, useEffect, createContext } from "react";
import productData from "../productsData.json";
import { useNavigate } from "react-router-dom";
import useProductList from "../../hooks/useProductList";

export const productContext = createContext();

export const ProductToCartProvider = ({ children }) => {
  const [searchText, setSearchText] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTextHistory, setSearchTextHistory] = useState([]);
  const [cartProductList, setCartProductList] = useState([]);
  const [products, setProducts] = useState([]);
  const [countItemsInCart, setCountItemsInCart] = useState(1)
  const navigate = useNavigate();
  const {getAllProductData,
    getAllCartData,
    createNewEntryInCart,
    deleteProductInCart} = useProductList();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getAllProductData();
        setProducts(data);
        setFilteredProducts(data);
      } catch (e) {
        console.error("Error in fetching data", e);
      }
    };        
    fetchProductData();
    // userData();
    const Data = localStorage.getItem("userSearchText");
    const searchHistoryData = JSON.parse(Data);

    searchHistoryData && setSearchTextHistory(searchHistoryData);
  }, []);

  useEffect(() => {
    try{
      const fetchCartData = async () => {
        const cartData = await getAllCartData();
        setCartProductList(cartData);
        // console.log("data", data);
        console.log("cartProductList===>", cartProductList);
      };
      fetchCartData();
    }catch(err)
    {
       console.error(err);
    }

    
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const text = searchText;
    handleSearchTextHistory(text);
  };
  const handleSearchChange = (e) => {
    // console.log(e.target.value);
    setSearchText(e.target.value);
    filterProducts(e.target.value);
  };

  const handleSearchTextHistory = (text) => {
    setSearchTextHistory((prev) => {
      const updatedHistory = [text, ...prev.slice(0, 3)];
      // console.log("Updated History", updatedHistory);
      localStorage.setItem("userSearchText", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  const handleHistoryItemClicked = (e) => {
    const text = e.target.textContent.trim();
    const filteredItems = products.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filteredItems);
  };

  const filterProducts = (searchText) => {
    const filteredData = products.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    // console.log(filteredData);
    setFilteredProducts(filteredData);
  };

  const handleFilterChange = (selectedValues) => {
    // console.log("slectedValues arguments data", selectedValues);
    let updatedProduts = products.filter(
      (item) =>
        (selectedValues.color.length === 0 ||
          selectedValues.color.includes(item.color.toLowerCase())) &&
        (selectedValues.gender.length === 0 ||
          selectedValues.gender.includes(item.gender.toLowerCase())) &&
        (selectedValues.price.length === 0 ||
          selectedValues.price.some((range) => {
            if (range === "0-250") return item.price <= 250;
            if (range === "251-450")
              return item.price > 250 && item.price <= 450;
            if (range === "451+") return item.price > 450;
            return false;
          })) &&
        (selectedValues.type.length === 0 ||
          selectedValues.type.includes(item.type.toLowerCase().trim()))
    );

    setFilteredProducts(updatedProduts);
  };

  const handleTotalItemsCount = async (product) => {
    console.log("Product clicked", product);

    setCartProductList((prevCart) => {
      if (!prevCart) return prevCart;

      const index = prevCart.findIndex((item) => item._id === product._id);

      if (index === -1) {
        // Add unique product with a count of 1
        const { name, price, image, quantity, _id } = product;
        const newCount = 1;
        const productData = {
          name,
          price,
          image,
          quantity,
          count: newCount,
          key: _id,
        };

        createNewEntryInCart(productData);
        return [...prevCart, { ...product, count: newCount }];
      } else {
        // No change if the product already exists

        const updatedCart = [...prevCart];
        console.log("UpdatedCart==>", updatedCart);
        const existingProduct = updatedCart[index];
        console.log("ExistingProduct", existingProduct);
        const newCount = existingProduct.count + 1;
        const updatedProduct = { ...existingProduct, count: newCount };

        // Update the product data in the backend
        const productData = { count: newCount, key: existingProduct._id };
        createNewEntryInCart(productData);

        updatedCart[index] = updatedProduct;
        return updatedCart;
      }
    });
  };

  const handleDeleteProductInCart = async (id) => {
    try {
      await deleteProductInCart(id);
      const data = await getAllCartData();
      setCartProductList(data);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const goToCart = () => {
    // console.log("safkabvaksv");
    navigate("/cart");
  };

   const incrementItemsInCart = async(product)=>{
    

    console.log("Product clicked", product);

    setCartProductList((prevCart) => {
      if (!prevCart) return prevCart;

      const index = prevCart.findIndex((item) => item._id === product._id);

        const updatedCart = [...prevCart];
        console.log("UpdatedCart==>", updatedCart);
        const existingProduct = updatedCart[index];
        console.log("ExistingProduct", existingProduct);
        const newCount = existingProduct.count + 1;
        const updatedProduct = { ...existingProduct, count: newCount };

        // Update the product data in the backend
        const productData = { count: newCount, key: existingProduct._id };
        createNewEntryInCart(productData);

        updatedCart[index] = updatedProduct;
        return updatedCart;
      
    });
        
        

   }

   const decrementItemsInCart =(product)=>{
    
    console.log("Product clicked", product);

    setCartProductList((prevCart) => {
      if (!prevCart) return prevCart;

      const index = prevCart.findIndex((item) => item._id === product._id);

        const updatedCart = [...prevCart];
        console.log("UpdatedCart==>", updatedCart);
        const existingProduct = updatedCart[index];
        console.log("ExistingProduct", existingProduct);
        const newCount = existingProduct.count - 1;
        const updatedProduct = { ...existingProduct, count: newCount };

        // Update the product data in the backend
        const productData = { count: newCount, key: existingProduct._id };
        createNewEntryInCart(productData);

        updatedCart[index] = updatedProduct;
        return updatedCart;
      
    });

   }


  return (
    <productContext.Provider
      value={{
        products,
        cartProductList,
        goToCart,
        handleSearchSubmit,
        handleSearchChange,
        handleFilterChange,
        searchText,
        searchTextHistory,
        handleHistoryItemClicked,
        productData,
        filteredProducts,
        handleTotalItemsCount,
        handleDeleteProductInCart,
        incrementItemsInCart,
        decrementItemsInCart,
        countItemsInCart
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductToCartProvider;
