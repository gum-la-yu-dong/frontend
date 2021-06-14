module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    // TODO: css modules classname local identityName 설정
    "@storybook/preset-scss",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
  },
};
