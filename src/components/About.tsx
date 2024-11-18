// import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <img
          src="/img.jpeg"
          className="w-[50%] h-[400px] rounded-lg overflow-hidden object-contain aspect-square"
        />
        <div className="w-[50%] flex flex-col mt-28">
          <div className="my-5 uppercase border-b-2 font-bold text-xl self-center">
            About Us
          </div>
          <div className="text-2xl font-bold">Title</div>
          <div className="text-lg text-[#545454]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus
            lorem, condimentum volutpat odio eget, iaculis rutrum lorem. Cras
            auctor lacus vitae vulputate gravida. Aliquam in ornare orci, quis
            mattis orci. Curabitur in arcu quis nunc congue facilisis. Aliquam
            pretium porta neque, vel gravida ipsum vestibulum quis. Integer
            elementum congue metus, at mattis urna elementum vel. Ut ornare quam
            sit amet lorem euismod, eget mollis erat ultrices. Phasellus sit
            amet lectus semper, accumsan velit in, rutrum odio. Nunc blandit
            gravida tortor, in auctor dolor aliquam non. Curabitur cursus,
            mauris eget vehicula auctor, nibh ipsum aliquam lacus, vitae laoreet
            tortor dui nec mi. Donec sed sapien et sem eleifend fermentum.
            Praesent consectetur, lorem et vulputate ullamcorper, libero quam
            posuere turpis, sit amet aliquet urna augue id ipsum.
          </div>
          <div>img flow</div>
        </div>
      </div>
    </div>
  );
};

export default About;
