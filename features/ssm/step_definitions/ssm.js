const { Before } = require("cucumber");

Before({ tags: "@ssm" }, function (scenario, callback) {
  const { SSM } = require("../../../clients/client-ssm");
  this.service = new SSM({});
  callback();
});
