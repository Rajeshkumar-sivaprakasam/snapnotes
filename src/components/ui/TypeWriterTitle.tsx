"use client";
import React from "react";
import TypeWriter from "typewriter-effect";
type Props = {};

const TypeWriterTitle = (props: Props) => {
  return (
    <TypeWriter
      options={{
        loop: true,
      }}
      onInit={(typeWriter) => {
        typeWriter
          .typeString("🚀 Supercharged Productivity.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("🤖 AI Powered Insights.")
          .start();
      }}
    />
  );
};

export default TypeWriterTitle;
