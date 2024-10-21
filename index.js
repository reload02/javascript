import { PlayGame } from "./PlayGame.js";
import { AskGameSetting } from "./입력부분/AskGameSetting.js";
import { CAR_NAME_QUESTION, PLAY_TIME_QUESTION } from "./Constant/constant.js";

AskGameSetting(CAR_NAME_QUESTION, PLAY_TIME_QUESTION).then(
  (carsAndPlayTime) => {
    PlayGame(carsAndPlayTime[0], carsAndPlayTime[1]);
  }
);
