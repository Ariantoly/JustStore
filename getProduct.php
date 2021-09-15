<?php

$conn = mysqli_connect('localhost', 'root', '', 'juststore');

$query = mysqli_query($conn, "SELECT * FROM product");

if($query){
    $query1 = mysqli_fetch_all($query, MYSQLI_ASSOC);
    for($i = 0; $i < $query->num_rows; $i++){
        echo '<tr>';
        echo '<td>'.$query1[$i]['Name'].'</td>';
        echo '<td>Rp.'.$query1[$i]['Price'].'</td>';
        echo '<td>'.$query1[$i]['Stock'].'</td>';
        echo '<td><button class = "btn btn-primary"><i class = "fas fa-pen"></i></button>
            <button class = "btn btn-primary"><i class = "fas fa-trash-alt"></i></button>
            </td>';
        echo '</tr>';
    }
    // print_r($query1);
}


