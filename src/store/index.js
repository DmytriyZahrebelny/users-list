import { configureStore } from '@reduxjs/toolkit';
import { userDataReducer } from './user-data';

export default configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
