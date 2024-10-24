import { printWinner } from "../View/outputView/printWinner.js";
import { printCarPosition } from "../View/outputView/PrintCarPosition.js";
import { moveCar } from "../Model/MoveCar.js";
import { randomNumber } from "../Model/RandomNumber.js";
import { getWinner } from "../Model/GetWInner.js";
import { WINNER_FORMAT } from "../Model/constant.js";

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
  printWinner(winners, WINNER_FORMAT);
};

export default playGame;
