const chokidar = require("chokidar");
const net = require("net");
const dayjs = require("dayjs");
const { debounce } = require("lodash");
const chalk = require("chalk");
const { fork } = require("child_process");
const watcher = chokidar.watch("../core/**/*.js", {
  ignored: "node_modules/*",
});

const server = net.createServer(() => {});
server.listen(8124, () => {
  console.log("开始监听");
});

let subProcess = fork("index.js");
watcher.on(
  "change",
  debounce((file) => {
    console.log(
      chalk.yellow(`${file} 发生变化`),
      chalk.gray(dayjs().format("YYYY-MM-DD HH:mm:ss"))
    );
    subProcess.removeAllListeners();
    subProcess.kill();
    fork("index.js");
  }, 500)
);
