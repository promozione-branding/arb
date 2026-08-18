"use client";

import Image from "next/image";
import { CheckCircle2, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  "Focus on Precision & Reliability",
  "IATF 16949:2016 Certified",
  "	Exporting to 50+ Countries Worldwide",
  "	Quality-Driven Manufacturing & Supply",
  "	Solutions for multiple applications"

];

export default function AboutRussia() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;


    if (!video) return;

    video.muted = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Autoplay blocked:", error);
      }
    };

    playVideo();
  }, []);

  const toggleMute = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setMuted(false);

      try {
        await video.play();
      } catch (error) {
        console.log("Unable to play with sound:", error);

        video.muted = true;
        setMuted(true);
      }
    } else {
      video.muted = true;
      setMuted(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white md:py-15 py-10">

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-100 blur-[140px]" />
      </div>

      <div className="relative w-full mx-auto md:px-8 px-4">
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div>
            <div className="relative overflow-hidden rounded-[26px] shadow-2xl group">
              <video
                ref={videoRef}
                className="w-full md:h-full h-[35vh] object-fill"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="https://pub-7d937c7331834e4a9e6d3a588b9bfa59.r2.dev/arb/Corporate%20movie%20-%20English%20(2).mp4"
                  type="video/mp4"
                />
              </video>


              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />

              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="
                  absolute
                  bottom-5
                  right-5
                  z-20
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-black/60
                  text-white
                  backdrop-blur-md
                  border
                  border-white/20
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-black/80
                "
              >
                {muted ? (
                  <VolumeX size={21} />
                ) : (
                  <Volume2 size={21} />
                )}
              </button>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[3px] text-red-700">
              ABOUT ARB BEARING
            </span>

            <h2 className="mt-2 text-4xl font-extrabold leading-tight">
              <span className="text-[#29166F]">
                Trusted Bearings Manufacturer
              </span>

            </h2>

            <p className="mt-2 text-[15px] text-black">
              ARB Bearings is a trusted bearing manufacturer delivering precision-engineered bearings built for performance, durability, and reliability. From industrial to automotive applications, we provide quality bearing solutions you can count on.
            </p>

            <div className="mt-5 grid  space-y-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                    <CheckCircle2 size={18} />
                  </div>

                  <span className="text-gray-700 text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/*
            <button className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-[#1D4ED8] px-2 py-3 font-semibold text-white transition hover:bg-blue-700">

              LEARN MORE ABOUT US

              <ArrowRight
                className="transition group-hover:translate-x-2"
                size={18}
              />

            </button>
            */}


          </div>

          {/* <div className="relative flex flex-col mr-">
            <Image
              src="/map23.png"
              alt="World Map"
              width={520}
              height={320}
              className="w-full h-full"
            />



            <span className="absolute top-[42%] left-[40%] h-4 w-4 rounded-full border-2 border-white bg-red-600 shadow-lg animate-pulse" />

            <span className="absolute top-[36%] left-[66%] h-4 w-4 rounded-full border-2 border-white bg-red-600 shadow-lg animate-pulse" />

            <span className="absolute top-[58%] left-[54%] h-4 w-4 rounded-full border-2 border-white bg-red-600 shadow-lg animate-pulse" />

            <span className="absolute top-[74%] left-[82%] h-4 w-4 rounded-full border-2 border-white bg-red-600 shadow-lg animate-pulse" />


          </div> */}
        </div>
      </div>
    </section>
  );
}