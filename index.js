//import { askGameSetting } from "./askGameSetting.js";
import { playGame } from "./playGame.js";
const mokCars = ["Acar", "Bcar", "Ccar"];
const mokPlaytime = 7;
const mokCarss = [
  { carName: "Acar", currentPosition: 3 },
  { carName: "Bcar", currentPosition: 4 },
  { carName: "Ccar", currentPosition: 1 },
];

let cars = [];
let playTime = 0;

//playGame(mokCars, mokPlaytime);

import readline from "readline";
import { checkNameInputError } from "./checkNameInputError.js";
import { checkPlayTimeInputError } from "./checkPlayTimeInputError.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askGameSetting = (askCarName, askPlayTime) => {
  return new Promise((resolve) => {
    rl.question(askCarName, (answer) => {
      if (checkNameInputError(answer)) {
        cars = answer.split(",");
        console.log("이름이 올바르게 입력되었습니다:", cars);
        askPlayTimeQuestion(askPlayTime, resolve);
      } else {
        console.log("[ERROR]");
        askGameSetting(askCarName, askPlayTime).then(resolve);
      }
    });
  });
};

const askPlayTimeQuestion = (askPlayTime, resolve) => {
  rl.question(askPlayTime, (answer) => {
    if (checkPlayTimeInputError(answer)) {
      playTime = answer;
      console.log("숫자가 올바르게 입력되었습니다:", playTime);
      resolve();
      rl.close();
    } else {
      console.log("[ERROR]");
      askPlayTimeQuestion(askPlayTime, resolve);
    }
  });
};

askGameSetting(
  "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)",
  "시도할 회수"
).then(() => {
  playGame(cars, playTime);
});
