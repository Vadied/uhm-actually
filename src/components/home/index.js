import React from "react";
import { Box } from "@mui/material";

import CategoryCard from "../categoryCard";
import { useAppState } from "../../contexts/stateContext";

const Home = () => {
  const { categories, changeSection } = useAppState();
  console.log(categories)

  const handleCategoryClick = (category) => () => {
    changeSection(category);
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gridGap: "10px",
      }}
    >
      {categories.map((cat) => (
        <CategoryCard
          key={cat.code}
          category={cat}
          handleClick={handleCategoryClick(cat.code)}
        />
      ))}
    </Box>
  );
};

export default Home;
