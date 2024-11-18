import React from "react";
import { Link } from "react-router-dom";

const Card = ({ items }) => {
  const { icon, title, content, label } = items;
  return (
    <Link to={items.route} className="h-[250px] relative w-[250px] p-5 rounded-lg bg-primary">
      <div>{icon}</div>
      <div className="text-xl font-bold text-white capitalize">{title}</div>
      <div className="my-5 text-white text-lg ">{content.slice(0, 40)}</div>
      <button className="px-10 py-2 capitalize items-center text-center absolute bottom-3 text-white border-2 border-secondary hover:bg-secondary rounded-md">
        {label}
      </button>
    </Link>
  );
};

export default Card;
