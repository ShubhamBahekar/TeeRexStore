import Header from "../Header/Header";
import SearchBar from "./Body/SearchBar";
import SearchTextHistory from "./Body/SearchTextHistory";
import ProductsPage from "./Body/ProductsPage";

export const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <SearchTextHistory />
      <ProductsPage />
    </>
  );
};

export default Home;
