import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import thumbnail from "../../assets/thumbnail.png";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/course_details/${data.id}`);
  };

  return (
    <div className="cardContainer" onClick={onClickHandler}>
      <div className="flex items-start justify-between gap-4 mb-4 md:mb-6">
        <div className="w-[30%] xs:w-[20%] sm:w-[30%] rounded-lg overflow-hidden">
          <img
            src={thumbnail}
            alt="img"
            className="w-full h-full object-cover bg-center"
          />
        </div>

        <div className="flex-1">
          <p className="w-full text-lg md:text-xl themeText font-bold line-clamp-2">
            {data.name}
          </p>
          <p className="font-semibold text-sm md:text-base mt-2 ">
            <span className="italic font-normal">by </span>
            {data.instructor}
          </p>
        </div>
      </div>

      <p className="line-clamp-2 w-full text-base font-normal mb-4 md:mb-6">
        {data.description}
      </p>

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-normal italic themeText text-base">
            Duration: {data.duration}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon size="lg" icon={faThumbsUp} className="themeText" />
          <p className="font-semibold text-sm md:text-base">{data.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
