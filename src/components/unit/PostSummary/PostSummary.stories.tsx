import React from "react";
import { Story, Meta } from "@storybook/react";
import yujoImg from "@@/assets/image/dummyProfile.png";

import PostSummary, { PostSummaryProps } from "./PostSummary";

export default {
  title: "unit/PostSummary",
  component: PostSummary,
} as Meta;

const Template: Story<PostSummaryProps> = (args: PostSummaryProps) => (
  <PostSummary {...args} />
);

export const Default = Template.bind({});
Default.args = {
  post: {
    user: {
      id: "asdf134sdkzjqwriyuo",
      name: "gumlayudong",
      profileUrl: yujoImg,
    },

    title: "Typescript와 SCSS",
    url: "https://yujo11.github.io/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BD%94%EC%8A%A4/[%EC%9A%B0%ED%85%8C%EC%BD%94]%EB%A0%88%EB%B2%A82%20React%20Payments%20%ED%9B%84%EA%B8%B0/",
    createdAt: "2021-06-16 Wed 19:51:34",
    summary:
      "find 메서드는 callback 함수가 참을 반환 할 때까지 해당 배열의 각 요소에 대해서 callback 함수를 실행합니다. 만약 어느 요소를 찾았다면 find 메서드는 해당 요소의 값을 즉시 반환하고, 그렇지 않았다면 undefined를 반환합니다. callback은 0 부터 length - 1 까지 배열의 모든 인덱스에 대해 호출되며, 값이 지정되지 않은 요소도 포함하여 모든 인덱스에 대해 호출됩니다. 따라서, 희소 배열 (sparse arrays)의 경우에는 값이 지정된 요소만 탐색하는 다른 메소드에 비해 더 비효율적입니다.",
    tags: ["React", "JavaScript", "WEB"],
  },
};

export const NoTag = Template.bind({});
NoTag.args = {
  post: {
    user: {
      id: "asdf134sdkzjqwriyuo",
      name: "gumlayudong",
      profileUrl: yujoImg,
    },

    title: "검프 라이언 유조 동동",
    url: "https://yujo11.github.io/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BD%94%EC%8A%A4/[%EC%9A%B0%ED%85%8C%EC%BD%94]%EB%A0%88%EB%B2%A82%20React%20Payments%20%ED%9B%84%EA%B8%B0/",
    createdAt: "2020-06-16",
    summary:
      "find 메서드는 callback 함수가 참을 반환 할 때까지 해당 배열의 각 요소에 대해서 callback 함수를 실행합니다. 만약 어느 요소를 찾았다면 find 메서드는 해당 요소의 값을 즉시 반환하고, 그렇지 않았다면 undefined를 반환합니다. callback은 0 부터 length - 1 까지 배열의 모든 인덱스에 대해 호출되며, 값이 지정되지 않은 요소도 포함하여 모든 인덱스에 대해 호출됩니다. 따라서, 희소 배열 (sparse arrays)의 경우에는 값이 지정된 요소만 탐색하는 다른 메소드에 비해 더 비효율적입니다.",
  },
};
