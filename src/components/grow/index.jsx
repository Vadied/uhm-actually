import { Box, Grow } from "@mui/material";

const GrowComponent = ({ condition, children }) => {
  return (
    <Grow in={condition} sx={{}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          justifyContent: "space-evenly",
          width: "100%",
        }}
        className="grow"
      >
        {condition && children}
      </Box>
    </Grow>
  );
};

export default GrowComponent;
