import { CAR_PROGRESS_MARK } from "../../Model/constant.js";

export const printCarPosition = (car) => {
  let currentStatus = `${car.carName} : ${CAR_PROGRESS_MARK.repeat(
    car.currentPosition
  )}`;
  console.log(currentStatus);
};
