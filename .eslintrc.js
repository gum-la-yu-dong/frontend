module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ["*.js"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "react-hooks", "import", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: "./src/components/shared/**/*.tsx",
      rules: {
        "react/jsx-props-no-spreading": "off",
      },
    },
    {
      files: "./src/components/shared/Button/Button.tsx",
      rules: {
        "react/button-has-type": "off",
      },
    },
    {
      files: "**/*.stories.tsx",
      rules: {
        "import/no-extraneous-dependencies": "off",
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
};
