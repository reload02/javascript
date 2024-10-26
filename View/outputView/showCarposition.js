import { moveCar } from "../../Model/moveCar.js";
import { randomNumber } from "../../Model/randomNumber.js";

const CAR_PROGRESS_MARK = "■";

export const showCarPosition = async (carsArray, playTime) => {
  let leftTime = Number(playTime);
  return new Promise((resolve) => {
    let intervalId = setInterval(() => {
      leftTime--;
      carsArray = moveCar([...carsArray], randomNumber);
      let currentstatus = `${leftTime}회 남았습니다.\n`;
      carsArray.forEach((car) => {
        currentstatus =
          currentstatus +
          "\n" +
          `${car.carName} : ${CAR_PROGRESS_MARK.repeat(car.currentPosition)}`;
      });
      document.body.innerHTML = `<pre>${currentstatus}</pre>`;
      if (leftTime === 0) {
        document.body.innerHTML = `<pre>${currentstatus}</pre>`;
        clearInterval(intervalId);
        setTimeout(() => {
          resolve(carsArray);
        }, 0);
      }
    }, 500);
  });
};
