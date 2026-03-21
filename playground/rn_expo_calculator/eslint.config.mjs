// eslint.config.mjs
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactNative from "eslint-plugin-react-native";

export default [
  js.configs.recommended,
  {
    ignores: ["node_modules", "dist", "build", ".expo", ".expo-shared"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        __DEV__: "readonly",
        JSX: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-native": reactNative,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-native/no-unused-styles": "warn",
      "react-native/no-inline-styles": "off", // RN에서는 inline style 자주 씀
      "react-native/no-color-literals": "off",
      "react-native/no-raw-text": "off", // <Text> 내부에서 허용
      "react/prop-types": "off", // TS 쓸 거면 끄는 게 일반적
      "prettier/prettier": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  prettier,
];
