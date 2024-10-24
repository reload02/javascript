import { ERROR_MESSAGE_DETAIL } from "./constant.js";

export const checkNameInputError = (nameStr) => {
  if (nameStr.includes(" ")) return ERROR_MESSAGE_DETAIL.SPACE;
  let names = nameStr.split(",");
  if (names.some((str) => str === "")) return ERROR_MESSAGE_DETAIL.EMPTY;
  if (names.some((str) => str.length >= 5))
    return ERROR_MESSAGE_DETAIL.OVER_5_CHARATERS;
  return true;
};

// 테스트
