<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';
   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'phpmailer/language/');
   $mail->IsHTML(true);
   //От кого письмо
   $mail->setFrom('main@magicaltai.su', 'Magic of Altay');
   //Кому отправить
   $mail->addAddress('admin@magicaltai.su');
   //Тема письма
   $mail->Subject = 'Заявка на тур с сайта';
   
   //Тело письма
   $body = 'Встречайте супер письмо!     ';
   
   if(trim(!empty($_POST['name']))){
      $body.='Имя: '.$_POST['name'].'   ';
   }
   if(trim(!empty($_POST['email']))){
      $body.='E-mail: '.$_POST['email'].'   ';
   }
   if(trim(!empty($_POST['phone']))){
      $body.='Телефон: '.$_POST['phone'].'   ';
   }
   if(trim(!empty($_POST['message']))){
      $body.='Сообщение: '.$_POST['message'].'   ';
   }
   $mail->Body = $body;
   //Отправляем
   if (!$mail->send()) {
      $message = 'Ошибка';
   } else {
      $message = 'Данные отправлены!';
   }
   $response = ['message' => $message];
   // header('Content-type: application/json');
   echo json_encode($response);
?>
