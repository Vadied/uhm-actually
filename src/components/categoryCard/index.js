import MyButton from "../button";

const CategoryCard = ({ category, handleClick }) => {
  return (
    <MyButton
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "5px",
      }}
      handleClick={handleClick}
    >
      {category.label}
    </MyButton>
  );
};

export default CategoryCard;
