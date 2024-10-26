const ERROR_MESSAGE = "[ERROR] : ";

export const inputQuestion = (question, errorTypeToCheck) => {
  document.getElementById("userInput").placeholder = question;
  return new Promise((resolve, reject) => {
    document.getElementById("submitButton").addEventListener(
      "click",
      () => {
        const inputValue = document.getElementById("userInput").value;
        const resultElement = document.getElementById("result");
        resultElement.style.color = "black";
        resultElement.textContent = "정상적인 입력인지 확인중...";
        if (errorTypeToCheck(inputValue) === true) {
          setTimeout(() => {
            resultElement.textContent = "정상적으로 입력이 완료되었습니다.";
            resultElement.style.color = "green";
            document.getElementById("userInput").value = "";
            document.getElementById("userInput").placeholder = "";
          }, 1000);
          setTimeout(() => {
            resultElement.textContent = "";
            resolve(inputValue);
          }, 2000);
        } else {
          setTimeout(() => {
            resultElement.textContent =
              ERROR_MESSAGE + errorTypeToCheck(inputValue);
            resultElement.style.color = "red";
            reject(errorTypeToCheck(inputValue));
          }, 1000);
        }
      },
      { once: true }
    );
  });
};
