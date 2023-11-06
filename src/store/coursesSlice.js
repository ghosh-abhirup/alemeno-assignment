import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
  },
  reducers: {
    addCourses: (state, action) => {
      state.courses = action.payload;
      console.log("hey loading again");
    },
  },
});

export const { addCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
