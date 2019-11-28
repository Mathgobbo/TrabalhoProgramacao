<?php  
try {
  include('server.php');

if(isset($_POST)){
  var_dump($_POST);
}else{
  echo 'nada';
}

$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   
$stmt = $conn->prepare('INSERT INTO registro (titulo,subtitulo,descricao) VALUES(:titulo,:subtitulo,:descricao)');
$stmt->execute(array(
  ':titulo' => $_POST['titulo'], ':subtitulo' => $_POST['subtitulo'], ':descricao' => $_POST['descricao']
));
 
} catch(PDOException $e) {
  echo 'Error: ' . $e->getMessage();
} 
   ?>