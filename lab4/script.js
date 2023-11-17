document.addEventListener("DOMContentLoaded", () => {
  const variant = 72;
  const firstElementId = `element${(variant % 10) + 1}`;
  const secondElementId = `element${(variant % 10) + 2}`;

  document.getElementById(firstElementId).addEventListener("click", function() {
    this.style.backgroundColor = this.style.backgroundColor === "black" ? "white" : "black";
    this.style.color = this.style.color === "white" ? "black" : "white";
  });

  document.querySelector(`#${secondElementId}`).addEventListener("click", function() {
    this.style.backgroundColor = this.style.backgroundColor === "black" ? "white" : "black";
    this.style.color = this.style.color === "white" ? "black" : "white";
  });

  const btnAdd = document.getElementById("btn-add");
  const btnEnlarge = document.getElementById("btn-enlarge");
  const btnReduce = document.getElementById("btn-reduce");
  const btnRemove = document.getElementById("btn-remove");
  const imageContainer = document.getElementById("image-container");

  function updateButtonStates() {
    const imgExists = imageContainer.querySelector(".lviv");
    btnAdd.disabled = imgExists;
    btnEnlarge.disabled = !imgExists;
    btnReduce.disabled = !imgExists;
    btnRemove.disabled = !imgExists;
  }

  btnAdd.addEventListener("click", () => {
    const newImg = document.createElement("img");
    newImg.src = "lviv.jpg";
    newImg.alt = "славетний Львів";
    newImg.className = "lviv";
    imageContainer.appendChild(newImg);
    updateButtonStates();
  });

  btnEnlarge.addEventListener("click", () => {
    const imgElement = imageContainer.querySelector(".lviv");
    imgElement.style.width = `${imgElement.clientWidth + 20}px`;
  });

  btnReduce.addEventListener("click", () => {
    const imgElement = imageContainer.querySelector(".lviv");
    imgElement.style.width = `${Math.max(imgElement.clientWidth - 20, 20)}px`;
  });

  btnRemove.addEventListener("click", () => {
    const imgElement = imageContainer.querySelector(".lviv");
    imgElement.remove();
    updateButtonStates();
  });

  updateButtonStates();
});
