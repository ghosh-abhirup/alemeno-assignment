import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import StudentDashboard from "./screens/StudentDashboard";
import AllCoursesScreen from "./screens/AllCoursesScreen";
import CourseDetailsScreen from "./screens/CourseDetailsScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/all_courses" element={<AllCoursesScreen />} />
          <Route path="/course_details/:id" element={<CourseDetailsScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
