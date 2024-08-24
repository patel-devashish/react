import React, { useRef, useState, useEffect } from "react";

const CustomColorPicker = () => {
  const canvasRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default color is black

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Create a gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.16, "orange");
    gradient.addColorStop(0.33, "yellow");
    gradient.addColorStop(0.5, "green");
    gradient.addColorStop(0.66, "blue");
    gradient.addColorStop(0.83, "indigo");
    gradient.addColorStop(1, "violet");

    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add a white to black gradient on top
    const whiteGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    whiteGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    whiteGradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    whiteGradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
    whiteGradient.addColorStop(1, "rgba(0, 0, 0, 1)");

    ctx.fillStyle = whiteGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const imageData = ctx.getImageData(x, y, 1, 1).data;
    const color = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
    setSelectedColor(color);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        onClick={handleCanvasClick}
        style={{ cursor: "crosshair", border: "1px solid #000" }}
      ></canvas>
      <p>Selected Color: {selectedColor}</p>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: selectedColor,
          border: "1px solid #000",
          marginTop: "10px",
        }}
      ></div>
    </div>
  );
};

export default CustomColorPicker;
