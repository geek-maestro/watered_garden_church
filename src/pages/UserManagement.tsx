import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const UserManagement = () => {
  const cards = [
    {
      title: "user analytics",
      content: "A visual representation of user sign-ups over time.",
      label: "view",
      route: "/user_analytics",
    },
    {
      title: "church mambers",
      content: "A visual representation of user sign-ups over time.",
      label: "view",
      route: "/users",
    },
    {
      title: "pastors",
      content: "A visual representation of user sign-ups over time.",
      label: "view",
      route: "/users",
    },
  ];
  return (
    <>
    <Navbar />
    <div className="p-10">
       <div className='text-secondary font-bold text-4xl my-10'>User Management</div>
      <div className="flex flex-wrap gap-5">
        {cards.map((card) => (
          <Card items={card} />
        ))}
      </div>
    </div>
    </>
  );
};

export default UserManagement;
