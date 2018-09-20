<?php
include 'cnx.php';
$sql = $cnx->prepare("select idDeal, dateDeal,idEtat from deal where idCreateur = ".$_GET['id']);
$sql= $cnx->prepare("select nomEtat from etat");
$sql->execute();
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo $ligne['idDeal']."<p>&nbsp;<p>".$ligne['dateDeal']."<p>&nbsp;<p>".$ligne['nomEtat'];
    echo "</br>";
}
?>