$(function () {


});

var link = document.querySelector(".different__link"),
  list = document.querySelector(".different__list");
link.addEventListener("click", function (e) {
  e.preventDefault();
  list.classList.toggle("different__list--active");
  if (this.innerText == "Смотреть все") {
    this.innerText = "Скрыть";
  } else {
    this.innerText = "Смотреть все";
  }
});

$(document).ready(function () {
  $('form').submit(function () { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form.phone.value == '') {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: ("mail.php"),
      data: $(this).serialize()
    }).done(function () {
      // $('#form').trigger('reset');
      alert('Спасибо за заявку! Скоро мы с вами свяжемся.');
    });
    return false;
  });
});