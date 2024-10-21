import { CheckPlayTimeInputError } from "../내부동작/CheckPlayTimeInputError.js";

test("게임회수를 입력할때 공백을 입력", () => {
  expect(CheckPlayTimeInputError(" 4")).toBe(false);
});

test("게임회수를 정수가 아닌걸 입력", () => {
  expect(CheckPlayTimeInputError("0.3")).toBe(false);
});

test("게임회수를 음의정수 입력", () => {
  expect(CheckPlayTimeInputError("-4")).toBe(false);
});
