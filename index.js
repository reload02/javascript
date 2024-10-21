import { playGame } from "./playGame.js";
import { askGameSetting } from "./askGameSetting.js";
import { CARNAMEQUESTION, PLAYTIMEQUESTION } from "./constant.js";

askGameSetting(CARNAMEQUESTION, PLAYTIMEQUESTION).then((carsAndPlayTime) => {
  playGame(carsAndPlayTime[0], carsAndPlayTime[1]);
});
