const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

const changeBtn = function () {
  const newText = text.value;
  btn.textContent = newText;
};

console.log(changeBtn());
