import React from "react";
import ContactForm from "./ContactForm";
import ContactBtn from "./ContactBtn";

const Home = () => {
  return (
    <div
      id="home-section"
      className="md:flex md:max-w-6xl mx-auto py-10 md:py-20 md:justify-between border-b-[0.1px]"
    >
      <div className="max-w-2xl px-6 my-20 md:my-20 mx-4">
        <div className="text-7xl md:text-8xl text-wrap font-bold">
          Design<span className="text-sky-500">.</span> Develop
          <span className="text-sky-500">.</span> Publish
          <span className="text-sky-500">.</span>
        </div>
        <div className="pt-5 text-xl md:text-2xl">
          {" "}
          <span className="text-sky-500 font-bold">Codeit</span> helps you right
          from Website, Mobile App (both IOS and Android) to complete
          development and publish you website and app to Play Store and App
          Store. Our team help to maintain/present bug free app.
        </div>
        <ContactBtn />
      </div>
      <div className="hidden md:block my-20 mx-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
