const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Teeeeeeeeeee!';
  container.className = 'container grow';
  document.body.style.backgroundImage = "url('img/first.jpg')";

  setTimeout(() => {
    text.innerText = 'Hold';
    document.body.style.backgroundImage = "url('img/second.jpg')";

    setTimeout(() => {
      text.innerText = 'moooooooooon!';
      document.body.style.backgroundImage = "url('img/third.jpg')";
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
