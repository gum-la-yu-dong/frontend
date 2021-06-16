import React from "react";
import { Story, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import ArticleCard, { ArticleCardProps } from "./ArticleCard";

export default {
  title: "unit/ArticleCard",
  component: ArticleCard,
  decorators: [
    (S) => (
      <BrowserRouter>
        <S />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story<ArticleCardProps> = (args: ArticleCardProps) => (
  <ArticleCard {...args} />
);

const yujoBlog =
  "https://yujo11.github.io/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BD%94%EC%8A%A4/[%EC%9A%B0%ED%85%8C%EC%BD%94]%EB%A0%88%EB%B2%A82%20React%20Payments%20%ED%9B%84%EA%B8%B0/";
const danBlog =
  "https://overreacted.io/preparing-for-tech-talk-part-1-motivation/";

export const Default = Template.bind({});
Default.args = {
  href: yujoBlog,
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  href: danBlog,
};
