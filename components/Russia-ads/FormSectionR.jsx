"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Phone,
  Mail,
  User,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

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

const bearingTypes = [
  "Радиальные шарикоподшипники",
  "Радиально-упорные шарикоподшипники",
  "Четырёхточечные подшипники",
  "Подшипники ступиц колёс",
  "Упорные шарикоподшипники",
  "Самоустанавливающиеся шарикоподшипники",
];

export default function FormSectionR() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear previous status when user starts editing
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      toast.error("Пожалуйста, введите ваше имя.");

      setStatus({
        type: "error",
        message: "Пожалуйста, введите ваше имя.",
      });

      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Пожалуйста, введите номер телефона.");

      setStatus({
        type: "error",
        message: "Пожалуйста, введите номер телефона.",
      });

      return;
    }

    if (!formData.product) {
      toast.error("Пожалуйста, выберите продукт.");

      setStatus({
        type: "error",
        message: "Пожалуйста, выберите продукт.",
      });

      return;
    }

    if (!formData.message.trim()) {
      toast.error("Пожалуйста, введите ваше сообщение.");

      setStatus({
        type: "error",
        message: "Пожалуйста, введите ваше сообщение.",
      });

      return;
    }

    // Phone validation
    const phoneRegex = /^[+0-9\s()-]{7,20}$/;

    if (!phoneRegex.test(formData.phone.trim())) {
      toast.error("Пожалуйста, введите корректный номер телефона.");

      setStatus({
        type: "error",
        message: "Пожалуйста, введите корректный номер телефона.",
      });

      return;
    }

    setLoading(true);

    // Clear old status before submission
    setStatus({
      type: "",
      message: "",
    });

    try {
      const payload = {
        platform: "ARB Bearings Contact Form",
        platformEmail: "arbbearings.com",

        name: formData.name,
        phone: formData.phone,
        email: formData.email || "N/A",

        // Your current form does not have a company field
        place: "N/A",

        // Product is being sent as subject
        product: formData.product,

        message: `
Product : ${formData.product}

Message :
${formData.message}
        `,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload,
      );

      if (data?.success) {
        const successMessage =
          "Запрос успешно отправлен! Наша команда свяжется с вами в ближайшее время.";

        toast.success("Запрос успешно отправлен!");

        setStatus({
          type: "success",
          message: successMessage,
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          product: "",
          message: "",
        });
      } else {
        const errorMessage =
          "Не удалось отправить запрос. Пожалуйста, попробуйте ещё раз.";

        toast.error("Не удалось отправить запрос.");

        setStatus({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("Enquiry submission error:", error);

      const errorMessage =
        "Произошла ошибка сервера. Пожалуйста, попробуйте ещё раз.";

      toast.error("Ошибка сервера.");

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#f5f8fc]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-red-100/50 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="relative">
            {/* Small Label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-600" />

              <span className="text-xs font-bold uppercase tracking-[3px] text-red-600">
                ARB BEARINGS
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-xl
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-slate-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              Свяжитесь с нами
              <span className="block text-[#29166F]">
                по вопросам подшипников
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-slate-600
                sm:text-base
                sm:leading-7
              "
            >
              Ищете подходящее решение для вашего применения? Расскажите нам о
              ваших требованиях, и наша техническая команда поможет подобрать
              подходящий подшипник и спецификацию.
            </p>

            {/* Bearing Types */}
            <div className="mt-7">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[2px] text-slate-900">
                Наши шарикоподшипники
              </h3>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {bearingTypes.map((type) => (
                  <div
                    key={type}
                    className="
                      flex
                      items-center
                      gap-2.5
                      rounded-xl
                      border
                      border-slate-200
                      bg-white/70
                      px-3
                      py-2.5
                      shadow-sm
                      backdrop-blur
                      transition
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-blue-200
                      hover:bg-white
                    "
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-blue-600"
                    />

                    <span className="text-xs font-medium text-slate-700 sm:text-sm">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Visual */}
            <div
              className="
                relative
                mt-9
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                shadow-[0_25px_70px_rgba(15,23,42,0.10)]
              "
            >
              {/* Decorative Glow */}
              <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

              {/* Outer Ring */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-52
                  w-52
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-blue-100
                  sm:h-64
                  sm:w-64
                "
              />

              {/* Dashed Ring */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-36
                  w-36
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-dashed
                  border-blue-200
                  sm:h-44
                  sm:w-44
                "
              />

              <div className="relative flex min-h-[300px] items-center justify-center px-8 py-8 sm:min-h-[360px]">
                <Image
                  src="/arb-images/Ball-Bearing-Final.webp"
                  alt="Шарикоподшипник ARB Bearings"
                  width={650}
                  height={650}
                  className="
                    relative
                    z-10
                    h-[220px]
                    w-full
                    object-contain
                    transition-transform
                    duration-700
                    hover:scale-105
                    sm:h-[280px]
                  "
                />
              </div>

              {/* Bottom Badge */}
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  rounded-full
                  border
                  border-white/60
                  bg-[#081829]/90
                  px-4
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  sm:bottom-6
                  sm:left-6
                "
              >
                Прецизионная конструкция
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE FORM
          ====================================================== */}
          <div className="relative">
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-5
                shadow-[0_25px_80px_rgba(15,23,42,0.10)]
                sm:p-7
                lg:p-8
              "
            >
              {/* Form Header */}
              <div className="mb-7">
                <span className="text-xs font-bold uppercase tracking-[2px] text-blue-600">
                  Форма запроса
                </span>

                <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Получить предложение
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Оставьте свои требования, и наша команда свяжется с вами.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Имя <span className="text-red-600">*</span>
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Введите ваше имя"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        pl-11
                        pr-4
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Телефон <span className="text-red-600">*</span>
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Введите номер телефона"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        pl-11
                        pr-4
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email{" "}
                    <span className="font-normal text-slate-400">
                      (необязательно)
                    </span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Введите ваш email"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        pl-11
                        pr-4
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />
                  </div>
                </div>

                {/* Product */}
                <div>
                  <label
                    htmlFor="product"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Продукт <span className="text-red-600">*</span>
                  </label>

                  <div className="relative">
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="
                        h-12
                        w-full
                        appearance-none
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        pr-11
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    >
                      <option value="">Выберите продукт</option>

                      {products.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={18}
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Сообщение <span className="text-red-600">*</span>
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="
                        absolute
                        left-4
                        top-4
                        text-slate-400
                      "
                    />

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Расскажите о ваших требованиях..."
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        py-3.5
                        pl-11
                        pr-4
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    relative
                    flex
                    h-13
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-xl
                    bg-gradient-to-r
                    from-[#29166F]
                    via-[#35258B]
                    to-blue-600
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  <span className="relative z-10">
                    {loading ? "Отправка..." : "Отправить запрос"}
                  </span>

                  {!loading && (
                    <ArrowRight
                      size={18}
                      className="
                        relative
                        z-10
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  )}

                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />
                </button>

                {/* Success / Error Confirmation */}
                {status.message && (
                  <div
                    className={`
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      px-4
                      py-3.5
                      text-sm
                      leading-5
                      ${
                        status.type === "success"
                          ? "border-green-200 bg-green-50 text-green-700"
                          : "border-red-200 bg-red-50 text-red-700"
                      }
                    `}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle size={19} className="mt-0.5 shrink-0" />
                    )}

                    <span>{status.message}</span>
                  </div>
                )}

                {/* Required Field Note */}
                <p className="text-center text-[11px] text-slate-400">
                  * Обязательные поля
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
