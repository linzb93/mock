const { mock } = require("@linzb93/mock");
const boxen = require("boxen");
function log(object) {
  console.log(
    boxen(JSON.stringify(object), {
      title: "output",
      titleAlignment: "center",
      align: "center",
      borderColor: "cyan",
      dimBorder: true,
      padding: 1,
      margin: 1,
      float: "left",
    })
  );
}
log(
  mock({
    name: "@county",
  })
);
