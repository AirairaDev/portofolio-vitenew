import * as React from "react";
import BeamBorder from "./BeamBorder";

export function InteractiveProductCard({
  imageUrl,
  alt = "Hero Image",
  className = "",
}) {
  const cardRef = React.useRef(null);
  const [style, setStyle] = React.useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / (height / 2)) * -8;
    const rotateY = ((x - width / 2) / (width / 2)) * 8;

    setStyle({
      transform: `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.05, 1.05, 1.05)
      `,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `,
      transition: "transform 0.4s ease-in-out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={className}
    >
      <BeamBorder
        size="md"
        colorVariant="colorful"
        theme="dark"
        duration={2}
        beamWidth={1}
        strength={1}
      >
        <img
          src={imageUrl}
          alt={alt}
          className="block w-full h-auto rounded-3xl drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        />
      </BeamBorder>
    </div>
  );
}