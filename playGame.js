import { printWinner } from "./printWinner.js";
import { printCarPosition } from "./printCarPosition.js";
import { RandomNumber } from "./내부동작/RandomNumber.js";
import {
  FORWARD_STANDARD,
  MAX_RANDOM_NUMBER_FOR_FORWARD,
  MIN_RANDOM_NUMBER_FOR_FORWARD,
} from "./Constant/constant.js";

export const playGame = (cars, playTime) => {
  const carsArray = cars.map((car) => {
    return { carName: car, currentPosition: 0 };
  });
  for (let i = playTime; i > 0; i--) {
    carsArray.forEach((car) => {
      if (
        RandomNumber(
          MIN_RANDOM_NUMBER_FOR_FORWARD,
          MAX_RANDOM_NUMBER_FOR_FORWARD
        ) > FORWARD_STANDARD
      )
        car.currentPosition++;
      printCarPosition(car);
    });
  }
  printWinner(carsArray);
};
