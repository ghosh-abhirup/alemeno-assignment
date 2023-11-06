import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/ui/Card";

const AllCoursesScreen = () => {
  const allCourses = useSelector((state) => state.courseSlice.courses);
  const [searchInp, setsearchInp] = useState("");

  const searchedCourses =
    searchInp.trim() === ""
      ? allCourses
      : allCourses?.filter((course) => {
          const combined = course.name + "" + course.instructor;

          return combined.includes(searchInp);
        });

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[90%] max-w-[1400px] my-8">
        <input
          type="text"
          name="search"
          id="search"
          className="mb-4 w-full md:w-[3/5] inputStyles"
          placeholder="Search by name and instructor"
          value={searchInp}
          onChange={(e) => setsearchInp(e.target.value.trim())}
        />

        {searchedCourses ? (
          <>
            <div className="gridLayout">
              {searchedCourses?.map((course, index) => (
                <Card data={course} key={course.id} />
              ))}
            </div>
          </>
        ) : (
          <p className="italics font-light themeText">No courses available</p>
        )}
      </div>
    </div>
  );
};

export default AllCoursesScreen;
