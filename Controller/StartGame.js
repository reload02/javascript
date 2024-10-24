import playGame from "./PlayGame.js";
import { askGameSetting } from "../View/InputView/askGameSetting.js";
import { checkNameInputError } from "../Model/CheckNameInputError.js";
import { checkPlayTimeInputError } from "../Model/CheckPlayTimeInputError.js";
import { CAR_NAME_QUESTION, PLAY_TIME_QUESTION } from "../Model/constant.js";

export const startGame = async () => {
  const [cars, playtime] = await askGameSetting([
    { question: CAR_NAME_QUESTION, checkError: checkNameInputError },
    { question: PLAY_TIME_QUESTION, checkError: checkPlayTimeInputError },
  ]);
  playGame(cars, playtime);
};
