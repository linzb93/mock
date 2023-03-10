module.exports = (first, length) => {
  const map = ["李小明", "张三", "李四", "王五"];
  const fMap = map.filter((item) => {
    if (first) {
      return (
        item.startsWith(first) &&
        (length ? item.length === Number(length) : true)
      );
    }
    return item;
  });
  if (!fMap.length) {
    return "";
  }
  if (fMap.length === 1) {
    return fMap[0];
  }
  return fMap[parseInt(Math.random() * fMap.length)];
};
