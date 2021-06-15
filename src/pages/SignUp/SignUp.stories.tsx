import React from "react";
import { Story, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from "@@/components/unit/Header/Header";
import SignUp from "./SignUp";

export default {
  title: "pages/SignUp",
  component: SignUp,
  decorators: [
    (S) => (
      <BrowserRouter>
        <Header />
        <S />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story = () => <SignUp />;

export const Default = Template.bind({});
