const WINNER_FORMAT = "최종 우승자 : ";

export const showWinner = (winners) => {
  alert(WINNER_FORMAT + winners);
  location.reload();
};
