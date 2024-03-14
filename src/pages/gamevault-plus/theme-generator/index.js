import Layout from "@theme/Layout";
import React, { useState } from "react";

export default function ThemeGeneratorContainer() {
  const [primaryColor, setColor] = useState(generateRandomColors());

  // Function to generate a random primary color
  function generateRandomColors() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to handle click event to change color
  function handleClick() {
    setColor(generateRandomColors());
  }

  return (
    <Layout
      title="GameVault+ Theme Generator"
      description="Generate Unique Themes for GameVault+ using this small tool."
    >
      <h1>Coing soon!</h1>
    </Layout>
  );
}
