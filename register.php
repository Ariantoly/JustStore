<?php

$name = $_POST['name'];
$gender = $_POST['gender'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = $_POST['password'];

if($_FILES['filePP']['name'] != null){
    $ext = substr($_FILES['filePP']["name"], strrpos($_FILES['filePP']['name'], '.'));
    move_uploaded_file($_FILES['filePP']["tmp_name"], "profile_picture/".$email.$ext);

    $profile_picture = "profile_picture/".$email.$ext;
}
else{
    $profile_picture = "images/profile_picture.png";
}

$conn = mysqli_connect('localhost', 'root', '', 'juststore');

$query = "INSERT INTO user VALUES ('$email', '$password', 'Customer')";
$query1 = "INSERT INTO customer VALUES ('', '$name', '$gender', '$address', '$phone', '$email', '$profile_picture')";

mysqli_query($conn, $query);
mysqli_query($conn, $query1);

echo '<script type = "text/javascript" language = "javascript">
window.location.replace("login.html")
</script>';