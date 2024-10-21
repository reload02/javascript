import { playGame } from "./playGame.js";
import { askGameSetting } from "./askGameSetting.js";
import { CAR_NAME_QUESTION, PLAY_TIME_QUESTION } from "./Constant/constant.js";

askGameSetting(CAR_NAME_QUESTION, PLAY_TIME_QUESTION).then(
  (carsAndPlayTime) => {
    playGame(carsAndPlayTime[0], carsAndPlayTime[1]);
  }
);
