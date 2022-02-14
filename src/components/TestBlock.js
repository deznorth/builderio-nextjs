import React from "react";
import { Builder } from "@builder.io/react";

export const TestBlock = (props) => (
  <div>
    <h2 style={{ color: props.color }}>Hello World!</h2>
    <p>The custom text is: {props.text}</p>
  </div>
);

Builder.registerComponent(TestBlock, {
  name: "Test Block",
  inputs: [
    {
      name: "text",
      type: "longText",
      defaultValue: "Hi there!",
    },
    {
      name: "color",
      type: "color",
      defaultValue: "#fafafa",
    },
  ],
});
