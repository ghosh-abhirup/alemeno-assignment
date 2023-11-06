import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const CustomMenu = () => {
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <FontAwesomeIcon icon={faBars} size="lg" className="themeText" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="flex flex-col items-start">
            <Menu.Item as="div" className="px-4 py-2">
              <p
                className="font-semibold text-base cursor-pointer"
                onClick={() => navigate("/all_courses")}
              >
                All courses
              </p>
            </Menu.Item>

            <Menu.Item as="div" className="px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="w-4 md:w-8 h-4 md:h-8 bg-gray-500 rounded-full p-4 relative overflow-hidden">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-700 w-full h-[80%] absolute bottom-0 left-1/2 -translate-x-1/2"
                  />
                </div>
                <p className="font-semibold text-base">My profile</p>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CustomMenu;
