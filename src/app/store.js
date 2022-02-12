import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({

  duration: true,
  timestamp: true
});

export default configureStore({
  reducer: {
    user: userReducer,

  },
  middleware: {
    loggerMiddleware,
  }
});