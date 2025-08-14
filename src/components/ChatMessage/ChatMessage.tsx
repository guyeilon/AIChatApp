import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Message, MessageContent } from '../../types/chat';
import MessageRenderer from './MassageRender';

interface Props {
  message: Message;
}

const ChatMessage: React.FC<Props> = ({ message }) => {
  const isUser = message.role === 'user';

  const wrapperStyles = {
    display: 'flex',
    justifyContent: isUser ? 'flex-end' : 'flex-start',
    marginY: 1,
  };

  const bubbleStyles = {
    maxWidth: '80%',
    padding: '8px 12px',
    borderRadius: 12,
    backgroundColor: isUser ? '#e0f7fa' : '#f1f1f1',
    alignSelf: isUser ? 'flex-end' : 'flex-start',
    whiteSpace: 'pre-wrap' as const,
  };

  if (typeof message.content === 'string') {
    return (
      <Box sx={wrapperStyles}>
        <Paper elevation={1} sx={bubbleStyles}>
          <Typography>{message.content}</Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={wrapperStyles}>
      <Paper elevation={1} sx={bubbleStyles}>
        {message.content.map((item, index) => {
          const key =
            typeof item === 'string'
              ? `${message.id}-text-${item}`
              : `${message.id}-${item.type}-${JSON.stringify(item)}`;

          if (typeof item === 'string') {
            return (
              <Typography key={key} marginY={0.5}>
                {item}
              </Typography>
            );
          }

          return <MessageRenderer key={key} item={item} id={key} />;
        })}
      </Paper>
    </Box>
  );
};

export default ChatMessage;
