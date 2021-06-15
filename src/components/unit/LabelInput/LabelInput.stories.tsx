import React from "react";
import { Story, Meta } from "@storybook/react";

import LabelInput, { LabelInputProps } from "./LabelInput";

export default {
  title: "unit/LabelInput",
  component: LabelInput,
} as Meta;

const Template: Story<LabelInputProps> = (args: LabelInputProps) => (
  <LabelInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "닉네임",
  type: "text",
  value: "Typescript 유 조 윤 호",
  onChange: () => {},
};
