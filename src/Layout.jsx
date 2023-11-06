import React, { useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCourses } from "./store/coursesSlice";

const Layout = () => {
  const dispatch = useDispatch();

  const fetchAllCourses = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_MOCKAPI_URL}/getAllCourses`
      );

      console.log(data);
      dispatch(addCourses(data));
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-dark-grey transition-colors ease-in-out">
      <Header />
      <div className="w-full h-full pt-[60px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
