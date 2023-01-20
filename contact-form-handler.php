<?php
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $visitor_email = $_POST['email'];
    $message = $_POST['subject'];

    $email_from = 'daniel.boyle328@gamil.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $first_name $last_name.\n".
                    "User Email: $visitor_email.\n".
                        "User Massage: $message.\n";

    $to = "daniel.boyle328@gamil.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html")

?>