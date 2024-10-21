import { WINNERFORMAT } from "./Constant/constant.js";

export const printWinner = (cars) => {
  let winners = [];
  let highScore = 0;

  cars.map((car) => {
    if (car.currentPosition === highScore) {
      winners.push(car.carName);
    }
    if (car.currentPosition > highScore) {
      highScore = car.currentPosition;
      winners = [car.carName];
    }
  });
  console.log(WINNERFORMAT + winners);
};
