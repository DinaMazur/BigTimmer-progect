function startTimmer(targetDate) {
  const timmer = document.querySelector(".timmer");

  function updateTimmer() {
    const now = new Date().getTime();
    const time = targetDate - now;

    if (time <= 0) {
      timmer.innerHTML = "Час вийшов!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    timmer.innerHTML = `${days} дн ${hours} год ${minutes} хв ${seconds} сек`;
  }

  updateTimmer();
  const interval = setInterval(updateTimmer, 1000);
}


startTimmer(new Date("Jun 14, 2025").getTime());
