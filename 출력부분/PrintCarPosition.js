import { CAR_PROGRESS_MARK } from "../Constant/constant.js";

export const PrintCarPosition = (car) => {
  let currentStatus = `${car.carName} : ${CAR_PROGRESS_MARK.repeat(
    car.currentPosition
  )}`;
  console.log(currentStatus);
  return currentStatus;
};
