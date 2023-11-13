import { Box } from '@mui/material';
import React from 'react';

import Text from '../text';
import Button from '../button';

function QuestionCard({ question, answer, onGoBack }) {
  console.log("question card")
  return (
    <Box>
        <Text>{question}</Text>
        <Text>{answer}</Text>
      <Button handleClick={onGoBack}>Go Back</Button>
    </Box>
  );
}

export default QuestionCard;
