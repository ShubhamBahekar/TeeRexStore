import { Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/AlertContext";
import { createUser, loginUser } from "../services/authServices";


const useAuth = () => {
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const FORM_SCHEMA = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(FORM_SCHEMA);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    if (name === "username" && /^\d+$/.test(value)) {
      showAlert.error("Username cannot start with number");
      return;
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Signup hook func==>");
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      showAlert.warning("All fields required");
      return;
    }


    if (formData?.username.length < 5 || formData?.password?.length < 5) {
      showAlert.warning(
        "Username or Passowrd atleast contain 5 alpha-numeric characters"
      );
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData?.email)) {
      showAlert.warning("Invalid email format");
      return;
    }

   
    if (formData.password !== formData.confirmPassword) {
      showAlert.error("Password mismatched");
      return;
    }

    if(formData.username === formData.password)
      {
        showAlert.warning("Username && Password can not be same");
        return;
      }

try{
  const response = await createUser(formData);
  console.log("response",response);
const {status,message} = response;
  if(status==="success")
  {
    showAlert.success(message);
  }else{
    showAlert.error(message);
  }
}catch(e)
{
  console.error("Eror while signup",e);
}
    
   
  };




  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      showAlert.warning("All fields required");
      return;
    }


    if (formData?.username?.length < 5 || formData?.password?.length < 5) {
      showAlert.warning(
        "Username && Passowrd  contains atleast 5 alpha-numeric characters"
      );
      return;
    }

    try{
      const response = await loginUser(formData);

      console.log("Login response",response);
      const {status,message} = response;
      if(status==="success")
      {
        navigate("/");
      }else
      {
        showAlert.error(message);
      }
   
    }catch(e)
    {
      console.error("Error while login",e);
    }
   
  };

  return {
    formData,
    handleSignUp,
    handleChangeInput,
    handleLogin,
  };
};

export default useAuth;
