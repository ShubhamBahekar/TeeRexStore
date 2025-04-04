import {
  getAll,
  create,
  getCartData,
  deleteProduct,
} from "../services/authServices";
import { useNavigate } from "react-router-dom";




// export const getAllProductData = async () => {
//   const response = await getAll();
//    console.log("Response Product Data", response);
//   return response;
// };

// export const getAllCartData = async () => {
//   const response = await getCartData();
//    console.log("Resonse ofCart Data", response);

//   return response;
// };

// export const createNewEntryInCart = async (data) => {
//   const response = await create(data);
//  console.log("createNewEntryInCart", response);
// };

// export const deleteProductInCart = async (id) => {
//   console.log("DeleteProductInCart", id);
//   const response = await deleteProduct(id);
// };


const useProductList = () => {
 
  const navigate = useNavigate();

   const getAllProductData = async () => {
    const response = await getAll();
     console.log("Response Product Data", response);
     if(response.code===401)
     {
        navigate("/login");
     }
    return response;
  };

  const getAllCartData = async () => {
  const response = await getCartData();
   console.log("Resonse ofCart Data", response);
    
  return response;
};
    
      const createNewEntryInCart = async (data) => {
  const response = await create(data);
 console.log("createNewEntryInCart", response);
};
    
     const deleteProductInCart = async (id) => {
   console.log("DeleteProductInCart", id);
   const response = await deleteProduct(id);
};
 
  return {
   getAllProductData,
   getAllCartData,
   createNewEntryInCart,
   deleteProductInCart
  }
}

export default useProductList