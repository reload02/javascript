import {
  FORWARD_STANDARD,
  MAX_RANDOM_NUMBER_FOR_FORWARD,
  MIN_RANDOM_NUMBER_FOR_FORWARD,
} from "../Constant/constant.js";

export const MoveCar = (carsArray, RandomNumber) => {
  carsArray.forEach((car) => {
    if (
      RandomNumber(
        MIN_RANDOM_NUMBER_FOR_FORWARD,
        MAX_RANDOM_NUMBER_FOR_FORWARD
      ) > FORWARD_STANDARD
    )
      car.currentPosition++;
  });
  return carsArray;
};
