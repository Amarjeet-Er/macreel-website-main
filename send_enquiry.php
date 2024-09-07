<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'macreelinfosoft@gmail.com';
        $mail->Password = 'thwo werv prdz xuhu';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Sender and recipient settings
        $mail->setFrom('amarjeeter1@gmail.com', 'Macreel Infosoft');
        $mail->addAddress('amarjeeter1@gmail.com', '');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'You have new Enquiry Macreel Infosoft';
        $mail->Body = '<table style="padding: 10px;">
    <tr >
        <th style="text-align: start;">Name:</th>
        <td>' . $name . '</td>
    </tr>
     
      <tr>
        <th style="text-align: start;">Email Id:</th>
        <td>' . $email . '</td>
    </tr>
      <tr>
        <th style="text-align: start;">Mobile:</th>
        <td>' . $phone . '</td>
    </tr>
       <tr>
        <th style="text-align: start;">Message:</th>
        <td>' . $message . '</td>
    </tr>
    
</table>';

        // Send email
        $mail->send();
        echo '';
    } catch (Exception $e) {
        echo "Oops! Something went wrong: {$mail->ErrorInfo}";
    }
}
?>