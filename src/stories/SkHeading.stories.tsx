import { ComponentStory, ComponentMeta } from "@storybook/react";

import {SkHeading} from "../components/SkHeading/SkHeading"
 
export default {
  title: "SkHeading",
  component: SkHeading,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof SkHeading>;

const Template: ComponentStory<typeof SkHeading> = (args) => <SkHeading {...args} />;

export const XS = Template.bind({});
XS.args = {
  size: "xs",
  label: "SkHeading",
};

export const SM = Template.bind({});
SM.args = {
  size: "sm",
  label: "SkHeading",
};

export const MD = Template.bind({});
MD.args = {
  size: "md",
  label: "SkHeading",
};

export const LG = Template.bind({});
LG.args = {
  size: "lg",
  label: "SkHeading",
};

export const XL = Template.bind({});
XL.args = {
  size: "xl",
  label: "SkHeading",
};
