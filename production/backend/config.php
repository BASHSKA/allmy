<?php

/**
 *
 *  START defines for render-tpl.php
 *
 **/

//START obligatorily

define('TPL_DIR', '/var/www/production/frontend/tpl/');
define('PAGE_DIR', '/var/www/production/frontend/fullpage/');

//END obligatorily

//optional, if you dot't wont use auto forming <head> content </head>, change @DEFINE('HEAD') on fullpage.tpl ($HEAD_CONTENT$)
define('HEAD', [
    '<meta charset="UTF-8">',
    '<meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">',
    '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
]);

$vars = [
    '$USER_NAME$' => 'Anton',
    '$USER_STATUS$' => 'NO',
];

/**
 *
 * END defines for render-tpl.php
 *
 **/

define('SQL_ARRAY', [
    'host' => 'localhost',
    'user' => 'phpmyadmin',
    'pswd' => 'Gukiru55',
    'db' => 'bash.inc'
]);