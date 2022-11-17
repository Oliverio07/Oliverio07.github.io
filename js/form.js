document.getElementById("form").addEventListener("submit", (e) => {
  validateName();
  validateEmail();
  validateSubject();
  validateMessage();
  e.preventDefault();
  setTimeout(removeAnimations, "1000");
})

function validateName() {
  const name = document.getElementById("name");
  if(name.value.length < 3) {
    name.classList.add("animate__shakeX", "animate__animated");
  } else {
    name.classList.remove("animate__shakeX");
  }
}

function validateEmail() {
  const ele = document.getElementById("email");
  if(ele.value.length < 1) {
    ele.classList.add("animate__shakeX", "animate__animated");
  } else {
    ele.classList.remove("animate__shakeX", "animate__animated");
  }
}

function validateSubject() {
  const ele = document.getElementById("subject");
  if(ele.value.length < 3) {
    ele.classList.add("animate__shakeX", "animate__animated");
  } else {
    ele.classList.remove("animate__shakeX", "animate__animated");
  }
}

function validateMessage() {
  const ele = document.getElementById("message");
  if(ele.value.length < 3) {
    ele.classList.add("animate__shakeX", "animate__animated");
  } else {
    ele.classList.remove("animate__shakeX", "animate__animated");
  }
}

function removeAnimations() {
  document.querySelectorAll(".animate__shakeX")
    .forEach((ele) => {
    ele.classList.remove("animate__shakeX", "animate__animated");
  });
}