import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from '@mui/material';

interface Props {
  id: string;
  question: string;
  options: string[];
}

const QuizMessage: React.FC<Props> = ({ id, question, options }) => (
  <Paper
    elevation={2}
    sx={{
      padding: 2,
      backgroundColor: '#f5f5f5',
      borderRadius: 2,
      maxWidth: '100%',
    }}
  >
    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
      {question}
    </Typography>

    <List dense disablePadding>
      {options.map((opt) => (
        <ListItem key={`${id}-opt-${opt}`} disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <Typography variant="body2">{opt}</Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default QuizMessage;
