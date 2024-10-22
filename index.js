import { playGame } from "./내부동작//PlayGame.js";
import { askGameSetting } from "./입력부분/AskGameSetting.js";
import { CAR_NAME_QUESTION, PLAY_TIME_QUESTION } from "./Constant/constant.js";

askGameSetting(CAR_NAME_QUESTION, PLAY_TIME_QUESTION).then(
  (carsAndPlayTime) => {
    playGame(carsAndPlayTime[0], carsAndPlayTime[1]);
  }
);
