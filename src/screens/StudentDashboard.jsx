import { faPerson, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/ui/Card";
import { updateRegisteredCourse } from "../store/coursesSlice";

const StudentDashboard = () => {
  const allCourses = useSelector((state) => state.courseSlice.courses);
  const user = useSelector((state) => state.courseSlice.user);

  const dispatch = useDispatch();

  const registeredCourse = allCourses?.filter((course) =>
    user?.coursesRegistered.includes(course.id)
  );

  const completeCourseHandler = (id) => {
    const newRegisteredArr = user.coursesRegistered.filter(
      (regId) => regId != id
    );

    dispatch(updateRegisteredCourse(newRegisteredArr));
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="userDetails max-w-[1400px]">
        <div className="w-20 md:w-40 h-20 md:h-40 bg-gray-500 rounded-full p-4 relative overflow-hidden">
          <FontAwesomeIcon
            icon={faUser}
            className="text-gray-700 w-full h-[80%] absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>

        <div className="mt-6 md:mt-0 ml-0 md:ml-12 w-[90%] md:w-fit flex-1 flex flex-col items-center md:items-start justify-between gap-2">
          <p className="text-xl md:text-2xl font-bold mb-4 md:mb-0">
            {user.firstName + " " + user.lastName}
          </p>

          <div className="flex w-full md:w-fit flex-col md:flex-row items-center gap-2 md:gap-[60px]">
            <div className="flex w-full md:w-fit gap-4 items-center justify-between">
              <p className="text-base md:text-lg font-bold ">Email</p>
              <p className="text-sm md:text-base">{user.email}</p>
            </div>
            <div className="flex w-full md:w-fit gap-4 items-center justify-between">
              <p className="text-base md:text-lg font-bold ">Contact No.</p>
              <p className="text-sm md:text-base">{user.phoneNumber}</p>
            </div>
          </div>

          <div className="flex w-full md:w-fit gap-4 items-center justify-between">
            <p className="text-base md:text-lg font-bold ">School</p>
            <p className="text-sm md:text-base">{user.schoolName}</p>
          </div>

          <div className="flex w-full md:w-fit gap-4 items-center justify-between">
            <p className="text-base md:text-lg font-bold ">Address</p>
            <p className="text-sm md:text-base">
              {user.address.city +
                ", " +
                user.address.state +
                ", " +
                user.address.country}
            </p>
          </div>
        </div>
      </div>
      <div className="registeredCourses w-[90%] max-w-[1400px] my-8">
        <p className="text-lg md:text-2xl font-bold mb-5 themeText">
          Registered courses
        </p>
        {registeredCourse.length !== 0 ? (
          <>
            <div className="gridLayout">
              {registeredCourse?.map((course, index) => (
                <div className="relative w-fit" key={course.id}>
                  <Card data={course} />
                  <div
                    className="cancelBtn"
                    onClick={() => completeCourseHandler(course.id)}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      size="md"
                      className="text-black "
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="italic font-light themeText">No registered courses</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
