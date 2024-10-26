import { updateDescription } from "../../Model/updateDescription";
import { clearUserInput } from "../InputView/clearUserInput.js";

const ERROR_MESSAGE = "[ERROR] : ";

export const displayByInput = async (
  inputValue,
  resolve,
  reject,
  errorTypeToCheck
) => {
  const resultElement = document.getElementById("result");
  await updateDescription(resultElement, "정상적인 입력인지 확인중...");
  if (errorTypeToCheck(inputValue) === true) {
    await updateDescription(
      resultElement,
      "정상적으로 입력 되었습니다.",
      "green"
    );
    clearUserInput("userInput");
    await updateDescription(resultElement, "", "black", 0);
    resolve(inputValue);
  } else {
    clearUserInput("userInput");
    await updateDescription(
      resultElement,
      ERROR_MESSAGE + errorTypeToCheck(inputValue),
      "red"
    );
    updateDescription(resultElement, "");
    reject(errorTypeToCheck(inputValue));
  }
};
