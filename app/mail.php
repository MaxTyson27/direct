<?php

$recepient = "ad.web.site@yandex.ru";
$siteName = "Директ.сайт";

$phone = trim($_POST["phone"]);
$message = "Телефон: $phone";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>