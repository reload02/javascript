import { askQuestion } from "../View/InputView/askQuestion.js";

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
