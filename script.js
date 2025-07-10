const textarea = document.getElementById("message");
const counter = document.getElementById("counter");

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  counter.textContent = `${length} / 100`;

  if (length > 100) {
    counter.style.color = "red";
  } else if (length > 90) {
    counter.style.color = "orange";
  } else {
    counter.style.color = "black";
  }
});
