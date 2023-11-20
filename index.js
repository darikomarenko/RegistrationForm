const form = document.forms.registrationForm;
const name = form.elements.name;
const email = form.elements.email;
const age = form.elements.age;
const gender = form.elements.select;
const profession = form.elements.profession;
const password = form.elements.password;
const password2 = form.elements.password2;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  clearErrors();
  checkAll();
  checkCheckboxValidity();
  showData();
  //form.reset();
});

function checkValidity(input) {
  let validity = input.validity;
  let errors = [];

  if (validity.patternMismatch) {
    input.nextElementSibling.textContent = input.validationMessage;
  }

  if (validity.rangeOverflow) {
    input.nextElementSibling.textContent = input.validationMessage;
  }

  if (validity.rangeUnderflow) {
    input.nextElementSibling.textContent = input.validationMessage;
  }

  if (validity.tooLong) {
    input.nextElementSibling.textContent = input.validationMessage;
  }
  if (validity.valueMissing) {
    input.nextElementSibling.textContent = input.validationMessage;
  }
  return errors;
}

function showData(errors) {
  if (errors === "") {
    console.log(input.value);
    return false;
  }
}

function checkCheckboxValidity() {
  let checkbox = document.getElementById("agree");
  if (!checkbox.checked) {
    checkbox.nextElementSibling.textContent = checkbox.validationMessage;
  }
}

//Проверка для всех полей
function checkAll() {
  //Получаем все инпуты
  let inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    let errors = checkValidity(input) || [];
    if (errors) {
      input.classList.add("error");
      input.insertAdjacentText("afterend", errors.join("\n"));
    }
  }
}

function clearErrors() {
  // Очищаем сообщения об ошибках
  let errorMessages = document.getElementsByClassName("error");
  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].innerHTML = "";
  }

  // Удаляем классы ошибок у полей и checkbox
  let errorFields = document.getElementsByClassName("error");
  for (let i = 0; i < errorFields.length; i++) {
    errorFields[i].classList.remove("error");
  }

  let errorCheckbox = document.getElementsByClassName("checkbox-error");
  for (let i = 0; i < errorCheckbox.length; i++) {
    errorCheckbox[i].classList.remove("checkbox-error");
  }
}
