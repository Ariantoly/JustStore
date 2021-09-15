<?php

$email = $_POST['email'];
$password = $_POST['password'];
$remember = $_POST['remember'];

if($remember){
    setcookie('email', $email, time() + 3600, '/');
    setcookie('password', $password, time() + 3600, '/');
    echo json_encode([$email, $password]);
}
