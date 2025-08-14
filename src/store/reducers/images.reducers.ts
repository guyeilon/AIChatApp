// src/store/reducers/myImages.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Image {
  id: string;
  download_url: string;
}

type MyImagesState = Image[];

const initialState: MyImagesState = [];

const imagesSlice = createSlice({
  name: 'myImages',
  initialState,
  reducers: {
    addToMyImages: (state, action: PayloadAction<Image[]>) => {
      action.payload.forEach((img) => {
        if (!state.find((i) => i.id === img.id)) {
          state.push(img);
        }
      });
    },
    removeFromMyImages: (state, action: PayloadAction<string>) =>
      state.filter((img) => img.id !== action.payload),

    clearMyImages: () => [],
  },
});

export const { addToMyImages, removeFromMyImages, clearMyImages } =
  imagesSlice.actions;

export default imagesSlice.reducer;
