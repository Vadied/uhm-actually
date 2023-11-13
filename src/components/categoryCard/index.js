import { Box } from "@mui/material";

const CategoryCard = ({ category, handleClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "10px 15px",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: "lightblue",
      }}
      onClick={handleClick}
    >
      <h2>{category.label}</h2>
    </Box>
  );
};

export default CategoryCard;
