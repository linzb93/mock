"use strict";

const { mock } = require("@linzb93/mock");

describe("姓名", () => {
  const map = ["李小明", "张三", "李四", "王五"];
  it("无筛选", () => {
    expect(map.includes(mock({ name: "@cname(李,2)" }).name)).toBeTruthy();
  });
});
