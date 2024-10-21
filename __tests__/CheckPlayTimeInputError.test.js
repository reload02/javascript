import { CheckPlayTimeInputError } from "../내부동작/CheckPlayTimeInputError.js";

test("게임회수를 입력할때 공백을 입력", () => {
  expect(CheckPlayTimeInputError(" 4")).toBe(false);
});
