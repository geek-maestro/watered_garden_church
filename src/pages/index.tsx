// import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  const cards = [
    {
      title: "member management",
      content: "Register, update, and view members' details.",
      label: "view",
      route: "/user_management",
      icon: "",
    },
    {
      title: "event management",
      content: " Schedule, update, and manage church events with RSVP options.",
      label: "view",
      icon: "",
      route: "",
    },
    {
      title: "financial management",
      content: "Record, track, and generate reports on donations.",
      label: "view",
      route: "/finance",
      icon: "",
    },
    {
      title: "communication management",
      content:
        "Send announcements and messages to specific groups or the entire congregation.",
      label: "view",
      icon: "",
      route: "",
    },
    {
      title: "Prayer Requests management",
      content: "Review and manage prayer requests submitted by members.",
      label: "view",
      icon: "",
      route: "",
    },
    {
      title: "Inventory management",
      content: "Manage all church inventory and assets.",
      label: "view",
      route: "/inventory",
      icon: "",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="flex flex-wrap gap-5">
          {cards.map((card) => (
            <Card items={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
