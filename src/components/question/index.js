import { useState } from "react";
import { Box } from "@mui/material";

import { useAppState } from "../../contexts/stateContext";
import Text from "../text";
import Button from "../button";

const Question = () => {
  const { question, changeSection } = useAppState();
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => setShowAnswer(s => !s);
  const goHome = () => changeSection(null);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Text>{question.text}</Text>
      {showAnswer && <Text>In realta... {question.answer}</Text>}
      {!showAnswer && <Button handleClick={toggleAnswer}>Risposta</Button>}
      <Button handleClick={goHome}>Torna alla Home</Button>
    </Box>
  );
};

export default Question;
