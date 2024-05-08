import { ContactFormPros } from "@/types/interface";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setFormData] = useState<ContactFormPros>({
    name: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    // console.log(name, "==", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // add service to submit form
    // console.log("Submit Form Clicked!");
  };

  return (
    <div className="md:pl-10">
      <div className="my-10 md:text-center text-7xl text-wrap font-bold px-4">
        Let connect<span className="text-sky-500">.</span>
      </div>
      <div className="mt-10 py-6 px-10 border-2 border-sky-200 rounded-2xl bg-gradient-to-br from-sky-300 to-indigo-400">
        <form onSubmit={submitForm}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="my-2 px-4 w-full py-2 rounded-2xl dark:bg-slate-700"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="my-2 px-4 w-full py-2 rounded-2xl dark:bg-slate-700"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(+91)-Phone Number"
            className="my-2 px-4 w-full py-2 rounded-2xl dark:bg-slate-700"
          />
          <select
            className="my-2 px-4 w-full py-2 rounded-2xl dark:bg-slate-700"
            name="budget"
            value={form.budget}
            onChange={handleChange}
          >
            <option value="Select a Budget">Select Budget</option>
            <option value="$10000">$10000+</option>
            <option value="$5000 to $10000">$5000 to $10000</option>
            <option value="$2500 to $5000">$2500 to $5000</option>
            <option value="$1500 to $2500">$1500 to $2500</option>
            <option value="$1000 to $1500">$1000 to $1500</option>
            <option value="$0 to $1000">$0 to $1000</option>
          </select>
          <textarea
            rows={3}
            name="description"
            value={form.description}
            placeholder="description"
            onChange={handleChange}
            className="my-2 px-4 w-full py-2 rounded-2xl dark:bg-slate-700"
          />
          <button
            type="submit"
            className="font-bold text-lg my-2 w-full text-center bg-sky-300 dark:dark:bg-sky-500  rounded-full py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
