// import { React, useContext } from "react";
// import { BsFillCartFill } from "react-icons/bs";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link, useLocation } from "react-router-dom";
// import { productContext } from "../Home/ProductToCartProvider";

// function Header() {
//   const { goToCart, cartProductList } = useContext(productContext);
//   const location = useLocation();
//   const isInCart = location.pathname === "/cart";
//   return (
//     <nav className="navbar navbar-expand-sm  bg-success p-0">
//       <div className="container-fluid ">
//         {isInCart && (
//           <p onClick={() => window.history.back()} className="cursor-pointer">
//             <FaArrowLeftLong color="orange" />
//           </p>
//         )}
//         <p className="h1 text-warning">TeeRex Store</p>

//         <div className="d-flex justify-content-between">
//           <div
//             className=" h3 ps-5 collapse navbar-collapse"
//             style={{ cursor: "pointer" }}
//           >
//             <ul className="nav nav-underline">
//               <li className="nav-item">
//                 <Link className="nav-link text-warning" to="/">
//                   Products
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div
//             className="h3 ps-5"
//             style={{ cursor: "pointer" }}
//             onClick={goToCart}
//           >
//             <ul className="nav nav-underline">
//               <li className="nav-item d-flex align-items-center">
//                 <div
//                   className="nav-link text-warning d-flex flex-column align-items-center"
//                   // Trigger the goToCart function on click
//                   style={{ cursor: "pointer" }}
//                 >
//                   <span className="badge text-danger fw-bold px-1 py-0 fs-5">
//                     {cartProductList?.length}
//                   </span>
//                   <BsFillCartFill color="orange" />
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;


import * as React from 'react';
import { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import Badge from '@mui/material/Badge';
import { productContext } from "../Home/ProductToCartProvider";
import { useNavigate,useLocation } from 'react-router-dom';


export default function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
const { goToCart, cartProductList } = useContext(productContext);

const navigate = useNavigate();
const location = useLocation();

const productState =location.pathname !== "/cart";

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAuth(false); // Set auth to false (hide AccountCircle)
    handleClose(); // Close the menu
    console.log("User logged out"); // Replace with actual logout logic
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static" sx={{ backgroundColor: "lightgreen",}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            TeerexStore
          </Typography>
          <Box>
          
            <IconButton
              size="large"
              edge="start"
              color="warning"
              aria-label="menu"
              sx={{ mr: 2, p: "0px",}}
              onClick={() =>navigate(productState ? "/cart" : "/")
            }
            >
              {productState ? <Badge badgeContent={cartProductList?.length} color="success"> <ShoppingCartIcon onClick={()=>navigate("/cart")}/> </Badge>: <HomeIcon onClick={()=>navigate("/")}/>}

            </IconButton>
          </Box>
          
          
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "lightblue",
                    marginTop:"3%" // Change background color
                  },
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
