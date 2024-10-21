export const printCarPosition = (car) => {
  let currentStatus = `${car.carName} : ${"-".repeat(car.currentPosition)}`;
  console.log(currentStatus);
  return currentStatus;
};
