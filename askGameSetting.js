import readline from "readline";
import { checkNameInputError } from "./checkNameInputError.js";
import { checkPlayTimeInputError } from "./checkPlayTimeInputError.js";
import { CARNAMESPLITER } from "./Constant/constant.js";
import { ERRORMESSAGE } from "./Constant/constant.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const askGameSetting = (askCarName, askPlayTime) => {
  let cars = [];
  return new Promise((resolve) => {
    rl.question(askCarName, (answer) => {
      if (checkNameInputError(answer)) {
        cars = answer.split(CARNAMESPLITER);
        askPlayTimeQuestion(askPlayTime, resolve, cars);
      } else {
        console.log(ERRORMESSAGE);
        askGameSetting(askCarName, askPlayTime).then(resolve);
      }
    });
  });
};

const askPlayTimeQuestion = (askPlayTime, resolve, cars) => {
  let playTime = 0;
  rl.question(askPlayTime, (answer) => {
    if (checkPlayTimeInputError(answer)) {
      playTime = answer;
      resolve([cars, playTime]);
      rl.close();
    } else {
      console.log(ERRORMESSAGE);
      console.log(cars);
      askPlayTimeQuestion(askPlayTime, resolve, cars);
    }
  });
};
