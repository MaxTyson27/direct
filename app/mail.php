<?php

// $recepient = "ad.web.site@yandex.ru";
$recepient = "iosmax@vk.ru";
$siteName = "Директ.сайт";

$phone = trim($_POST["phone"]);
$name = trim($_POST["name"]);
$message = "Телефон: $phone" \n 
"Имя: $name";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>