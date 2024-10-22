import { printWinner } from "../출력부분/PrintWinner.js";
import { printCarPosition } from "../출력부분/PrintCarPosition.js";
import { moveCar } from "./MoveCar.js";
import { randomNumber } from "./RandomNumber.js";

export const playGame = (cars, playTime) => {
  let carsArray = cars.map((car) => ({ carName: car, currentPosition: 0 }));
  for (let i = playTime; i > 0; i--) {
    carsArray = moveCar(carsArray, randomNumber);
    carsArray.forEach((car) => {
      printCarPosition(car);
    });
  }
  printWinner(carsArray);
};
