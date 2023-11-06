import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    user: {
      firstName: "Emily",
      lastName: "Smith",
      dob: "2000-09-23",
      schoolName: "XYZ High School",
      phoneNumber: "987-654-3210",
      email: "emily.smith@example.com",
      photo: "your.photo.link",
      coursesRegistered: [1, 3],
      address: {
        street: "123 Elm Street",
        city: "Springfield",
        state: "IL",
        zipcode: "62701",
        country: "USA",
      },
    },
  },
  reducers: {
    addCourses: (state, action) => {
      state.courses = action.payload;
    },

    updateRegisteredCourse: (state, action) => {
      state.user.coursesRegistered = action.payload;
    },
  },
});

export const { addCourses, updateRegisteredCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
