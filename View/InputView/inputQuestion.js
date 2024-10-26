export const inputQuestion = (question, errorTypeToCheck) => {
  document.getElementById("userInput").placeholder = question;
  return new Promise((resolve, reject) => {
    document.getElementById("submitButton").addEventListener(
      "click",
      async () => {
        const inputValue = document.getElementById("userInput").value;
        await displayByInput(inputValue, resolve, reject, errorTypeToCheck);
      },
      { once: true }
    );
  });
};
