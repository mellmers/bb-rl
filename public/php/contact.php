<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
// ======= Benötigte Header setzen:

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Content-Type: application/json;charset=UTF-8');

// ======= Daten werden aus dem Body geholt:
$data = array();
parse_str(json_decode(file_get_contents('php://input')), $data);

// ======= Konfiguration:
$mailTo = 'support@battlebulls.de';
$mailFrom = '"BattleBulls" <support@battlebulls.de>';
$mailSubject = '';
$mailText = '';
$headers  = 'From: '.$mailFrom."\r\n";
$headers .= 'MIME-Version: 1.0'."\r\n";
$headers .= 'Content-Type: text/html; charset=UTF-8'."\r\n";
$mailSent1 = $mailSent2 = false;

// ======= Text der Mail aus den Formularfeldern erstellen:
if (isset($data) && count($data) > 0) {
      $mailSubject = $data['subject'];
      $mailText = $data['message'];

    // ======= Korrekturen vor dem Mailversand
    // Wenn PHP "Magic Quotes" vor Apostrophzeichen einfügt:
    if (get_magic_quotes_gpc()) {
        // eventuell eingefügte Backslashes entfernen
        $mailText = stripslashes($mailText);
    }

    // ======= Mailversand
    // Mail versenden und Versanderfolg merken
    $mailSent1 = mail($mailTo, $mailSubject, nl2br($mailText), $headers);
} // if

// ======= Bestätigungsversand
// Wenn Mail von Benutzer übergeben wurde, dann schicke eine Bestätigungsmail

if ($data && $data['mail'])
{
    $prevMailText = $mailText;
    $prevMailSubject = $mailSubject;
    $mailTo = $data['mail'];
    $mailSubject = 'Bestätigung der Kontaktaufnahme';
    $mailText  = "Vielen Dank für deine Nachricht. \n \n";
    $mailText .= "Hiermit bestätigen wir, dass deine Nachricht an uns versendet wurde! \n \n";
    $mailText .= "Liebe Grüße \n";
    $mailText .= "Deine Bulls";
    $mailText .= "\n\n\n================================================================================ \n\n\n";
    $mailText .= "Deine Nachricht:\n\n";
    $mailText .= "Betreff: ".$prevMailSubject."\n\n";
    $mailText .= $prevMailText;
    $mailSent2 = mail($mailTo, $mailSubject, nl2br($mailText), $headers);
}

$responseJson = array();
// Wenn der Mailversand und die Bestätigungsmail erfolgreich waren:
if ($mailSent1 == TRUE && $mailSent2 === TRUE) {
    $responseJson = array(
        'code' => 'mail-sent-with-confirmation',
        'message' => 'Successful confirmation sent.',
        'status' => 'OK'
    );
}
// Wenn der Mailversand erfolgreich war:
else if ($mailSent1 == TRUE) {
    $responseJson = array(
        'code' => 'mail-sent',
        'message' => 'Successful sent.',
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
