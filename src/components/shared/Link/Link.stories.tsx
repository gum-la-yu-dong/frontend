import { Story, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import yujoImg from "../../../assets/image/dummyProfile.png";
// TODO: svgr loader 를 이용한 ReactComponent 로 load하기(storybook webpack 설정 필요함)
import searchSVG from "../../../assets/svg/search.svg";
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

export const ProfileIcon = Template.bind({});
ProfileIcon.args = {
  to: "/",
  children: <img src={yujoImg} alt="yujo-profile" />,
  className: "icon-shadow",
};

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  to: "/",
  children: <img src={searchSVG} alt="search" />,
  className: "icon",
};
