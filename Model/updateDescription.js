import { delay } from "./delay.js";

export const updateDescription = async (
  element,
  text,
  color = "black",
  delayTime = 1000
) => {
  element.textContent = text;
  element.style.color = color;
  await delay(delayTime);
};
