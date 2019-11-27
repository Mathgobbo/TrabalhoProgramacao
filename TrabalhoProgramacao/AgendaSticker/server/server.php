<?php
try {
    $conn = new PDO('mysql:host=localhost;dbname=agendasticker', 'root', '');
    if($conn){
    }
} catch (PDOException $e) {
    echo 'error:' . $e->getMessage();
}



?>