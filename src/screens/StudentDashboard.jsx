import { faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/ui/Card";

const user = {
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
};

const StudentDashboard = () => {
  const allCourses = useSelector((state) => state.courseSlice.courses);

  const registeredCourse = allCourses.filter((course) =>
    user.coursesRegistered.includes(course.id)
  );

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
                <Card data={course} key={course.id} />
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
