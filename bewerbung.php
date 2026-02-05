<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  /* ANTI-SPAM: ako je honeypot popunjen – prekid */
  if (!empty($_POST["website"])) {
    exit;
  }

  $name     = strip_tags($_POST["name"]);
  $email    = strip_tags($_POST["email"]);
  $phone    = strip_tags($_POST["phone"]);
  $position = strip_tags($_POST["position"]);
  $message  = strip_tags($_POST["message"]);

  $to = "info@storn-gmbh.de";
  $subject = "Neue Bewerbung – STORN GmbH";

  $boundary = md5(time());
  $headers  = "From: Bewerbung <$email>\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"";

  $body  = "--$boundary\r\n";
  $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
  $body .= "Neue Online-Bewerbung:\n\n";
  $body .= "Name: $name\n";
  $body .= "E-Mail: $email\n";
  $body .= "Telefon: $phone\n";
  $body .= "Position: $position\n\n";
  $body .= "Nachricht:\n$message\n\n";

  if (!empty($_FILES["cv"]["tmp_name"])) {
    $file_tmp  = $_FILES["cv"]["tmp_name"];
    $file_name = $_FILES["cv"]["name"];
    $file_type = $_FILES["cv"]["type"];
    $file_data = chunk_split(base64_encode(file_get_contents($file_tmp)));

    $body .= "--$boundary\r\n";
    $body .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= $file_data . "\r\n";
  }

  $body .= "--$boundary--";

  if (mail($to, $subject, $body, $headers)) {
    header("Location: thank-you.html");
  } else {
    header("Location: karriere.html?error=1");
  }
}
?>
