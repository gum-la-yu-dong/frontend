import React from "react";
import { Story, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from "@@/components/unit/Header/Header";
import Login from "./Login";

export default {
  title: "pages/Login",
  component: Login,
  decorators: [
    (S) => (
      <BrowserRouter>
        <Header />
        <S />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story = () => <Login />;

export const Default = Template.bind({});
