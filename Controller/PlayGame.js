import { printWinner } from "../View/outputView/printWinner.js";
//import { printCarPosition } from "../View/outputView/printCarPosition.js";
import { getWinner } from "../Model/getWInner.js";
import { showCarPosition } from "../View/outputView/showCarposition.js";
import { showWinner } from "../View/outputView/showWinner.js";

const playGame = async (cars, playTime) => {
  cars = cars.split(",");
  let carsArray = cars.map((car) => ({ carName: car, currentPosition: 0 }));
  //printCarPosition(carsArray, playTime);
  carsArray = await showCarPosition(carsArray, playTime);
  let winners = getWinner(carsArray);
  printWinner(winners);
  showWinner(winners);
};

export default playGame;
