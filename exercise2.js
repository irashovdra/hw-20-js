const img = document.querySelector(".image");

const changeSrc = function () {
  const newSrc =
    "https://i.natgeofe.com/n/506bcd08-37e0-4506-b4cc-328b028cdd8c/NationalGeographic_2683370_3x2.jpg?w=1638&h=1092";
  img.src = newSrc;
};

console.log(changeSrc());
