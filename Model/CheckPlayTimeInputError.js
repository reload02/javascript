import { ERROR_MESSAGE_DETAIL } from "./errorConstant.js";

export const checkPlayTimeInputError = (playTime) => {
  if (!playTime) return ERROR_MESSAGE_DETAIL.EMPTY;
  if (playTime.includes(" ")) return ERROR_MESSAGE_DETAIL.SPACE;
  playTime = Number(playTime);
  if (!Number.isInteger(playTime)) return ERROR_MESSAGE_DETAIL.NO_NATURE_NUMBER;
  if (playTime < 1) return ERROR_MESSAGE_DETAIL.NO_NATURE_NUMBER;
  return true;
};
