"use client";

import { useRef, useState } from "react";

export default function CursorZoomImage({
  src,
  alt = "",
  zoom = 1.35,
  className = "",
}) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPosition({ x: 50, y: 50 });
      }}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className={`
          h-full
          w-full
          object-contain
          transition-transform
          duration-500
          ease-out
          will-change-transform
          ${className}
        `}
        style={{
          transform: hovered ? `scale(${zoom})` : "scale(1)",
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />

      {/* Premium cursor glow */}
      {hovered && (
        <div
          className="
            pointer-events-none
            absolute
            h-14
            w-14
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/60
            bg-white/10
            shadow-[0_0_30px_rgba(255,255,255,0.25)]
            backdrop-blur-[2px]
          "
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
          }}
        />
      )}
    </div>
  );
}