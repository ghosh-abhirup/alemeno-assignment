import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import bgImg from "../assets/bgImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import SyllabusCard from "../components/ui/SyllabusCard";

const CourseDetailsScreen = () => {
  const { id } = useParams();
  const allCourses = useSelector((state) => state.courseSlice.courses);

  const selectedCourse = allCourses?.find((course) => course.id == id);

  return (
    <>
      {selectedCourse && (
        <div className="w-full h-full flex flex-col items-center themeText">
          <div className="w-[90%] h-full max-w-[1400px]">
            <div className="w-full h-40 sm:h-80 mt-3 md:mt-5 rounded-lg overflow-hidden">
              <img
                src={bgImg}
                alt="bg"
                className="w-full h-full object-cover bg-center"
              />
            </div>

            <div className="mt-4 md:mt-8 w-full flex items-start justify-between">
              <div className="w-[70%]">
                <p className="text-xl md:text-3xl font-bold themeText">
                  {selectedCourse.name}
                </p>
                <p className="mt-2 font-semibold text-base md:text-lg">
                  <span className="italic text-base font-light mr-2">by </span>
                  {selectedCourse.instructor}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  size="lg"
                  icon={faThumbsUp}
                  className="themeText"
                />
                <p className="font-semibold text-sm md:text-base">
                  {selectedCourse.likes}
                </p>
              </div>
            </div>

            <p className="w-full mt-4 font-normal text-base md:text-lg themeText">
              {selectedCourse.description}
            </p>

            <div className="flex items-center gap-4  mt-4">
              <p className="font-bold text-lg">Duration:</p>
              <p className="font-medium text-base">{selectedCourse.duration}</p>
            </div>
            <div className="flex items-center gap-4  mt-4">
              <p className="font-bold text-lg">Schedule:</p>
              <p className="font-medium text-base">{selectedCourse.schedule}</p>
            </div>
            <div className="flex items-center gap-4  mt-4">
              <p className="font-bold text-lg">Mode:</p>
              <p className="font-medium text-base">{selectedCourse.location}</p>
            </div>

            <div className="w-full mt-6">
              <p className="font-bold text-xl md:text-2xl">PREREQUISITES</p>
              <div className="w-3/5 h-[2px] bg-[#232323] dark:bg-white rounded-md"></div>

              <div className="mt-4 gridLayout">
                {selectedCourse?.prerequisites &&
                  selectedCourse?.prerequisites.map((course, index) => (
                    <div className="cardContainer" key={index}>
                      <p className="font-bold text-lg line-clamp-2 my-4">
                        {course}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="w-full mt-6">
              <p className="font-bold text-xl md:text-2xl">SYLLABUS</p>
              <div className="w-3/5 h-[2px] bg-[#232323] dark:bg-white rounded-md"></div>

              <div className="mt-4 mb-8 gridLayout">
                {selectedCourse?.syllabus &&
                  selectedCourse?.syllabus.map((topic, index) => (
                    <SyllabusCard data={topic} key={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetailsScreen;
