import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: "button",
  children: <span>Default Button</span>,
};

export const Chip = Template.bind({});
Chip.args = {
  type: "button",
  children: <span>JavaScript</span>,
  className: "chip",
};
