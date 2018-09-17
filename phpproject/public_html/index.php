<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/main.css">
    <title>Document</title>
</head>
<body>
<?php

include '/var/www/phpproject/engine/engine.php';

//$vars = [
//    '$USER_NAME$' => 'Anton',
//    '$USER_NIK$' => 'BASHSKA',
//];
//
//echo render('index.tpl', $vars);
//
//$mysqli = mysqli_connect('localhost', 'phpmyadmin', 'Gukiru55', 'phpproject', '3306');
//$name = 'Anton';
////$sqlQuery = mysqli_query($mysqli,'INSERT INTO users (userName, userNik, userPass) VALUE ("'. $name .'" , "124" ,"sfasg")');
//$sqlQuery = $mysqli->query('SELECT * FROM `users` WHERE userName = "'. $name .'" ');
//$row = mysqli_fetch_assoc($sqlQuery);
// if ($row[userName]!= $name ) {
//     echo 'SUCCES';
// } else {
//     echo 'DROP';
// }
//print_r($row);
//echo '<br>';
//$row = mysqli_fetch_all($sqlQuery);
//print_r($row);
$mysqli = mysqli_connect('localhost', 'phpmyadmin', 'Gukiru55', 'bash.inc');
$query = mysqli_query($mysqli, 'SELECT * FROM `content`');
$array = mysqli_fetch_all($query);
$news = $array;
//print_r($news);

$search = ['$idx$', '$short$', '$img$', '$full$'];


foreach ($news as $insertArray) {

        $content = file_get_contents('/var/www/phpproject/templates/RegisterForm.tpl', true);

        $content = str_replace($search, $insertArray, $content);

        $fullcontent .= $content;
}

echo $fullcontent;
?>

</body>
</html>
