import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
}

const StyledImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageMessage: React.FC<Props> = ({ src, alt }) => (
  <Box my={2}>
    <StyledImage src={src} alt={alt} />
  </Box>
);

export default ImageMessage;
