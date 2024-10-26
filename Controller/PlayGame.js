import { printWinner } from "../View/outputView/printWinner.js";
import { printCarPosition } from "../View/outputView/printCarPosition.js";
import { getWinner } from "../Model/getWInner.js";
import { showCarPosition } from "../View/outputView/showCarposition.js";
import { showWinner } from "../View/outputView/showWinner.js";

const playGame = async (cars, playTime) => {
  cars = cars.split(",");
  let carsArray = cars.map((car) => ({ carName: car, currentPosition: 0 }));
  //printCarPosition(carsArray, playTime);
  await showCarPosition(carsArray, playTime);
  let winners = await getWinner(carsArray);
  //printWinner(winners);
  await showWinner(winners);
};

export default playGame;
