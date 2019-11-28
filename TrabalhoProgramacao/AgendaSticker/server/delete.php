<?php 


try {
  try{
  $conn = new PDO('mysql:host=localhost;dbname=agendasticker', 'root', '');
    if($conn){
        echo "Tuasas";
    }
} catch (PDOException $e) {
    echo 'error:' . $e->getMessage();
}
 
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare('DELETE FROM registro WHERE id = :id');    
  $stmt->bindParam(':id', $_POST['id']); 
  $stmt->execute();
  
  echo 'Deu CERTO';
  
     
  
} catch(PDOException $e) {
  echo 'Error: ' . $e->getMessage();
}
?>