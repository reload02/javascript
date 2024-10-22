import { randomNumber } from "../내부동작/RandomNumber";

test("RandomNumber returns expected mocked value", () => {
  // RandomNumber 함수의 출력을 Mocking하여 고정된 값 반환
  const mockRandomNumber = jest.spyOn(Math, "random").mockReturnValue(0.5);

  const result = randomNumber(1, 10);

  // Math.random()이 0.5를 반환하면, RandomNumber는 5를 반환해야 함
  expect(result).toBe(6);

  // 테스트 후 원래의 Math.random()을 복원
  mockRandomNumber.mockRestore();
});
