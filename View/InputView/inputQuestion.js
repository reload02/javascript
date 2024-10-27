export const inputQuestion = (question, errorTypeToCheck) => {
  document.getElementById("userInput").placeholder = question;
  return new Promise((resolve, reject) => {
    document.getElementById("submitButton").addEventListener("click", () => {
      const inputValue = document.getElementById("userInput").value;
      //document.getElementById("userInput").value = "";
      console.log(`Input Value: ${inputValue}`);
      const resultElement = document.getElementById("result");
      if (errorTypeToCheck(inputValue) === true) {
        resultElement.textContent = `Success! You entered: ${inputValue}`;
        resultElement.style.color = "green"; // 성공 시 텍스트 초록색으로 변경
        document.getElementById("userInput").placeholder = question;
        resolve(inputValue);
      } else {
        resultElement.textContent = "Error: Input cannot be empty!";
        resultElement.style.color = "red"; // 오류 시 텍스트 빨간색으로 변경
        reject(errorTypeToCheck(inputValue));
      }
    });
  });
};
