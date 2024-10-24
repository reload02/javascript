import { askQuestion } from "../View/InputView/askQuestion.js";
import { printError } from "../View/outputView/printError.js";

export const promptUntilCorrect = async (question, errorTypeToCheck) => {
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
