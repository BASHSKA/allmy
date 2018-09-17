<?php

$name = $_POST['name'];
$nik = $_POST['nik'];
$pass = $_POST['pass'];
$pass = md5(md5($pass));

echo $pass;

$mysqli = mysqli_connect('localhost', 'phpmyadmin', 'Gukiru55', 'phpproject', '3306');

$Query = $mysqli->query('SELECT * FROM `users` WHERE userName = "'. $name .'" ');

$row = mysqli_fetch_assoc($Query);

if ($row[userName]!= $name ) {
    $mysqli->query('INSERT INTO `users` (userName, userNik, userPass) VALUES ("'. $name .'", "'. $nik .'", "'. $pass .'")');
    echo 'Вы успешно зарегестрированы!';
} else {
    echo 'Пользователь с таким именем уже существует';
}
