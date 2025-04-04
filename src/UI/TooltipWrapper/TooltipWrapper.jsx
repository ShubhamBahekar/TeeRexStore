import React, { useState, useRef, useEffect } from "react";
import { Box, Tooltip, TextField } from "@mui/material";

const TooltipWrapper = () => {
  const [text, setText] = useState("");
  const divRefs = [useRef(null), useRef(null), useRef(null)];
  const [maxChars, setMaxChars] = useState([20, 30, 40]);

  useEffect(() => {
    const updateMaxChars = () => {
      const newMaxChars = divRefs.map((ref) => {
        if (ref.current) {
          const computedStyle = window.getComputedStyle(ref.current);
          const fontSize = parseFloat(computedStyle.fontSize);
          const width = ref.current.clientWidth;
          return Math.floor(width / (fontSize * 0.6)); // More accurate char width estimation
        }
        return 20; // Default fallback
      });
      setMaxChars(newMaxChars);
    };

    updateMaxChars();
    window.addEventListener("resize", updateMaxChars);
    return () => window.removeEventListener("resize", updateMaxChars);
  }, []);

  function truncateText(text, maxLength) {
    return text.length > maxLength
      ? text.slice(0, maxLength - 3) + "..."
      : text;
  }

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      padding="1rem"
      sx={{ overflow: "visible" }}
    >
      <TextField
        variant="outlined"
        size="small"
        value={text}
        onChange={handleChange}
        placeholder="Type here"
        fullWidth
      />
      <Box display="flex" gap={2} width="100%">
        {["40%", "60%", "80%"].map((width, index) => {
          const isTruncated = text.length > maxChars[index];
          return (
            <Tooltip
              key={index}
              title={isTruncated ? text : ""}
              arrow
              placement="top"
              disablePortal={true}
              PopperProps={{
                modifiers: [
                  { name: "preventOverflow", options: { boundary: "window" } },
                  { name: "flip", options: { fallbackPlacements: ["top"] } },
                ],
              }}
            >
              <Box
                ref={divRefs[index]}
                sx={{
                  display: "inline-block",
                  padding: 2,
                  border: "1px solid black",
                  cursor: "default",
                  whiteSpace: "nowrap",
                  width: width,
                  height: "3rem",
                  overflow: "hidden",
                  textAlign: "left",
                  backgroundColor: "white",
                  fontSize: "1rem", // Ensures consistent scaling
                }}
              >
                {truncateText(text, maxChars[index])}
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
};

export default TooltipWrapper;
