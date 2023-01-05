const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");
const schema = require('../schema/loader1-schema.json')

module.exports = function (content) {
  // 获取我传递的参数
  const options = getOptions(this);
  validate(schema, options, { name: "MyPlugin" })
  return content;
};
