<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tax List</title>
  </head>
  <main>
  <body>
        <?php
            $myfile = fopen("taxList.txt", "w") or die("Unable to open file!");

            $firstName = $_GET['firstName'];
            $lastName = $_GET['lastName'];
            $email = $_GET['email'];
            $phoneNumber = $_GET['phone'];

            fwrite($myfile, $firstName);
            fwrite($myfile, $lastName);
            fwrite($myfile, $email);
            fwrite($myfile, $phoneNumber);
            fclose($myfile);
        ?>

  </body>
  </main>
</html>