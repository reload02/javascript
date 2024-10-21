import { PrintWinner } from "./출력부분/PrintWinner.js";
import { PrintCarPosition } from "./출력부분/PrintCarPosition.js";
import { MoveCar } from "./내부동작/MoveCar.js";
import { RandomNumber } from "./내부동작/RandomNumber.js";

export const PlayGame = (cars, playTime) => {
  let carsArray = cars.map((car) => ({ carName: car, currentPosition: 0 }));
  for (let i = playTime; i > 0; i--) {
    carsArray = MoveCar(carsArray, RandomNumber);
    carsArray.forEach((car) => {
      PrintCarPosition(car);
    });
  }
  PrintWinner(carsArray);
};
