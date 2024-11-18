import React from "react";

const Donation = () => {
  return (
    <section className="bg-[url('/img2.jpg')] h-screen w-full bg-cover">
      <div className="z-10 flex flex-col space-y-10 bg-primary bg-opacity-60 h-full items-center justify-center w-full">
        <div className="font-semibold text-center text-5xl text-white">
          “Pray! And listen to God! You can do this alone, but find somebody to
          do it with you”
        </div>
        <div className="text-center italic text-lg text-primary">
          Real Story Cross Journey from Anna Hampton
        </div>
        <button className="border-2 border-secondary text-white hover:bg-secondary hover:border-primary rounded-lg items-center py-2 px-10">
          Donate
        </button>
      </div>
    </section>
  );
};

export default Donation;
