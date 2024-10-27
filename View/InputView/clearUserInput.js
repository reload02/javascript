export const clearUserInput = (id) => {
  const userInput = document.getElementById(id);
  userInput.value = "";
  userInput.placeholder = "";
};
