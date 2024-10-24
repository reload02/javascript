import { printWinner } from "../View/outputView/printWinner.js";
import { printCarPosition } from "../View/outputView/printCarPosition.js";
import { moveCar } from "../Model/moveCar.js";
import { randomNumber } from "../Model/randomNumber.js";
import { getWinner } from "../Model/getWInner.js";

const playGame = (cars, playTime) => {
  cars = cars.split(",");
  let carsArray = cars.map((car) => ({ carName: car, currentPosition: 0 }));
  for (let i = playTime; i > 0; i--) {
    carsArray = moveCar(carsArray, randomNumber);
    carsArray.forEach((car) => {
      printCarPosition(car);
    });
  }
  let winners = getWinner(carsArray);
  printWinner(winners);
};

export default playGame;
