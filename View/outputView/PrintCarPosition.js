import { moveCar } from "../../Model/moveCar.js";
import { randomNumber } from "../../Model/randomNumber.js";
const CAR_PROGRESS_MARK = "-";

export const printCarPosition = (carsArray, playTime) => {
  for (let i = playTime; i > 0; i--) {
    carsArray = moveCar(carsArray, randomNumber);
    carsArray.forEach((car) => {
      let currentStatus = `${car.carName} : ${CAR_PROGRESS_MARK.repeat(
        car.currentPosition
      )}`;
      console.log(currentStatus);
    });
  }
};
