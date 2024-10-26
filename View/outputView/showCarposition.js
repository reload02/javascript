import { moveCar } from "../../Model/moveCar.js";
import { randomNumber } from "../../Model/randomNumber.js";

const CAR_PROGRESS_MARK = "■";

export const showCarPosition = (carsArray, playTime) => {
  return new Promise((resolve) => {
    let intervalId = setInterval(() => {
      // console.log(carsArray[0].currentPosition);
      // console.log(carsArray[1].currentPosition);
      // console.log(carsArray[2].currentPosition); 질문용
      //console.log(carsArray);
      let currentstatus = `${playTime > 0 ? playTime : 0}회 남았습니다.\n`;
      carsArray.forEach((car) => {
        currentstatus =
          currentstatus +
          "\n" +
          `${car.carName} : ${CAR_PROGRESS_MARK.repeat(car.currentPosition)}`;
      });
      carsArray = moveCar(carsArray, randomNumber);
      document.body.innerHTML = `<pre>${currentstatus}</pre>`;
      playTime--;
      if (playTime < 0) {
        clearInterval(intervalId);
        document.body.innerHTML = `<pre>${currentstatus}</pre>`;
        resolve();
      }
    }, 100);
  });
};
