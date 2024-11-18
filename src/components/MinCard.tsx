import React, { useState } from "react";
type CardProps = {
  image: string;
  title: string;
  content: string;
};
type Items ={
    item:CardProps
}
const MinCard = ({ item }: Items) => {
    const { image, title, content }: CardProps = item;
    const [readmore, setReadmore] = useState(false);
    const handleReadMore = () => {
        setReadmore(!readmore)
    }
  return (
    <div className="rounded-lg shadow-sm shadow-primary border-b-4 border-b-secondary w-[250px] overflow-hidden" style={{ height: readmore ? '100%' : 400}}>
      <div>
        <img src={image} className="w-full h-[50%] hover:scale-125" />
      </div>
      <div className="px-10 my-10">
        <div className="font-bold text-xl">{title}</div>
        <div className="text-primary">{ readmore ? content : content.length > 100 ? content.slice(0, 100) + "..." : content}</div>
        <div className="underline text-secondary cursor-pointer" onClick={handleReadMore}>{readmore ? "Read Less" : "Read More"}</div>
      </div>
    </div>
  );
};

export default MinCard;
