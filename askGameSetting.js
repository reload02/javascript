import readline from "readline";
import { checkNameInputError } from "./checkNameInputError.js";
import { checkPlayTimeInputError } from "./checkPlayTimeInputError.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const askGameSetting = (askCarName, askPlayTime) => {
  let cars = [];
  return new Promise((resolve) => {
    rl.question(askCarName, (answer) => {
      if (checkNameInputError(answer)) {
        cars = answer.split(",");
        console.log("이름이 올바르게 입력되었습니다:", cars);
        askPlayTimeQuestion(askPlayTime, resolve, cars);
      } else {
        console.log("[ERROR]");
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
      console.log("숫자가 올바르게 입력되었습니다:", playTime);
      resolve([cars, playTime]);
      rl.close();
    } else {
      console.log("[ERROR]");
      askPlayTimeQuestion(askPlayTime, resolve);
    }
  });
};
