import { rl } from "./askQuestion.js";
import { promptUntilCorrect } from "../../Model/promptUntilCorrect.js";

export const askGameSetting = async (questionWithErrorCallBack) => {
  let setting = [];
  for (const infomation of questionWithErrorCallBack)
    setting.push(
      await promptUntilCorrect(infomation.question, infomation.checkError)
    );

  rl.close();
  return setting;
};
