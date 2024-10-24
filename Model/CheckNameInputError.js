import { ERROR_MESSAGE_DETAIL } from "./errorConstant.js";

export const checkNameInputError = (nameStr) => {
  if (nameStr.includes(" ")) return ERROR_MESSAGE_DETAIL.SPACE;
  let names = nameStr.split(",");
  if (names.some((str) => !str)) return ERROR_MESSAGE_DETAIL.EMPTY;
  if (names.some((str) => str.length >= 5))
    return ERROR_MESSAGE_DETAIL.OVER_5_CHARATERS;
  if (names.length !== new Set(names).size) {
    return ERROR_MESSAGE_DETAIL.DUPLICATE;
  }

  return true;
};
