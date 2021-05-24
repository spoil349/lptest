<?php

// $x = $_POST['xhr'];
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$orderNumb = $_POST['order_number'];

$to = $email;
$subject = "тестовое задание, заказ забора $orderNumb";
$message = "$name, заказ $orderNumb сформирован. В ближайшее время наш специалист свяжется с вами по телефону $phone.";

mail($to, $subject, $message);

?>