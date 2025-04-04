import { Routes, Route } from "react-router-dom";
import Cart from "./UI/Cart/Cart";
import Home from "./UI/Home/Home";
import SignUp from "./UI/SignUP/SignUp";
import Login from "./UI/Login/Login";
import ProductToCartProvider from "./UI/Home/ProductToCartProvider";
import TooltipWrapper from "./UI/TooltipWrapper/TooltipWrapper";

const App = () => {
  return (
    <ProductToCartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tooltip" element={<TooltipWrapper />}/>
      </Routes>
    </ProductToCartProvider>
  );
};

export default App;
