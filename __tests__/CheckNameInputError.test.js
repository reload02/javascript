import { CheckNameInputError } from "../내부동작/CheckNameInputError";

test("게임회수를 입력할때 공백을 입력", () => {
  expect(CheckNameInputError(" carA")).toBe(false);
});

test("자동차 하나의 이름을 5글이상으로 입력", () => {
  expect(CheckNameInputError("asdasd,car1,car3")).toBe(false);
});

test("입력X", () => {
  expect(CheckNameInputError("")).toBe(false);
});
