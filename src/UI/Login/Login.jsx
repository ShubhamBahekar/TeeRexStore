import { Lock, Person } from "@mui/icons-material";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
 
const {handleLogin,handleChangeInput,formData}  = useAuth();

 const navigate = useNavigate();

  const handleRegisterClicked = ()=>{
    navigate("/signup")
  }

  const textFieldStyle = {
    width: "100%",
    borderRadius: "1rem",
    "& input": {
      padding: "10px 10px",
    },
    "& input::placeholder": {
      color: "white",
      opacity: 1,
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderRadius: "1rem",
        borderWidth: "2px",
      },
    },
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        backgroundImage: "url(morningImage.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
      component="form"
      onSubmit={handleLogin}
      sx={{ width:{ xs: "100%", sm: "500px",md: "500px" }}}
     
        height="500px"
        padding="2rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bgcolor="transparent"
        style={{
          backdropFilter: "blur(5px) saturate(43%)",
          WebkitBackdropFilter: "blur(16px) saturate(43%)",
          backgroundColor: "rgba(126, 211, 33, 0.15)",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
        // sx={{ backgroundColor: " rgb(205, 153, 116) " }}
      >
        
        <Stack
          spacing={4}
          justifyContent="center"
          alignItems="center"
          width="100%"
          padding={1}
        >
          <Box>
            <Typography variant="h3" color="black">
              Login
            </Typography>
          </Box>
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Person fontSize="small" sx={{ margin: "5px" }} />
            <TextField
              id="outlined-basic"
              color="black"
              placeholder="Enter Username"
              name="username"
              value={formData.username}
              onChange={handleChangeInput}
              type="small"
              variant="outlined"
              sx={{
                ...textFieldStyle,
              }}
            />
          </Stack>

          <Stack
            display="flex"
            direction="row"
            justifyContent="center"
            width="100%"
          >
            <Lock fontSize="small" sx={{ margin: "5px" }} />
            <TextField
              id="outlined-basic"
              color="black"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChangeInput}
              type="small"
              variant="outlined"
              sx={{
                ...textFieldStyle,
              }}
            />
          </Stack>

          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            flexDirection="row"
          >
            <Button
              variant="outlined"
              type="submit"
              sx={{
                color: "white",
                width: "90%",
                marginLeft: "1.3rem",
                border: "2px solid white",
                borderRadius: "1rem",
                fontSize: "1.2rem",
                background:
                  "radial-gradient(circle,rgb(47, 49, 22),rgb(11, 70, 88),rgb(24,45,31))",
              }}
            >
              Login
            </Button>
          </Box>
          <Box display={"flex"} flexDirection={"row"} justifyContent={""} alignItems={"center"}>
            <Typography sx={{ color: "white" }}>
              Don't have an account?{" "}
              {/* <CustomLink to="/signup">Register</CustomLink> */}
            </Typography>
            <Button variant="outlined" sx={{marginLeft:"0.5rem",color:"white",border:"1px solid black", textTransform:"none"}} onClick={()=>handleRegisterClicked()}>Register</Button>
          </Box>
        </Stack>
       
      </Box>
    </Box>
  );
};

export default Login;
