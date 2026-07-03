import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "outputs/**",
      "work/**",
      "tsconfig.tsbuildinfo",
      "you-have-been-given-two-authoritative/**"
    ]
  },
  ...nextVitals,
  ...nextTypescript
];

export default eslintConfig;
