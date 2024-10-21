import { printWinner } from "./printWinner.js";
import { printCarPosition } from "./printCarPosition.js";
import { FORWARDSTANDARD } from "./Constant/constant.js";

export const playGame = (cars, playTime) => {
  const carsArray = cars.map((car) => {
    return { carName: car, currentPosition: 0 };
  });
  for (let i = playTime; i > 0; i--) {
    carsArray.forEach((car) => {
      if (Math.floor(Math.random() * 10) > FORWARDSTANDARD)
        car.currentPosition++;
      printCarPosition(car);
    });
  }
  printWinner(carsArray);
};
