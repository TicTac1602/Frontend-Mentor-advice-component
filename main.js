const advice_number = document.getElementById('advice_number');
const advice_text = document.getElementById('advice_text');

function getData() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((obj) => {
      advice_number.innerHTML = obj.slip.id;
      advice_text.innerHTML = `“${obj.slip.advice}”`;
    });
}