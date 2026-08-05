"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ContactForm() {
  const [IATFpen, setIATFpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIATFpen(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!IATFpen) return null;

  const handleClose = () => setIATFpen(false);

  // SUBMIT FORM
  const submitForm = async () => {
    try {
      setLoading(true);

      const formData = {
        platform: "arb website popup Form",
        platformEmail: "arb@gmail.com",
        name,
        phone,
        email,
        product,
        message,
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data?.success) {
        setStatus("✅ Your enquiry has been submitted successfully!");

        toast.success("Form Submitted Successfully");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}
Message: ${message}
Contact: ${phone}`;

        setTimeout(() => {
          window.open(
            `https://wa.me/919856785?text=${encodeURIComponent(
              whatsappText,
            )}`,
            "_blank",
          );
        }, 1000);

        // RESET FORM
        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");

        setTimeout(() => setIATFpen(false), 3000);
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.log(error);

      setStatus("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.length !== 10) {
      return toast.error("Enter Valid Phone Number");
    }

    await submitForm();
  };
  return (
    <div className="fixed z-[99999] inset-0 flex items-center justify-center bg-black/40">
      <div
        className="relative rounded-3xl shadow-2xl p-10 max-w-sm md:max-w-2xl text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/img2.jpg)" }}
      >
        {/* Close button */}
        <button
          className="absolute cursor-pointer top-4 right-4 text-white hover:text-red-500 text-xl"
          onClick={handleClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-center text-red-600 text-xl md:text-3xl font-semibold tracking-wide">
          Get In Touch With Us
        </h2>

        <div className="w-28 h-[4px] bg-white mx-auto mt-3 mb-8 rounded-full"></div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-3 max-md:flex-col">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-1/2 max-md:w-full p-3 rounded-md text-black text-sm border border-black border-2 bg-blue-50 focus:outline-none"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />

            <select
              name="products"
              required
              disabled={loading}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-1/2 max-md:w-full p-3 rounded-md text-black text-sm border-2 focus:outline-none bg-blue-50"
            >
              <option value="">Select Product</option>
              <option value="GI Sheet">Ball Bearing</option>
              <option value="Mild Steel Pipe">Wheel Bearing</option>
              <option value="MS Plates">Roller Bearing</option>
            </select>
          </div>

          {/* PHONE */}
          <div className="flex items-center bg-white rounded-md border border-black border-2 overflow-hidden">
            <span className="px-3 text-lg text-black">🇮🇳</span>

            <input
              type="tel"
              name="phone"
              maxLength={10}
              placeholder="81234 56789"
              className="w-full bg-blue-50 p-3 text-black text-sm focus:outline-none border-0"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-md text-black text-sm border-black border-2 focus:outline-none bg-blue-50"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <textarea
            name="message"
            placeholder="Message"
            className="w-full bg-blue-50 p-3 rounded-md text-black text-sm border-black border-2 focus:outline-none h-28 resize-none"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] hover:opacity-90 transition rounded-md font-semibold text-white text-sm shadow-md"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Send Enquiry"}
          </button>

          {status && (
            <p
              className={`text-center text-sm mt-2 font-medium ${
                status.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
