<?php

try {
    include('server.php');
    $consulta = $conn->query("SELECT * from registro");
    $jsonao = array();

    while($linha = $consulta->fetch()){
        $array = array($linha['id'], $linha['titulo'], $linha['subtitulo'], $linha['descricao']);
        array_push($jsonao, $array);
    };
    
    echo json_encode($jsonao);

} catch (PDOException $erro) {
    echo "Erro: ".$erro->getMessage();
}




?>