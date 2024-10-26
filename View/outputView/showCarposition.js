import { moveCar } from "../../Model/moveCar.js";
import { randomNumber } from "../../Model/randomNumber.js";

const CAR_PROGRESS_MARK = "■";

export const showCarPosition = (carsArray, playTime) => {
  let intervalId = setInterval(() => {
    let currentstatus = `${playTime}회 남았습니다.\n`;
    carsArray.forEach((car) => {
      currentstatus =
        currentstatus +
        "\n" +
        `${car.carName} : ${CAR_PROGRESS_MARK.repeat(car.currentPosition)}`;

      document.body.innerHTML = `<pre style = "font-size: 16px; ">${currentstatus}</pre>`;
    });
    carsArray = moveCar(carsArray, randomNumber);
    playTime--;
    if (playTime < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};
