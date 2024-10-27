import readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const askQuestion = (question, errorTypeToCheck) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      if (errorTypeToCheck(answer) === true) {
        resolve(answer);
      }
      reject(errorTypeToCheck(answer));
    });
  });
};
