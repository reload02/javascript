import { ERROR_MESSAGE_DETAIL } from "./constant.js";

export const checkPlayTimeInputError = (playTime) => {
  if (playTime.includes(" ")) return ERROR_MESSAGE_DETAIL.SPACE;
  playTime = Number(playTime);
  if (!Number.isInteger(playTime)) return ERROR_MESSAGE_DETAIL.NO_NATURE_NUMBER;
  if (playTime < 1) return ERROR_MESSAGE_DETAIL.NO_NATURE_NUMBER;
  return true;
};
