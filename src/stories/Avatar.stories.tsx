// MyComponent.stories.js|jsx

import React from "react";
import { Avatar } from "../components";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Avatar",
  component: Avatar,
  argTypes: {
    imgSrc: { control: "text" },
    round: { control: "number" },
    size: {
      control: "select",
      option: ["xs" , "sm" , "md" , "lg" , "xl"],
    },
  },
};

export const WithAnImage = () => (
  <img src="https://place-hold.it/350x150" alt="My CDN placeholder" />
);
