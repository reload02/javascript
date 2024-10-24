import readline from "readline";
import { printError } from "../outputView/printError.js";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question, errorTypeToCheck) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      if (errorTypeToCheck(answer) === true) {
        resolve(answer);
      }
      reject(errorTypeToCheck(answer));
    });
  });
};

const promptUntilCorrect = async (question, errorTypeToCheck) => {
  let value = null;
  while (value === null) {
    try {
      const result = await askQuestion(question, errorTypeToCheck);
      value = result;
    } catch (error) {
      printError(error);
    }
  }
  return value;
};

export const askGameSetting = async (questionAndErrorType) => {
  let setting = [];
  for (const infomation of questionAndErrorType)
    setting.push(
      await promptUntilCorrect(infomation.question, infomation.checkError)
    );

  rl.close();
  return setting;
};
