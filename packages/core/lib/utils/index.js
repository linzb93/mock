module.exports = {
  sample(list) {
    return list[parseInt(Math.random() * list.length)];
  },
  repeat(type, min, max) {
    // 1 纯数字，2纯字母，3混合
    let ret = "";
    const numList = Array(10).map((_, index) => index);
    const letters = "abcdefghijklmnopqrstuvwxyz";
    if (type === 1) {
      if (!max) {
        for (let i = 0; i < min; i++) {
          ret += this.sample(numList);
        }
        return Number(ret);
      } else {
        const len = min + parseInt(Math.random() * (max - min));
        for (let i = min; i < len; i++) {
          ret += this.sample(numList);
        }
        return Number(ret);
      }
    } else if (type === 2) {
      if (!max) {
        for (let i = 0; i < min; i++) {
          ret += this.sample(letters.split(""));
        }
        return Number(ret);
      } else {
        const len = min + parseInt(Math.random() * (max - min));
        for (let i = min; i < len; i++) {
          ret += this.sample(letters.split(""));
        }
        return Number(ret);
      }
    } else {
      if (!max) {
        for (let i = 0; i < min; i++) {
          ret += this.sample(letters.split("").concat(numList));
        }
        return Number(ret);
      } else {
        const len = min + parseInt(Math.random() * (max - min));
        for (let i = min; i < len; i++) {
          ret += this.sample(letters.split("").concat(numList));
        }
        return Number(ret);
      }
    }
  },
};
