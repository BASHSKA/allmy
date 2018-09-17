<?php
/**
 * Created by PhpStorm.
 * User: bashska
 * Date: 08.09.18
 * Time: 13:53
 */

function sqlQuery ($query) {

    $mySqlConnect = mysqli_connect(SQL_ARRAY['host'], SQL_ARRAY['user'], SQL_ARRAY['pswd'], SQL_ARRAY['db']);

    mysqli_query($mySqlConnect, 'SET NAMES "utf8"');

    $result = mysqli_query($mySqlConnect, $query);

    mysqli_close($mySqlConnect);

    return $result;

};