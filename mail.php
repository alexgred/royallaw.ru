<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $form = $_POST['form']; 
  $message_info = "Имя: " . $name;
  $message_info .= "\r\nНомер телефона: " . $phone;
  $message_info .= "\r\nПочта: " . $email;

  mail('alexgred.dev@gmail.com', 'Заявка на связь', $message_info, "From: Royal Law info <info@royallaw.ru>\r\n" . "X-Mailer: PHP/" . phpversion(), '-finfo@royallaw.ru');

echo print_r($form);
?>