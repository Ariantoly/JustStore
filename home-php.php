<?php

$conn = mysqli_connect('localhost', 'root', '', 'juststore');

$query = mysqli_query($conn, "SELECT * FROM category");

if($query){
    $query1 = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo '<nav class="navbar navbar-expand-md sticky-top navCategory">';
    echo '<div class="sticky-top" id="category">';
    for($i = 0; $i < $query->num_rows; $i++){
        echo '<button type="button" class="btn btn-outline-secondary btn-sm">';
        echo '<img src = "'.$query1[$i]["Icon"].'" style = "width: 15px"></img>';
        echo '<span>'.$query1[$i]["Name"].'</span>';
        echo '</button>';
    }
    echo '</div>';
    echo '</nav>';
}