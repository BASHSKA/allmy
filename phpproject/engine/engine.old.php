<?php
/**
 * Created by PhpStorm.
 * User: bashska
 * Date: 22.08.18
 * Time: 13:52
 */


$dir = '/var/www/phpproject';

$maket = file($dir . '/pages/index.tpl');

$maketfile = file_get_contents($dir . '/pages/index.tpl', 2);

$shablon = array_slice(scandir($dir . '/templates'), 2);

function render($maket, $dir, $shablon) {
//
//    for ($i = 0; $i < count($maket); $i++) {
//        for ($j = 0; $j < count($shablon); $j++) {
//            if ($maket[$i] == '{{' . substr($shablon[$j], 0, -4) . '}}') {
//                $maket[$i] = file_get_contents($dir . '/templates/' . $shablon[$j], true);
//            };
//        };
//    };
//    return $maket;

    foreach ($maket as $value) {
        foreach ($shablon as $value2) {

            if (strval($value) == strval(('{{' . substr($value2, 0, -4) . '}}'))) {
                $value = file_get_contents($dir . '/templates/' . $value2, true);
            }
        }
    }
    return $maket;

}
//
//$a = file_get_contents($dir . '/templates/header.tpl', true);
//
//$test = file_get_contents($dir . '/pages/index.tpl', true);
//
//$content = null;
//
//$i = 0;
//
////$object = null;
//
//$tpl_array = array_slice(scandir($dir . '/templates'), 2);
//
//function render($tpl_array, $i, $dir, $content, $subject) {
//    for ($tpl_array[$i], $i = 0; $i < count($tpl_array); $i++) {
//        $object = substr($tpl_array[$i], 0 , -4);
//        $replace = file_get_contents($dir . '/templates/' . $tpl_array[$i], true);
//        $file = file_get_contents($dir . '/pages/' . $subject);
//        $content .= str_replace('{{' . $object . '}}', $replace, $file);
//    }
//    return $content;
//}