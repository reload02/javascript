import { playGame } from "./Controller/PlayGame.js";
import { askGameSetting } from "./View/InputView/AskGameSetting.js";
import {
  CAR_NAME_QUESTION,
  PLAY_TIME_QUESTION,
} from "./Model/Constant/constant.js";

askGameSetting(CAR_NAME_QUESTION, PLAY_TIME_QUESTION).then(
  (carsAndPlayTime) => {
    playGame(carsAndPlayTime[0], carsAndPlayTime[1]);
  }
);
