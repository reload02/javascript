export const checkPlayTimeInputError = (playTime) => {
  if (playTime.includes(" ")) return "공백입력";
  playTime = Number(playTime);
  if (!Number.isInteger(playTime)) return "정수가 아님";
  if (playTime < 1) return "양수가 아님";
  return true;
};
