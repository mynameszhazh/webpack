import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postCss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: [
    {
      format: "umd",
      name: "whyUtils",
      file: "dist/xjh.umd.js",
      globals: {
        lodash: "_",
      },
    },
  ],
  external: ["lodash"],
  plugins: [commonjs(), resolve(), postCss(), babel(), terser()],
  // plugins: [commonjs()],
};
