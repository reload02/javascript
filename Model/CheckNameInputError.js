export const checkNameInputError = (nameStr) => {
  if (nameStr.includes(" ")) return "공백포함";
  let names = nameStr.split(",");
  if (names.some((str) => str === "")) return "빈입력";
  if (names.some((str) => str.length >= 5)) return "너무긴 이름";
  return true;
};

// 테스트
