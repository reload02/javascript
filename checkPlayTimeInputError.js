export const checkPlayTimeInputError = (playTime) => {
  if (playTime.includes(" ")) return false;
  playTime = Number(playTime);
  if (!Number.isInteger(playTime)) return false;
  if (playTime < 1) return false;
  return true;
};
