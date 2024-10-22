// import readline from "readline";
// import { checkNameInputError } from "../../Model/CheckNameInputError.js";
// import { checkPlayTimeInputError } from "../../Model/CheckPlayTimeInputError.js";
// import {
//   CAR_NAME_SPLITER,
//   ERROR_MESSAGE,
// } from "../../Model/Constant/constant.js";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// export const askGameSetting = (askCarName, askPlayTime) => {
//   let cars = [];
//   return new Promise((resolve) => {
//     rl.question(askCarName, (answer) => {
//       if (checkNameInputError(answer)) {
//         cars = answer.split(CAR_NAME_SPLITER);
//         askPlayTimeQuestion(askPlayTime, resolve, cars);
//       } else {
//         console.log(ERROR_MESSAGE);
//         askGameSetting(askCarName, askPlayTime).then(resolve);
//       }
//     });
//   });
// };

// const askPlayTimeQuestion = (askPlayTime, resolve, cars) => {
//   let playTime = 0;
//   rl.question(askPlayTime, (answer) => {
//     if (checkPlayTimeInputError(answer)) {
//       playTime = answer;
//       resolve([cars, playTime]);
//       rl.close();
//     } else {
//       console.log(ERROR_MESSAGE);
//       askPlayTimeQuestion(askPlayTime, resolve, cars);
//     }
//   });
// };
