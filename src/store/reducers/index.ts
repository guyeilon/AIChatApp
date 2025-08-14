import { combineReducers } from '@reduxjs/toolkit';
import counter from './counter.reducer';
import imagesSlice from './images.reducers';

const rootReducer = combineReducers({ counter, imagesSlice });
type RootState = ReturnType<typeof rootReducer>;

export type { RootState };
export default rootReducer;
