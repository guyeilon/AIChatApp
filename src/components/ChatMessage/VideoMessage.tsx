import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

interface Props {
  src: string;
  title: string;
}

const getEmbedUrl = (url: string): string => {
  try {
    const ytMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/,
    );
    if (ytMatch?.[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}`;
    }
    return url; // fallback for other sources
  } catch {
    return url;
  }
};

const VideoWrapper = styled(Box)`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  margin: 12px 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoMessage: React.FC<Props> = ({ src, title }) => {
  const embedUrl = getEmbedUrl(src);

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        {title}
      </Typography>
      <VideoWrapper>
        <iframe src={embedUrl} title={title} allowFullScreen />
      </VideoWrapper>
    </Box>
  );
};

export default VideoMessage;
