import React from "react";

const SyllabusCard = ({ data }) => {
  return (
    <div className="cardContainer">
      <p className="font-light italic text-sm ">Week {data.week}</p>
      <p className="font-bold text-lg line-clamp-2 my-4">{data.topic}</p>
      <p className="line-clamp-2">{data.content}</p>
    </div>
  );
};

export default SyllabusCard;
