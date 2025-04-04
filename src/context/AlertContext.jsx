import React, { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

// Create context
const AlertContext = createContext();

// Custom hook to use the alert
export const useAlert = () => {
  return useContext(AlertContext);
};

// Alert Provider Component
export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "info",
    position: { vertical: "top", horizontal: "center" },
  });

  // Function to show alerts
  const showAlert = (
    message,
    severity = "info",
    position = { vertical: "top", horizontal: "center" }
  ) => {
    setAlert({ open: true, message, severity, position });
  };

  // Close alert
  const handleClose = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  return (
    <AlertContext.Provider
      value={{
        showAlert: {
          info: (msg, position) => showAlert(msg, "info", position),
          success: (msg, position) => showAlert(msg, "success", position),
          warning: (msg, position) => showAlert(msg, "warning", position),
          error: (msg, position) => showAlert(msg, "error", position),
        },
      }}
    >
      {children}
      <Snackbar
        open={alert.open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={alert.position}
        sx={{
          width:{xs:"90%",sm:"90%",md:"40rem"},
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={alert.severity}
          variant="filled"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize:"1.2rem",
            borderRadius:"1rem"
          }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};
