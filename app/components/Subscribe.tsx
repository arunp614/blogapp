"use client";

import { useState } from "react";

export default function Subscribe() {
    type FormData = {
    name: string;
    email: string;
   };  

    const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData); 
    setSubmitted(true); 
    setFormData({ name: "", email: "" }); 
  };


  return (
    <section id="subscribe" className="max-w-3xl mx-auto text-center bg-blue-100 p-10 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-gray-700 mb-6">
          Subscribe to our newsletter for weekly insights on wellness and productivity.
        </p>
        {submitted ? (
        <p className="text-blue-600 font-semibold text-lg">
          🎉 Thank you for subscribing!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="px-4 py-3 rounded-md w-full md:w-auto"
          />
          <input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="px-4 py-3 rounded-md w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </form>
      )}
      </section>
  )
    
}