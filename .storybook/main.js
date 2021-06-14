module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    "@storybook/preset-scss",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
  },
};
