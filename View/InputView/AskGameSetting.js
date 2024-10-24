import readline from "readline";

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

export const askGameSetting = async (
  question,
  errorTypeToCheck,
  question2,
  errorTypeToCheck2
) => {
  let setting = [];

  setting.push(await promptUntilCorrect(question, errorTypeToCheck));
  setting.push(await promptUntilCorrect(question2, errorTypeToCheck2));

  rl.close();
  return setting;
};

const promptUntilCorrect = async (question, errorTypeToCheck) => {
  let value = null;
  while (value === null) {
    try {
      const result = await askQuestion(question, errorTypeToCheck);
      value = result;
    } catch (error) {
      console.log(error);
    }
  }
  return value;
};
