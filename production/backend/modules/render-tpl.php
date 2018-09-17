<?php
/**
 *
 * @function - renderPage($page, $vars)
 *
 * This function returns rendered page, which you write full name of page
 * and use all $vars, you can change it // Check config.php
 * Function search all keys of $vars (array) in page and replace them with values
 *
 * Format for ($page) - || 'index.tpl' ||
 *
 * Example: <?php echo renderPage('index.tpl', $vars) ?>
 *
 **/

function renderPage($page, $vars)
{
    $tpls = array_slice(scandir(TPL_DIR), 2);
    $page = file_get_contents(PAGE_DIR . $page, true);

    $page = str_replace('$HEAD_CONTENT$', implode(' ', HEAD) , $page);

    foreach ($tpls as $value) {
        $file = file_get_contents(TPL_DIR . $value);
        $search = '{{' . substr($value, 0, -4) . '}}';
        $page = str_replace($search, $file, $page);
    }

    foreach ($vars as $key => $value) {
        if (is_array($value)) {
            $value = implode(" ", $value);
        }
        $page = str_replace($key, $value, $page);
    }

    return $page;
};
