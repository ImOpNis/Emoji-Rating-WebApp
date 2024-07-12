const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);
document.getElementById('rate').value=1;

starsEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
	document.getElementById('rate').value= index+1;
    updateRating(index);
  });
});


document.getElementById('submit-button').addEventListener('click', function(e){
	let rating = document.getElementById('rate').value;
	alert("You submit a "+rating+" star rating");
});

function updateRating(index) {
  starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });

  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index];
  });
}
