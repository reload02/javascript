export const RandomNumber = (minNum, maxNum) => {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};
