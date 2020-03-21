<?php

function deconnecter()
{
    session_destroy();
	header("Location: index.php");
}