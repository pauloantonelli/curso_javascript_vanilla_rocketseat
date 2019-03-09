//metodo getElement
var entrada = document.getElementById('nome');
var entrada2 = document.getElementsByTagName('nome')[0];//o retorno é sempre um array
var entrada3 = document.getElementsByClassName('nome')[0];//o retorno é sempre um array
console.log(entrada);
console.log(entrada2);
console.log(entrada3);
//metodo querySelector
var entrada4 = document.querySelector('body div#app input[name=entradaNome]');
var entrada5 = document.querySelectorAll('input');
console.log(entrada4);
console.log(entrada5);

//evento html dentro do js
var inputElement = document.querySelector('input[name=eventohtml]');
var btnElement = document.querySelector('button.botao');
btnElement.onclick = function(){
    var text = inputElement.value;
    alert(text);
}