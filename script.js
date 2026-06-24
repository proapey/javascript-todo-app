const ul = document.querySelector("ul");
const li = document.querySelector("li");
const input = document.querySelector("input");
const addButton = document.querySelector("button");

addButton.addEventListener("click", function () {
  if (input.value == "") {
    alert("Task cannot be blank!");
    return;
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";

    ul.appendChild(li);
    li.appendChild(span);

    input.value = "";
    saveToLocal();
  }
});

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveToLocal();
  }
});

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveToLocal();
  }
});

function saveToLocal() {
  localStorage.setItem("data", ul.innerHTML);
}

function getFromLocal() {
  ul.innerHTML = localStorage.getItem("data") || "";
}

getFromLocal();
