const MIN_RANDOM_NUMBER_FOR_FORWARD = 0;
const MAX_RANDOM_NUMBER_FOR_FORWARD = 10;
const FORWARD_STANDARD = 4;

export const moveCar = (carsArray, RandomNumber) => {
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
