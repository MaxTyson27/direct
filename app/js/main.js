$(function () {

  $('.input-name').keypress(function (e) {
    if (e.keyCode == 32) return false;
    if (this.value.length == 1) {
      this.value = this.value.toUpperCase();
    }
  });

  $('.input-phone').inputmask({ "mask": "+7(999) 999-99-99" });


  $(".menu a, .footer__menu a, .instructions__link, .instructions__list-link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 75;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  // $('.footer-top__title').on('click', function () {
  //   $(this).next().slideToggle();
  //   $(this).toggleClass('active');
  // });

  $('.advance__link, .price__link, .services__link').on('click', function(e){
    e.preventDefault()
    $('.popup').addClass('popup--active')
    $('.popup-close').addClass('popup-close--active')
  })
  $('.popup-close').on('click', function(){
    $(this).removeClass('popup-close--active')
    $('.popup').removeClass('popup--active')
  })
  $('.popup__close').on('click', function(){
    $('.popup-close').removeClass('popup-close--active')
    $('.popup').removeClass('popup--active')
  })
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