import MyButton from "../button";

const CategoryCard = ({ category, handleClick }) => {
  return (
    <MyButton
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "5px",
      }}
      handleClick={handleClick}
    >
      <div>{category.label}</div>
      <div>({category.questions.length})</div>
    </MyButton>
  );
};

export default CategoryCard;
