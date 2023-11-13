import React from "react";
import { Box } from "@mui/material";
import Logo from "../../assets/images/logo.png";
import Text from "../text";

const Title = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="20px"
      p={1}
      mb={1}
    >
      <img src={Logo} style={{borderRadius: "50%"}} alt="Logo" width="50" height="50" />
      <Text sx={{ padding: "10px 20px", fontWeight: 600 }}>Queerantatré</Text>
    </Box>
  );
};

export default Title;
