import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./coursesSlice";

export default configureStore({
  reducer: {
    courseSlice: courseSlice,
  },
});
