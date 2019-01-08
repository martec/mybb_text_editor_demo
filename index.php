<?php

require_once __DIR__ . '/vendor/autoload.php';

$config = new s9e\TextFormatter\Configurator();

$config->enableJavaScript();

$config->javascript->exports = ['parse'];

$config->rootRules->enableAutoLineBreaks();

$config->Autolink;
$config->HTMLEntities;
$config->FancyPants;

// see the following for supported sites: https://s9etextformatter.readthedocs.io/Plugins/MediaEmbed/Sites/
$config->MediaEmbed->add('facebook');
$config->MediaEmbed->add('gfycat');
$config->MediaEmbed->add('imgur');
$config->MediaEmbed->add('reddit');
$config->MediaEmbed->add('twitch');
$config->MediaEmbed->add('twitter');
$config->MediaEmbed->add('vimeo');
$config->MediaEmbed->add('youtube');

// see the following for built in BBCodes: https://s9etextformatter.readthedocs.io/Plugins/BBCodes/Add_from_the_repository/
$config->BBCodes->addFromRepository('*');
$config->BBCodes->addFromRepository('ALIGN');
$config->BBCodes->addFromRepository('B');
$config->BBCodes->addFromRepository('CODE');
$config->BBCodes->addFromRepository('COLOR');
$config->BBCodes->addFromRepository('EM');
$config->BBCodes->addFromRepository('FONT');
$config->BBCodes->addFromRepository('I');
$config->BBCodes->addFromRepository('IMG');
$config->BBCodes->addFromRepository('LIST');
$config->BBCodes->addFromRepository('QUOTE');
$config->BBCodes->addFromRepository('S');
$config->BBCodes->addFromRepository('SIZE');
$config->BBCodes->addFromRepository('U');
$config->BBCodes->addFromRepository('URL');

extract($config->finalize());

ob_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <title>MyBB Text Editor Demo</title>
    </head>
    <body>
        <h1>MyBB Text Editor Demo</h1>

        <p class="muted">This is a demo for what could potentially become the text editor in MyBB 1.9.0.</p>

        <div id="app"></div>

        <script><?php echo $js ?></script>
        <script src="public/app.bundle.js"></script>
    </body>
</html>