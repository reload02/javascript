import { CAR_NAME_SPLITER, ERROR_MESSAGE_DETAIL } from "./constant.js";

export const checkNameInputError = (nameStr) => {
  if (nameStr.includes(" ")) return ERROR_MESSAGE_DETAIL.SPACE;
  let names = nameStr.split(CAR_NAME_SPLITER);
  if (names.some((str) => !str)) return ERROR_MESSAGE_DETAIL.EMPTY;
  if (names.some((str) => str.length >= 5))
    return ERROR_MESSAGE_DETAIL.OVER_5_CHARATERS;
  return true;
};
