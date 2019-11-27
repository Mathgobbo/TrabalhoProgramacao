<?php  
try {
  include('server.php');
  
  // $teste->b = 'Maluca 90';
  // $teste->a = 'Cidade';


  //  $arrayName = json_encode($teste);
  // echo $arrayName;
 


 
   
//    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

// if ($contentType === "application/json") {
//   //Receive the RAW post data.
//   $content = trim(file_get_contents("php://input"));

//   // $decoded = json_decode($content, true);

//   echo $content;
//   if(!is_array($decoded)) {
//     echo 'nnukas sei';
//   } else {
//     echo 'errado';
//   }
// }

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