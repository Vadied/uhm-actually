import { Box } from "@mui/material";
import { useAppState } from "../../contexts/stateContext";
import GrowComponent from "../grow";
import Loader from "../loader";
import Home from "../home";
import Question from "../question";
import useWindowSize from "../../hooks/useWindowSize";

import Title from "../title";

const Page = () => {
  const { section, loading } = useAppState();
  const { width } = useWindowSize();
  return (
    <Box
      className="page"
      sx={{
        backgroundImage: "url('/dice.png')",
        backgroundSize: "contain",
        height: "100%",
        display: "flex",
        gap: "3rem",
        flexDirection: "column",
        alignItems: "center",
        padding: "5rem 2rem",
        boxSizing: "border-box",
        fontSize: width > 540 ? "16px" : "8px",
      }}
    >
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Title />
        <GrowComponent condition={loading}>
          <Loader />
        </GrowComponent>
        <GrowComponent condition={section === "home"}>
          <Home />
        </GrowComponent>
        <GrowComponent condition={section === "question"}>
          <Question />
        </GrowComponent>
      </Box>
    </Box>
  );
};

export default Page;
