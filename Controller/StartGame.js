import playGame from "./playGame.js";
import { askGameSetting } from "../View/InputView/askGameSetting.js";
import { checkNameInputError } from "../Model/checkNameInputError.js";
import { checkPlayTimeInputError } from "../Model/checkPlayTimeInputError.js";
const CAR_NAME_SPLITER = ",";
const NAME_OF_CAR_NAME_SPLITTER = "쉼표";
const CAR_NAME_QUESTION = `경주 할 자동차 이름(이름은 ${NAME_OF_CAR_NAME_SPLITTER}(${CAR_NAME_SPLITER}) 기준으로 구분)`;
const PLAY_TIME_QUESTION = "시도할 회수";

export const startGame = async () => {
  const [cars, playtime] = await askGameSetting([
    { question: CAR_NAME_QUESTION, checkError: checkNameInputError },
    { question: PLAY_TIME_QUESTION, checkError: checkPlayTimeInputError },
  ]);
  playGame(cars, playtime);
};
