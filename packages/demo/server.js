const chokidar = require("chokidar");
const net = require("net");
const { debounce } = require("lodash");
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
    console.log(`${file} 发生变化`);
    subProcess.removeAllListeners();
    subProcess.kill();
    fork("index.js");
  }, 500)
);
