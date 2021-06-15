import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Story, Meta } from "@storybook/react";
import yujoImg from "@@/assets/image/dummyProfile.png";
import Header, { HeaderProps } from "./Header";

export default {
  title: "unit/Header",
  component: Header,
  decorators: [
    (S) => (
      <BrowserRouter>
        <S />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story<HeaderProps> = (args: HeaderProps) => (
  <Header {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const User = Template.bind({});
User.args = {
  userImg: yujoImg,
};
