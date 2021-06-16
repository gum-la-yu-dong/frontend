import { Story, Meta } from "@storybook/react";
import yujoImg from "@@/assets/image/dummyProfile.png";
import searchImg from "@@/assets/image/search.png";
import Icon, { IconProps } from "./Icon";

export default {
  title: "shared/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args: IconProps) => <Icon {...args} />;

export const Profile = Template.bind({});
Profile.args = {
  src: yujoImg,
  alt: "유저 프로필",
  shadow: true,
};

export const Search = Template.bind({});
Search.args = {
  src: searchImg,
  alt: "검색 아이콘",
};
