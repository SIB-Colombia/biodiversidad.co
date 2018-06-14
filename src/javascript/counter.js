const countDownDate = new Date("Jun 22, 2018 9:00:00").getTime();

const x = setInterval(function() {

  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("counterDays").innerHTML = days;
  document.getElementById("counterHours").innerHTML = hours;
  document.getElementById("counterMinutes").innerHTML = minutes;
  document.getElementById("counterSeconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);