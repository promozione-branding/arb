
"use client";

import { useEffect, useState } from "react";

export default function TranslatorA() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Already loaded
    if (window.google?.translate) {
      setLoaded(true);
      return;
    }

    // Google Translate initialization
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return;

      new window.google.translate.TranslateElement(
        {
          // Your website's original language is Spanish
          pageLanguage: "es",

          // Only allow translation to English
          includedLanguages: "en",

          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element"
      );

      setLoaded(true);
    };

    // Prevent adding the script multiple times
    const existingScript = document.querySelector(
      'script[src*="translate_a/element.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");

      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

      script.async = true;

      document.body.appendChild(script);
    }

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  const translateToEnglish = () => {
    const select = document.querySelector(".goog-te-combo");

    if (!select) {
      console.log("Google Translate is not ready");
      return;
    }

    select.value = "en";

    select.dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );
  };

  return (
    <>
      {/* Google Translate container */}
      <div
        id="google_translate_element"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      {/* English translation button */}
      <button
        type="button"
        onClick={translateToEnglish}
        disabled={!loaded}
        className="
          rounded-full
          bg-black
          px-5
          py-2.5
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-gray-800
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        English
      </button>
    </>
  );
}

