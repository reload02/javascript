import readline from "readline";

const mokCars = ["Acar", "Bcar", "Ccar"];
const mokPlaytime = 7;
const mokCarss = [
  { carName: "Acar", currentPosition: 3 },
  { carName: "Bcar", currentPosition: 4 },
  { carName: "Ccar", currentPosition: 1 },
];

let cars = [];
let playTime = 0;

const playGame = (cars, playTime) => {
  const carsArray = cars.map((car) => {
    return { carName: car, currentPosition: 0 };
  });
  for (let i = playTime; i > 0; i--) {
    carsArray.forEach((car) => {
      if (Math.floor(Math.random() * 10) > 4) car.currentPosition++;
      printCarPosition(car);
    });
  }
  printWinner(carsArray);
};

const printCarPosition = (car) => {
  let currentStatus = `${car.carName} : ${"-".repeat(car.currentPosition)}`;
  console.log(currentStatus);
  return currentStatus;
};

const printWinner = (cars) => {
  let winners = [];
  let highScore = 0;

  cars.map((car) => {
    if (car.currentPosition === highScore) {
      winners.push(car.carName);
    }
    if (car.currentPosition > highScore) {
      highScore = car.currentPosition;
      winners = [car.carName];
    }
  });
  console.log("최종 우승자 : " + winners);
};

const checkNameInputError = (nameStr) => {
  if (nameStr.includes(" ")) return false;
  let names = nameStr.split(",");
  if (names.some((str) => str === "")) return false;
  if (names.some((str) => str.length >= 5)) return false;
  return true;
};

const checkPlayTimeInputError = (playTime) => {
  if (playTime.includes(" ")) return false;
  playTime = Number(playTime);
  if (!Number.isInteger(playTime)) return false;
  if (playTime < 1) return false;
  return true;
};
//playGame(mokCars, mokPlaytime);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askGameSetting = (askCarName, askPlayTime) => {
  return new Promise((resolve) => {
    rl.question(askCarName, (answer) => {
      if (checkNameInputError(answer)) {
        cars = answer.split(",");
        console.log("이름이 올바르게 입력되었습니다:", cars);
        askPlayTimeQuestion(askPlayTime, resolve);
      } else {
        console.log("[ERROR]");
        askGameSetting(askCarName, askPlayTime).then(resolve);
      }
    });
  });
};

const askPlayTimeQuestion = (askPlayTime, resolve) => {
  rl.question(askPlayTime, (answer) => {
    if (checkPlayTimeInputError(answer)) {
      playTime = answer;
      console.log("숫자가 올바르게 입력되었습니다:", playTime);
      resolve();
      rl.close();
    } else {
      console.log("[ERROR]");
      askPlayTimeQuestion(askPlayTime, resolve);
    }
  });
};

askGameSetting(
  "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)",
  "시도할 회수"
).then(() => {
  playGame(cars, playTime);
});
