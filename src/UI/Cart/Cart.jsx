// import { React, useState, useEffect, useContext } from "react";
// import Header from "../Header/Header";

// import { productContext } from "../Home/ProductToCartProvider";

// import { getAllCartData } from "../../hooks/useProductList";

// function Cart() {
//   const { cartProductList, handleDeleteProductInCart } =
//     useContext(productContext);
//   const [filteredData, setFilteredData] = useState([]);

//   // console.log("=============");
//   useEffect(() => {
//     const fetch = async () => {
//       const cartData = await getAllCartData();
//       // console.log("CartData", cartData);
//       setFilteredData(
//         cartData.map((product) => ({
//           ...product,
//           selectedQuantity: product.count,
//         }))
//       );
//     };
//     fetch();
//   }, [cartProductList]);

//   const handleQuantityChange = (id, value) => {
//     // console.log("Id and Selected Quantity", id, value);
//     setFilteredData((prev) => {
//       return prev.map((product) =>
//         product._id === id
//           ? { ...product, selectedQuantity: Number(value) }
//           : product
//       );
//     });
//   };

//   return (
//     <div className="container-fluid p-0">
//       <Header />

//       <div
//         className="d-flex  flex-column   justify-content-start align-items-center py-5"
//         style={{ height: "100vh" }}
//       >
//         <p className="h1 fw-bold text-warning text-center">Shopping Cart</p>
//         {filteredData.length > 0 ? (
//           filteredData.map((product, index) => (
//             <div
//               className="d-flex align-items-center justify-content-between text-white border border-danger bg-info gap-4 rounded p-0 m-0 w-100"
//               key={index}
//             >
//               <img
//                 src={`http://localhost:2121/uploads/${product.image}`}
//                 alt="productImage"
//                 style={{ width: "60px", height: "40px", objectFit: "cover" }}
//                 className="rounded"
//               />
//               <div className="d-flex flex-column">
//                 <p className="m-0">{product.name}</p>
//                 <p className="m-0">Rs {product.price}</p>
//               </div>
//               <div>
//                 <select
//                   className="form-select form-select-sm bg-warning"
//                   onChange={(e) =>
//                     handleQuantityChange(product._id, e.target.value)
//                   }
//                   style={{ width: "100px" }}
//                 >
//                   <option value={product.count}>{product.count}</option>
//                   {Array.from(
//                     { length: product.quantity },
//                     (_, i) => i + 1
//                   ).map((num) => (
//                     <option key={num} value={num}>
//                       {num}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <button
//                 className="rounded bg-danger"
//                 onClick={() => handleDeleteProductInCart(product._id)}
//                 style={{ width: "80px" }}
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         ) : (
//           <div>
//             <h1 className="text-danger">Product Cart is Empty !</h1>
//           </div>
//         )}
//         <div
//           className="d-flex flex-column  justify-content-around  border border-secondary  bg-white rounded w-75"
//           style={{ gap: "1rem", marginTop: "2rem" }}
//         >
//           {filteredData.length > 0 ? (
//             <div className="d-flex justify-content-around align-items-center">
//               <div className="d-flex justify-content-around align-items-center ">
//                 <p className="fs-sm-5 fs-4  w-50">Total Amount :</p>

//                 <p className="fs-4 ">
//                   Rs{" "}
//                   {filteredData.reduce(
//                     (total, item) => total + item.price * item.selectedQuantity,
//                     0
//                   )}
//                 </p>
//               </div>

//               <button
//                 className="btn btn-success rounded py-0 px-1"
//                 style={{ maxHeight: "50px", maxWidth: "100px" }}
//               >
//                 Proceed To Checkout
//               </button>
//             </div>
//           ) : (
//             <div></div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import { Box, Card, CardMedia, Grid2, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { productContext } from "../Home/ProductToCartProvider";
import { getAllCartData } from "../../hooks/useProductList";
import Header from "../Header/Header";

const Cart = () => {
  const {
    products,
    cartProductList,
    incrementItemsInCart,
    decrementItemsInCart,
    handleDeleteProductInCart,
  } = useContext(productContext);

  // useEffect(() => {
  //   const fetch = () => {
  //     console.log("cartLength", cartProductList.length);
  //   };

  //   fetch();
  // }, [cartProductList]);

  const calculateTotalPrice = (cartList) => {
    return (
      cartList.reduce((total, item) => total + item.price * item.count, 0) -
      113 +
      15
    );
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(cartBackground.jpg)",
        width: "100vw",
        height: { xs: "auto", sm: "100vh", md: "100vh", lg: "100vh" },
        position: "absolute",
      }}
    >
      <Header />
      <Typography
        variant="h3"
        textAlign="start"
        margin={5}
        color="lightsalmon"
        fontWeight={700}
      >
        Your Cart
      </Typography>
      <Grid2 container spacing={1} marginX={{ xs: 1, md: 3 }}>
        <Grid2
          item
          size={{ xs: 12, sm: 8, md: 8 }}
          display={"flex"}
          flexDirection={"column"}
          height={"auto"}
          borderRadius={"1rem"}
          gap={{ xs: 1, sm: 2, md: 3 }}
        >
          {cartProductList.map((product) => (
            <Box
              display={"flex"}
              flexDirection={"row"}
              borderRadius={"1rem"}
              border={"2px solid white"}
              sx={{
                background:
                  "radial-gradient(circle,rgb(216, 141, 141),rgb(185, 133, 178),rgb(156, 202, 222))",
              }}
            >
              <Grid2 item size={{ sm: 9, md: 9 }}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      alt="cart_Product"
                      height="50px"
                      src={`http://localhost:2121/uploads/${product.image}`}
                    />
                  </Card>

                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    padding={2}
                  >
                    <Typography variant="h5">{product.name}</Typography>
                    <Box display="flex">
                      <Typography variant="p" fontWeight="700">
                        category:
                      </Typography>
                      <Typography variant="p">
                        {product.category || "No Category Available"}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="p" fontWeight="700">
                        color:
                      </Typography>
                      <Typography variant="p">{product.color}</Typography>
                    </Box>

                    <Typography variant="h5" fontWeight="800">
                      ${product.price}
                    </Typography>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 item size={{ sm: 3, md: 3 }} height={"100%"} width={"60%"}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                  height={"100%"}
                  padding={2}
                >
                  <DeleteIcon
                    sx={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDeleteProductInCart(product._id)}
                  />

                  <ButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                    sx={{
                      marginRight: "1.5rem",
                      "& .MuiButton-root": {
                        paddingX: "2px",
                        paddingY: "5px",
                        fontSize: "10px",
                        width: "auto",
                        border: "3px solid pink",
                      },
                    }}
                  >
                    <Button
                      size="small"
                      sx={{ padding: "2px" }}
                      onClick={() => decrementItemsInCart(product)}
                    >
                      -
                    </Button>
                    {/* <Typography variant="p" paddingX={3}>
                    2
                  </Typography> */}

                    <Button size="small" sx={{ padding: "2px" }}>
                      {product.count}
                    </Button>

                    <Button
                      size="small"
                      sx={{ padding: "2px" }}
                      onClick={() => incrementItemsInCart(product)}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </Box>
              </Grid2>
            </Box>
          ))}
        </Grid2>

        <Grid2
          item
          size={{ xs: 12, sm: 4, md: 4 }}
          borderRadius={"1rem"}
          paddingX={{ xs: "0rem", md: "1rem" }}
          height={"100%"}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "2px solid white",
              background:
                "linear-gradient(to right,rgb(206, 155, 195),rgb(210, 223, 188),rgb(184, 179, 219))",
              borderRadius: "1rem",
            }}
          >
            <Typography
              variant="h5"
              padding={"0.5rem"}
              fontWeight={"700"}
              color="green"
            >
              Order Summary
            </Typography>
            <Box padding={"0.5rem"}>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                paddingY={"0.5rem"}
              >
                <Typography>Subtotal</Typography>

                <Typography>
                  {cartProductList.reduce(
                    (total, item) => total + item.price * item.count,
                    0
                  )}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                paddingY={"0.5rem"}
              >
                <Typography>Discount(-20%)</Typography>
                <Typography>-$113</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                paddingY={"0.5rem"}
              >
                <Typography>Delivery Fee</Typography>
                <Typography>$15</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="h6" fontWeight={600}>
                  Total
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  {calculateTotalPrice(cartProductList)}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"1rem"}
              >
                <Button
                  variant="outlined"
                  color="white"
                  sx={{
                    backgroundColor: "green",
                    marginY: "0.5rem",
                    border: "2px solid white",
                  }}
                >
                  <Typography color="white">Go to Checkout</Typography>
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Cart;
