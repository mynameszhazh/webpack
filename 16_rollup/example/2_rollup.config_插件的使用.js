import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

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
  plugins: [commonjs(), resolve()],
  // plugins: [commonjs()],
};
