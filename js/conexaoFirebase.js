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

//Código referente ao 1º Formulário, comum a todas as páginas
// Referência ao banco de dados da coleção messages 1
var messagesRef = firebase.database().ref('messages');
  
//Listener para o submit do formulário
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Função para pegar valores do Formulário
function getInputVal(id){
	return document.getElementById(id).value;
}


//Enviar formulário
function submitForm(e){
	e.preventDefault();
		
	//Pegar valores
	var nome = getInputVal('nome');
	var email = getInputVal('email');
	var optradio = getInputVal('optradio');
	var segmento = getInputVal('segmento');
	
	var compraInternet = 'Não';
	if(optradio == 'on'){
		compraInternet = 'Sim'
	}

	//Gravar Mensagens
	saveMessage(nome, email, compraInternet, segmento);
	
	//Mostrar mensagem de confirmação de envio
document.querySelector('.alerta').style.display = 'block';

//Esconder a mensagem após 4 segundos
setTimeout(function(){
	document.querySelector('.alerta').style.display = 'none';
},3000);

//Limpar dados do formulário após o envio
document.getElementById('contactForm').reset();
}

//Função para pegar valores do Formulário
function getInputVal(id){
	return document.getElementById(id).value;
}

//Gravar mensagens no Firebase
function saveMessage(nome, email, optradio, segmento){
	var newMessagesRef = messagesRef.push();
	newMessagesRef.set({
		nome: nome,
		email: email,
		compraNaInternet: optradio,
		segmento: segmento
	});


}


//Formulário de Contato Ver Mais
// Referência ao banco de dados da coleção messages 2
var messagesRef2 = firebase.database().ref('messages2');
  
//Listener para o submit do formulário
//document.getElementById('contactForm2').addEventListener('submit', submitForm2);

//Enviar formulário
function submitForm2(e){
	e.preventDefault();
		
	//Pegar valores
	var nome2 = getInputVal('nome2');
	var email2 = getInputVal('email2');
	
	//Gravar Mensagens
	saveMessage2(nome2, email2);
	
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
function getInputVal(id){
	return document.getElementById(id).value;
}

//Gravar mensagens no Firebase
function saveMessage2(nome2, email2){
	var newMessagesRef2 = messagesRef2.push();
	newMessagesRef2.set({
		nome2: nome2,
		email2: email2
	});
}


