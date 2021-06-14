import React from "react";
import { Story, Meta } from "@storybook/react";

import Input, { InputProps } from "./Input";

export default {
  title: "shared/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  value: "Typescript 유 조 윤 호",
  onChange: () => {},
};
