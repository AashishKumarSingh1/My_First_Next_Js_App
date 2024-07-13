'use client'
import React, { useState, useRef } from "react";
// import emailjs from '@emailjs/browser';
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const fixedEmail = "aashishs.ug23.cs@nitp.ac.in";
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message : Not Send!");
  };
  return (
    <>
      <div
        className="ml-12 mt-9 mt  p-4  border-l-4 border-sky-500 mb-4 "
        data-aos="fade-right"
      >
        <h1>
          <span className="text-white text-3xl font-semibold cursor-pointer hover:text-sky-500">
            Contact
          </span>
        </h1>
      </div>
      <div className="flex justify-center items-center h-auto mt-7 w-full mb-0">
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="bg-green-400 shadow-rose-300 text-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-10/12 bg-gradient-to-br from-slate-800 to-gray-900"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-2/6"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-100 text-sm font-bold mb-2"
              htmlFor="fixedEmail"
            >
              Aashish Kumar Singh&apos;s G-Mail
            </label>
            <input
              type="text"
              id="fixedEmail"
              value={fixedEmail}
              readOnly
              className="shadow appearance-none border rounded py-2 px-3 w-full sm:w-4/6 text-gray-100 leading-tight bg-gray-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-100 text-sm font-bold mb-2"
              htmlFor="email"
            >
              {name ? name : "Your"}&apos;s G-Mail Account
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-5/6"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-100 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
