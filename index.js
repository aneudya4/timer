const btns = document.querySelectorAll('.btn');
const clock = document.querySelector('.clock');
const h1 = document.querySelector('h1');
const hoursSpan = document.querySelector('.hours');
const minsSpan = document.querySelector('.mins');
const secsSpan = document.querySelector('.secs');
let time;
let secs = 0;
let mins = 0;
let hours = 0;

btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    if (this.classList.contains('start')) {
      // run interval
      h1.innerHTML = 'Timer Started';
      time = setInterval(timer, 1000);
      this.style.pointerEvents = 'none';
    } else if (this.classList.contains('reset')) {
      h1.innerHTML = 'Timer';

      // adds pointer events back to the start button
      this.nextElementSibling.style.pointerEvents = 'initial';
      //   clear interval
      clearInterval(time);
      secs = 0;
      mins = 0;
      hours = 0;
      secsSpan.textContent = '00';
      minsSpan.textContent = '00:';
      hoursSpan.textContent = '00:';
    } else {
      h1.innerHTML = 'Timer Stopped';

      // adds pointer events back to the start button
      this.previousElementSibling.style.pointerEvents = 'initial';
      // clear interval to stop it

      clearInterval(time);
    }
  });
});

const timer = () => {
  secs++;
  secsSpan.textContent = beautifyTimer(secs);

  if (secs === 60) {
    secs = 0;
    mins++;
    minsSpan.textContent = `${beautifyTimer(mins)} :`;
    secsSpan.textContent = `${beautifyTimer(secs)}`;
  }
  if (mins === 60) {
    mins = 0;
    hours++;
    minsSpan.textContent = `${mins} :`;
    hoursSpan.textContent = `${beautifyTimer(hours)} :`;
  }
};

const beautifyTimer = (time) => {
  return time < 10 ? `0${time}` : time;
};
