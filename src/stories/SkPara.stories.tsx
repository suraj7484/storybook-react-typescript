import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SkPara } from "../components/SkPara/SkPara";

export default {
  title: "SkPara",
  component: SkPara,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof SkPara>;

const Template: ComponentStory<typeof SkPara> = (args) => (
  <SkPara {...args} />
);

export const XS = Template.bind({});
XS.args = {
  size: "xs",
  label: "SkPara",
};

export const SM = Template.bind({});
SM.args = {
  size: "sm",
  label: "SkPara",
};

export const MD = Template.bind({});
MD.args = {
  size: "md",
  label: "SkPara",
};

export const LG = Template.bind({});
LG.args = {
  size: "lg",
  label: "SkPara",
};

export const XL = Template.bind({});
XL.args = {
  size: "xl",
  label: "SkPara",
};
