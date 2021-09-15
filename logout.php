<?php

$data = file_get_contents('role.json');
$json_data = json_decode($data, true);
$json_data['email'] = "";
$json_data['password'] = "";
$json_data['role'] = "Guest";
file_put_contents('role.json', json_encode($json_data));

echo '<script type="text/javascript" language="javascript">
window.location.replace("home.html");
</script>';