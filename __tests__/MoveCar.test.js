import { moveCar } from "../내부동작/MoveCar";

const inputCarArray = [{ carName: "carA", currentPosition: 3 }];
const expectCarArray1 = [{ carName: "carA", currentPosition: 3 }];
const expectCarArray2 = [{ carName: "carA", currentPosition: 4 }];

const mockRandomNumber = jest.fn(() => 3);

test("난수가 기준수보다 작거나 같은 경우", () => {
  expect(moveCar(inputCarArray, mockRandomNumber)).toEqual(expectCarArray1);
});
const mockRandomNumber2 = jest.fn(() => 9);

test("난수가 기준수보다 큰 경우", () => {
  expect(moveCar(inputCarArray, mockRandomNumber2)).toEqual(expectCarArray2);
});
