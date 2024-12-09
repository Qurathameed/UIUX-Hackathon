"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  }); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_id",
        "template_id",
        formData,
        "user_id"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send the message. Please try again.");
        }
      );

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8  bg-white">
      <h1 className="font-bold text-[#2A254B] mb-10 font-serif text-center text-2xl">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="space-y-10 border border-gray-500 p-5 ">
          <div className="flex items-center space-x-4">
            <div className="text-red-500 text-2xl">📞</div>
            <div>
              <h2 className="text-lg text-black font-bold">Call To Us</h2>
              <p className="text-black">Wavailable 24h.</p>
              <p className="text-black">Phone: +9881234</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-red-500 text-2xl">📧</div>
            <div>
              <h2 className="text-lg text-black font-bold">Write To Us</h2>
              <p className="text-black">Emails:</p>
              <p className="text-black">cus@Avion.com</p>
              <p className="text-black">supp@Avion.com</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-6 border border-gray-400 p-5" onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;