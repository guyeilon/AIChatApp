import React from 'react';
import { Typography } from '@mui/material';
import { MessageContent } from '../../types/chat';
import QuizMessage from './QuizMessage';
import ImageMessage from './ImageMassage';
import LinkMessage from './LinkMessage';
import VideoMessage from './VideoMessage';

interface Props {
  item: MessageContent;
  id: string;
}

const MessageRenderer: React.FC<Props> = ({ item, id }) => {
  switch (item.type) {
    case 'text':
      return (
        <Typography key={id} marginY={0.5}>
          {item.value}
        </Typography>
      );
    case 'quiz':
      return (
        <QuizMessage
          key={id}
          id={id}
          question={item.question}
          options={item.options}
        />
      );
    case 'image':
      return <ImageMessage key={id} src={item.src} alt={item.alt} />;
    case 'link':
      return <LinkMessage key={id} href={item.href} title={item.title} />;
    case 'video':
      return <VideoMessage key={id} src={item.src} title={item.title} />;
    default:
      return (
        <Typography key={id} color="error">
          Unsupported message type - try again!
        </Typography>
      );
  }
};

export default MessageRenderer;
