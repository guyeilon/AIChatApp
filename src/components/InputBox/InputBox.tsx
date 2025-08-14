import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  disabled?: boolean;
};

const InputBox: React.FC<Props> = ({ value, onChange, onSend, disabled }) => (
  <Box display="flex" p={1} borderTop="1px solid #ddd">
    <TextField
      fullWidth
      size="small"
      placeholder="כתוב הודעה…"
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onSend();
      }}
    />
    <IconButton
      type="button"
      color="primary"
      onClick={onSend}
      disabled={disabled}
    >
      <SendIcon />
    </IconButton>
  </Box>
);

export default InputBox;
