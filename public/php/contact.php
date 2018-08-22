<?php

// ======= Benötigte Header setzen:

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Content-Type: application/json;charset=UTF-8');

// ======= Daten werden aus dem Header geholt:
$headers = apache_request_headers();

// ======= Daten werden aus dem Body geholt:
$data = array();
parse_str(json_decode(file_get_contents('php://input')), $data);

// ======= Konfiguration:
$mailSubject = '';
$mailText = '';
$mailSent1 = $mailSent2 = false;

foreach ($headers as $header => $value) {
    if ($header == "KindOfForm" && $value == "bugReport") {
        $mailTo = 'bugs@battleground-bulls.de';
        $mailFrom = '"Bug Reporting" <bugs@battleground-bulls.de>';
        $mailSubject = 'Melden eines Bugs';
        $mailSent1 = $mailSent2 = false;
    } else if($header == "KindOfForm" && $value == "contactForm") {
        $mailTo = 'contact@battleground-bulls.de';
        $mailFrom = '"Kontakt" <contact@battleground-bulls.de>';
    } else {
        $mailTo = 'anmeldung@battleground-bulls.de';
        $mailFrom = '"Rocket League Anmeldung" <anmeldung@battleground-bulls.de>';
        $mailSubject = 'Turnier-Anmeldung';
    }
}

// ======= Text der Mail aus den Formularfeldern erstellen:

if (isset($data) && count($data) > 0) {
   // alle Formularfelder der Reihe nach durchgehen:
   foreach($data as $name => $value) {
      // Wenn der Feldwert aus mehreren Werten besteht:
      // (z.B. <select multiple>)
      if (is_array($value)) {
          // "Feldname:" und Zeilenumbruch dem Mailtext hinzufügen
          $mailText .= $name . ":\n";
          // alle Werte des Feldes abarbeiten
          foreach ($value as $entry) {
             // Einrückungsleerzeichen, Wert und Zeilenumbruch
             // dem Mailtext hinzufügen
             $mailText .= "   " . $value . "\n";
          } // ENDE: foreach
      } // ENDE: if
      // Wenn der Feldwert ein einzelner Feldwert ist:
      else {
          // "Feldname:", Wert und Zeilenumbruch dem Mailtext hinzufügen
          $mailText .= $name . ": " . $value . "\n";
      } // ENDE: else
   } // ENDE: foreach


    // ======= Korrekturen vor dem Mailversand
    // Wenn PHP "Magic Quotes" vor Apostrophzeichen einfügt:
    if (get_magic_quotes_gpc()) {
        // eventuell eingefügte Backslashes entfernen
        $mailText = stripslashes($mailText);
    }

    // ======= Mailversand
    // Mail versenden und Versanderfolg merken
    $mailSent1 = @mail($mailTo, $mailSubject, $mailText, "From: ".$mailFrom);
} // if

// ======= Bestätigungsversand
// Wenn Mail von Benutzer übergeben wurde, dann schicke eine Bestätigungsmail

if ($data && $data['mail'])
{
    $mailTo = $data['mail'];
    $mailSubject = 'Bestätigung der Turnieranmeldung';
    $mailText  = "Vielen Dank für deine Anmeldung. \n\n";
    $mailText .= "Hiermit bestätigen wir eure Anmeldung! \n\n";
    $mailText .= "Du kannst die Teamübersicht und das Bracket unter folgenden Links sehen: \n";
    $mailText .= "Teamübersicht - https://goo.gl/vS1M3Q \n";
    $mailText .= "Bracket - https://goo.gl/F8zHDx \n\n";
    $mailText .= "Liebe Grüße \n";
    $mailText .= "Deine Bulls";
    $mailSent2 = @mail($mailTo, $mailSubject, $mailText, "From: ".$mailFrom);
}

$responseJson = array();

// Wenn der Mailversand und die Bestätigungsmail erfolgreich waren:
if ($mailSent1 == TRUE && $mailSent2 === TRUE) {
    $responseJson = array(
        'code' => 'mail-sent-with-confirmation',
        'message' => 'Successful registration and confirmation sent.',
        'status' => 'OK'
    );
}
// Wenn der Mailversand erfolgreich war:
else if ($mailSent1 == TRUE) {
    $responseJson = array(
        'code' => 'mail-sent',
        'message' => 'Successful registration.',
        'status' => 'OK'
    );
}
// Wenn die Mail nicht versendet werden konnte:
else {
    $responseJson = array(
        'code' => 'mail-not-sent',
        'message' => 'E-Mail not sent.',
        'status' => 'ERROR'
    );
}

echo json_encode($responseJson);