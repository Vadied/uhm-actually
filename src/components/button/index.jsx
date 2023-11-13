import { Button } from "@mui/material";

const MyButton = ({ sx, handleClick, color = "", children }) => {
  return (
    <Button
      variant="contained"
      className="button"
      onClick={handleClick}
      sx={{
        backgroundColor: color === "secondary" ? "#FFA3A3" : "#D0FFC9",
        color: "#000000",
        fontSize: "1.5rem",
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default MyButton;
