import Text from "../text";
import { Box } from "@mui/material";

const Loader = () => (
  <Box
    sx={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>Caricamento domanda</Text>
  </Box>
);

export default Loader;
