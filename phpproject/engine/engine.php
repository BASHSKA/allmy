<?php
/**
 * Created by PhpStorm.
 * User: bashska
 * Date: 20.08.18
 * Time: 19:26
 */

/**
 *
 * @class EcngineClass = main class for work
 *
 **/

include '/var/www/phpproject/engine/variables.php';

class EngineClass
{
    /**
     *
     * @function initTpl() = returns templates directory;
     *
     * @function initPage($object) = returns page for render WHERE $object = page name;
     *
     * @function renderPage() = returns rendered page;
     **/

    public static function initTpl()
    {
        return array_slice(scandir('/var/www/phpproject/templates/'), 2);
    }

    public static function initPage($object)
    {
        return file_get_contents('/var/www/phpproject/pages/' . $object, true);
    }


    public static function renderPage($tpl, $object)
    {

        $search = null;
        $file = null;

        foreach ($tpl as $value) {

            $file = file_get_contents('/var/www/phpproject/templates/' . $value);
            $search = '{{' . substr($value, 0, -4) . '}}';
            $object = str_replace($search, $file, $object);

        }

        return $object;

    }


}

/**
 *
 * @function render($object) = returns rendered page;
 * This function need for init in *.php files
 *
 **/


function render($object, $vars)
{

    $subject = new EngineClass();

    $tpl = $subject::initTpl();

    $page = $subject::initPage($object);

    $renderPage = $subject::renderPage($tpl, $page);

        foreach ($vars as $key => $value) {
            $renderPage = str_replace($key, $value, $renderPage);
        }

    return $renderPage;

}
