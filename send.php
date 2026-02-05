<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name    = strip_tags($_POST["name"]);
  $email   = strip_tags($_POST["email"]);
  $phone   = strip_tags($_POST["phone"]);
  $company = strip_tags($_POST["company"]);
  $message = strip_tags($_POST["message"]);

  $to = "info@storn-gmbh.de";
  $subject = "Neue Kontaktanfrage – STORN GmbH";

  $body = "Neue Anfrage über die Website:\n\n";
  $body .= "Name: $name\n";
  $body .= "E-Mail: $email\n";
  $body .= "Telefon: $phone\n";
  $body .= "Firma: $company\n\n";
  $body .= "Nachricht:\n$message\n";

  $headers = "From: Website STORN GmbH <$email>";

  if (mail($to, $subject, $body, $headers)) {
    header("Location: kontakt.html?success=1");
  } else {
    header("Location: kontakt.html?error=1");
  }
}
?>
