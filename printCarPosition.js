import { CARPROGRESSMARK } from "./Constant/constant.js";

export const printCarPosition = (car) => {
  let currentStatus = `${car.carName} : ${CARPROGRESSMARK.repeat(
    car.currentPosition
  )}`;
  console.log(currentStatus);
  return currentStatus;
};
