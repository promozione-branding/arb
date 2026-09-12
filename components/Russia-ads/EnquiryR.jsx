"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const products = [
  "Радиальный шарикоподшипник",
  "Радиально-упорный шарикоподшипник",
  "Четырёхточечный шарикоподшипник",
  "Подшипник ступицы колеса",
  "Упорный шарикоподшипник",
  "Самоустанавливающийся шарикоподшипник",
  "Цилиндрический роликоподшипник",
  "Конический роликоподшипник",
  "Сферический роликоподшипник",
  "Игольчатый роликоподшипник",
  "Другое",
];

export default function EnquiryR({ IATFpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!IATFpen) return null;

  const handleClose = () => {
    onClose();
  };

  // Submit form
  const submitForm = async (values) => {
    try {
      setLoading(true);

      const { data } = await axios.post("https://brandbnalo.com/api/form/add", {
        platform: "arb website enquiry Form",

        platformEmail: "export@arb-bearings.com",

        name: values.name,

        phone: values.phone,

        email: values.email || "N/A",

        place: "N/A",

        product: values.product,

        message: values.message,
      });

      if (data?.success) {
        setSubmitted(true);

        setSuccessMessage("✅ Ваш запрос успешно отправлен!");

        toast.success("Форма успешно отправлена");

        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 4000);
      } else {
        setSuccessMessage(
          "❌ Не удалось отправить запрос. Пожалуйста, попробуйте ещё раз.",
        );
      }
    } catch (error) {
      console.log(error);

      setSuccessMessage("❌ Ошибка сервера. Пожалуйста, попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const values = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      product: form.products.value,
      message: form.message.value,
    };

    if (!values.phone || values.phone.length < 10) {
      return toast.error("Введите корректный номер телефона");
    }

    await submitForm(values);
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/50 p-4">
      <div
        className="
          relative
          z-[1000]
          w-full
          max-w-[570px]
          rounded-3xl
          border-2
          border-white
          bg-cover
          bg-center
          p-6
          text-white
          shadow-2xl
          md:p-10
        "
        style={{
          backgroundImage:
            "url(/there-are-two-gears-that-are-water-with-some-liquid_1034997-124995.avif)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 rounded-3xl bg-black/70" />

        {/* Content */}
        <div className="relative z-[10001]">
          {/* Close Button */}
          <button
            type="button"
            className="
              absolute
              right-0
              top-0
              cursor-pointer
              text-2xl
              text-white
              transition
              hover:text-red-500
            "
            onClick={handleClose}
          >
            ✕
          </button>

          {/* Heading */}
          <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">
            Свяжитесь с нами
          </h2>

          <div className="mx-auto mb-8 mt-3 h-[4px] w-28 rounded-full bg-blue-600" />

          {!submitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name + Product */}
              <div className="flex flex-col gap-3 md:flex-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  required
                  disabled={loading}
                  className="
                    w-full
                    rounded-md
                    border-2
                    border-white
                    bg-transparent
                    p-3
                    text-white
                    placeholder-white
                    focus:outline-none
                    md:w-1/2
                  "
                />

                <select
                  name="products"
                  required
                  disabled={loading}
                  defaultValue=""
                  className="
                    w-full
                    rounded-md
                    border-2
                    border-white
                    bg-blue-50
                    p-3
                    text-sm
                    text-black
                    focus:outline-none
                    md:w-1/2
                  "
                >
                  <option value="">Выберите продукт</option>

                  {products.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone */}
              <div className="flex items-center overflow-hidden rounded-md border-2 border-white">
                <span className="ml-3">🇷🇺</span>

                <input
                  type="tel"
                  name="phone"
                  maxLength={10}
                  minLength={10}
                  required
                  disabled={loading}
                  placeholder="Номер телефона"
                  className="
                    w-full
                    bg-transparent
                    p-3
                    text-white
                    placeholder-white
                    focus:outline-none
                  "
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                disabled={loading}
                placeholder="Электронная почта"
                className="
                  w-full
                  rounded-md
                  border-2
                  border-white
                  bg-transparent
                  p-3
                  text-white
                  placeholder-white
                  focus:outline-none
                "
              />

              {/* Message */}
              <textarea
                name="message"
                required
                disabled={loading}
                placeholder="Ваше сообщение"
                className="
                  h-28
                  w-full
                  resize-none
                  rounded-md
                  border-2
                  border-white
                  bg-transparent
                  p-3
                  text-white
                  placeholder-white
                  focus:outline-none
                "
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-md
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-600
                  py-3
                  font-semibold
                  text-white
                  shadow-md
                  transition
                  hover:opacity-90
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading ? "Отправка..." : "Отправить сообщение"}
              </button>
            </form>
          ) : (
            <p className="text-center text-lg font-semibold text-white">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
