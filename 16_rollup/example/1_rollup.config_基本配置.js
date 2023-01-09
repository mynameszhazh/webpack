export default {
  input: "src/index.js",
  output: [
    {
      format: "umd",
      // name: "whyUtils",
      file: "dist/xjh.umd.js",
    },
    {
      format: "cjs",
      file: "dist/xjh.common.js",
    },
  ],
};
