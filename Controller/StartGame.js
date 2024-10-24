import playGame from "./PlayGame.js";
import { askGameSetting } from "../View/InputView/AskGameSetting.js";
import { checkNameInputError } from "../Model/CheckNameInputError.js";
import { checkPlayTimeInputError } from "../Model/CheckPlayTimeInputError.js";
import {
  CAR_NAME_QUESTION,
  PLAY_TIME_QUESTION,
} from "../Model/Constant/constant.js";

export const startGame = async () => {
  const [cars, playtime] = await askGameSetting(
    CAR_NAME_QUESTION,
    checkNameInputError,
    PLAY_TIME_QUESTION,
    checkPlayTimeInputError
  );
  playGame(cars, playtime);
};
