import React from 'react';
import { Card, CardMedia } from '@mui/material';

const ImageThumbnail = ({
  src,
  selected,
  onClick,
}: {
  src: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <Card
    onClick={onClick}
    sx={{
      border: selected ? '2px solid blue' : '1px solid gray',
      cursor: 'pointer',
    }}
  >
    <CardMedia component="img" image={src} height="140" />
  </Card>
);

export default ImageThumbnail;
