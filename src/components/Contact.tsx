import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact-section"
      className="md:flex md:gap-10 max-w-6xl mx-auto my-20 "
    >
      {/* Embedded Map */}
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448194.82162352453!2d77.09323125!3d28.6440836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1715161129875!5m2!1sen!2sin"
          // width="500"
          // height="600"
          // allowfullscreen={true}
          className="h-[600px] w-[350px] md:h-[700px] md:w-[600px] mx-auto"
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* contact-form */}
      <div className="mt-4 md:mt-0 px-4 md:px-16 ">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
