const ERROR_MESSAGE = "[ERROR] : ";

export const printError = (error) => {
  console.log(ERROR_MESSAGE + error);
  return ERROR_MESSAGE + error;
};
