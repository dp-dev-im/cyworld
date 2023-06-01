const onClick = () => {
  const token = String(Math.round(Math.random() * 1000000)).padStart(6, "0");
  let time = 179;
  setInterval(function () {
    if (time >= 0) {
      const min = Math.floor(time / 60);
      const sec = String(Math.floor(time % 60)).padStart(2, "0");
      document.getElementById("timer").innerText = `${min}min ${sec}sec`;
      //   console.log(`${min}min ${sec}sec`);
      time--;
    } else {
      document.getElementById("disabled").disabled = true;
    }
  }, 1000);
  document.getElementById("randomNumber").innerText = token;
  document.getElementById("randomNumber").style.backgroundColor = `#${token}`;
};

const startWord = () => {
  let word = document.getElementById("word").innerText;
  let inputWord = document.getElementById("inputWord").value;
  let lastWord = word[word.length - 1];
  // console.log(lastWord)
  let firstWord = inputWord[0];

  if (lastWord === firstWord) {
    console.log("right");
    document.getElementById("result").innerText = "Right";
    document.getElementById("word").innerText = inputWord;
    document.getElementById("inputWord").value = "";
  } else {
    document.getElementById("result").innerText = "Wrong";
  }
};
