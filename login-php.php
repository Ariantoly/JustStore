<?php

$email = $_POST['email'];
$password = $_POST['password'];

$conn = mysqli_connect('localhost', 'root', '', 'juststore');

$queryRole = mysqli_query($conn, "SELECT `Role` FROM user WHERE Email = '$email' AND `Password` = '$password'")->fetch_assoc();

if($queryRole != NULL){
    $data = file_get_contents('role.json');
    $json_data = json_decode($data, true);
    $json_data['email'] = $email;
    $json_data['password'] = $password;
    $json_data['role'] = $queryRole["Role"];
    file_put_contents('role.json', json_encode($json_data));
    
    $role = strtolower($queryRole["Role"]);
    $queryProfile = mysqli_query($conn, "SELECT * FROM $role WHERE Email = '$email'");
    if($queryProfile){
        $queryProfile = mysqli_fetch_all($queryProfile, MYSQLI_ASSOC);
        $data1 = file_get_contents('profile.json');
        $json_data = json_decode($data1, true);
        $json_data['name'] = $queryProfile[0]['Name'];
        $json_data['gender'] = $queryProfile[0]['Gender'];
        $json_data['address'] = $queryProfile[0]['Address'];
        $json_data['phone'] = $queryProfile[0]['Phone'];
        $json_data['profile_picture'] = $queryProfile[0]['Profile Picture'];
        file_put_contents('profile.json', json_encode($json_data));
    }
}

if($queryRole != NULL){
    echo json_encode([
        "success"
    ]);
}
else{
    echo json_encode([
        "fail"
    ]);
}