<?php
require_once('../config/config.php');
$vars=	[
			"title"=>SITE_TITLE." Главная страница - страница обо мне",
			"footer"=>date("Y")
		];

echo renderPage("index",$vars);


_log("Страница загружена",'messages');
_log($vars,'vars');

?>