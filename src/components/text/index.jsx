import { Box } from "@mui/material";

const Text = ({ sx, children }) => (
  <Box
    sx={{
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "10px 20px",
      fontSize: "1.5rem",
      textAlign: "center",
      ...sx
    }}
  >
    {children}
  </Box>
);
export default Text;
