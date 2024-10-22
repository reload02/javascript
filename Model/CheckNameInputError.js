export const checkNameInputError = (nameStr) => {
  if (nameStr.includes(" ")) return false;
  let names = nameStr.split(",");
  if (names.some((str) => str === "")) return false;
  if (names.some((str) => str.length >= 5)) return false;
  return true;
};
