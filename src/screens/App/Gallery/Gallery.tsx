import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Grid } from '@mui/material';
import ImageThumbnail from 'components/Gallery/ImageThumbnail';
import { fetchImages } from 'utils/images.utils';

const Gallery = () => {
  const [images, setImages] = React.useState<any[]>([]);
  const [selected, setSelected] = React.useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      const pics = await fetchImages();
      setImages(pics);
    };
    load();
  }, []);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const handleAdd = () => {
    const selectedImages = images.filter((img) => selected.includes(img.id));
    // dispatch(addToMyImages(selectedImages));
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {images.map((img) => (
          <Grid item xs={4} key={img.id}>
            <ImageThumbnail
              src={img.download_url}
              selected={selected.includes(img.id)}
              onClick={() => toggleSelect(img.id)}
            />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={handleAdd}>
        הוסף לתמונות שלי
      </Button>
    </Box>
  );
};

export default Gallery;
