import React from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import {  useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"

function SignUp() {
  
  const {handleSignUp,formData,handleChangeInput} = useAuth();
  
  
  
  
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleLoginClicked = ()=>{
    navigate("/login")
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };



  const textFieldStyle = {
    width: "100%",
    borderRadius: "1rem",
    "& input": {
      padding: "10px 10px",
    },
    "& input::placeholder": {
      color: "white",
      opacity: 1, // To ensure the color is applied
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
      sx={{
        backgroundColor: "#f5f5f5",
        backgroundImage: "url(morningImage.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
      component="form"
      onSubmit={handleSignUp}
     
        height="600px"
       
        borderRadius="1rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
           padding:{xs:"0px",md:"0.5rem",md:"2rem"},
         width:{ xs: "100%", sm: "600px",md: "600px" },
          backgroundColor: "transparent",
        }}
      >
        
        <Stack
          spacing={4}
          width="100%"
          justifyContent="center"
          alignItems="center"
         
          backgroundColor="rgba(126, 211, 33, 0.15)"
          borderRadius="1rem"
          border="1px solid rgba(255, 255, 255, 0.125)"
          sx={{
             padding:{xs:"0.5rem",sm:"0.5rem",md:"2rem"},
            backdropFilter: "blur(5px) saturate(43%)",
            WebkitBackdropFilter: "blur(16px) saturate(43%)",
          }}
        >
          <Box>
            <Typography variant="h3" color="black">
              Create Account
            </Typography>
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ width: "100%" }}
          >
            <PersonIcon fontSize="small" />
            <TextField
              id="outlined-basic"
              color="white"
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
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ width: "100%" }}
          >
            <EmailIcon fontSize="small" />
            <TextField
              id="outlined-basic"
              color="black"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChangeInput}
              type="email"
              variant="outlined"
              sx={{
                ...textFieldStyle,
              }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ width: "100%" }}
          >
            <LockIcon fontSize="small" />
            <TextField
              id="outlined-basic"
              color="black"
              placeholder="Create Password"
              name="password"
              value={formData.password}
              onChange={handleChangeInput}
              onPaste={(e)=>e.preventDefault()}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                ...textFieldStyle,
              }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ width: "100%" }}
          >
            <LockIcon fontSize="small" />
            <TextField
              id="outlined-basic"
              color="black"
              placeholder="Retype Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChangeInput}
              onPaste={(e)=>e.preventDefault()}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                ...textFieldStyle,
              }}
            />
          </Stack>

          <Box width="100%">
            <Button
            type="submit"
              variant="contained"
              size="medium"
              sx={{
                width: "92%",
                fontSize: "1.5rem",
                marginLeft: "1.7rem",
                borderRadius: "1rem",
                background:
                  "radial-gradient(circle,rgb(47, 49, 22),rgb(11, 70, 88),rgb(24,45,31))",
              }}

            >
              Sign Up
            </Button>
          </Box>
          <Box display={"flex"} flexDirection={"row"} justifyContent={""} alignItems={"center"}>
            <Typography color="white">
              Already have an account?{" "}
              {/* <CustomLink to="/login"> Login here.</CustomLink> */}
              <Button variant="outlined" sx={{marginLeft:"0.5rem",color:"white",border:"1px solid black " , textTransform: "none"}} onClick={()=>handleLoginClicked()}>Login here.</Button>
            </Typography>
          </Box>
        </Stack>
      
      </Box>
    </Box>
  );
}

export default SignUp;
