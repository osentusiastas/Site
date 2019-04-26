//Inicializar Firebase
  var config = {
    apiKey: "AIzaSyChIGWV8Xvs8JFVPXAQVvhV0HfmbPT1utc",
    authDomain: "inovaskills-b7c14.firebaseapp.com",
    databaseURL: "https://inovaskills-b7c14.firebaseio.com",
    projectId: "inovaskills-b7c14",
    storageBucket: "inovaskills-b7c14.appspot.com",
    messagingSenderId: "954751581634"
  };
  firebase.initializeApp(config);

//Formulário de Contato Vídeo

// Referência ao banco de dados
var messagesRef2 = firebase.database().ref('messages2');
  
//Listener para o submit do formulário
document.getElementById('contactForm2').addEventListener('submit', submitForm2);

//Enviar formulário
function submitForm2(e){
	e.preventDefault();
				
	//Pegar valores
	var nome2 = getInputVal2('nome2');
	var email2 = getInputVal2('email2');
	var optradio2 = getInputVal2('optradio2');
	var segmento2 = getInputVal2('segmento2');
	var ipaddress2 = getInputVal2('ipaddress2');
	var comment = getInputVal2('comment');
	
	var compraInternet2 = 'Não';
	if(optradio2 == 'on'){
		compraInternet2 = 'Sim'
	}

	//Gravar Mensagens
	saveMessage2(nome2, email2, compraInternet2, segmento2, ipaddress2, comment);
	
	//Mostrar mensagem de confirmação de envio
document.querySelector('.alerta').style.display = 'block';

//Esconder a mensagem após 4 segundos
setTimeout(function(){
	document.querySelector('.alerta').style.display = 'none';
},3000);

//Limpar dados do formulário após o envio
document.getElementById('contactForm2').reset();

//Código para mostrar div oculta de conteúdo após submeter o formulário 
document.getElementById('divConteudoOculto').style.display ='block';
	document.getElementById('formularioVerMais').style.display ='none';
    return false;
}

//Função para pegar valores do Formulário
function getInputVal2(id){
	return document.getElementById(id).value;
}

//Gravar mensagens no Firebase
function saveMessage2(nome2, email2, optradio2, segmento2, ipaddress2, comment){
	var newMessagesRef2 = messagesRef2.push();
	newMessagesRef2.set({
		nome2: nome2,
		email2: email2,
		compraNaInternet2: optradio2,
		segmento2: segmento2,
		ipaddress2: ipaddress2,
		comment: comment
	});
}