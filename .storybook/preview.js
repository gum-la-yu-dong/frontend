// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphonexr",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
