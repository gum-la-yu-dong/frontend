import { Story, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Link, { LinkProps } from "./Link";

export default {
  title: "shared/Link",
  component: Link,
  decorators: [
    (S) => (
      <BrowserRouter>
        <S />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story<LinkProps> = (args: LinkProps) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: "/",
  children: <h1>it-article-archive</h1>,
};
