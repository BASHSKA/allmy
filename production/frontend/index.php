<?php

require '/var/www/production/backend/engine.php';

//you can redefine $vars here, if you wants use unique variables for this page ( only past require )

//example
$vars['$USER_NAME$'] = 'Vlad';

echo renderPage('index.tpl', $vars);

