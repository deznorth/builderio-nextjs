import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Builder } from "@builder.io/react";

export const CodeBlockComponent = (props) => (
  <SyntaxHighlighter language={props.language}>{props.code}</SyntaxHighlighter>
);

Builder.registerComponent(CodeBlockComponent, {
  name: "Code Block",
  inputs: [
    {
      name: "code",
      type: "string",
      defaultValue: "const incr = num => num + 1",
    },
    {
      name: "language",
      type: "string",
      defaultValue: "javascript",
    },
  ],
});
