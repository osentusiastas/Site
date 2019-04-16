<? php
//Email que vai receber o formulário de contato
$para = "os_entusiastas@hotmail.com";
$assunto = "Contato pelo Blog";
$nome = $_REQUEST['nome'];
$email = $_REQUEST['email'];

//Monta o email na variável $corpo
$corpo = "<strong>Cadastro pelo Blog:</strong><br><br>";
$corpo .= "<strong>Nome: </strong> $nome";
$corpo .= "<br><strong>Email: </strong> $email";

$header= "Content-Type: text/html; charset = utf-8\n";
$header.="From: $email Reply-to: $email\n";

//Envia o email
@mail ($para, $assunto, $corpo, $header);

//Redireciona para a página de obrigado
header("location:agradecimento_cadastro.html");

?>


