//criando elemento html com js
var linkElement = document.createElement('a');//armazenamos na variavel um metodo de criacao de elemento com o tipo 'a'(link)
linkElement.setAttribute('href','http://zoominit.com.br');//usamos a instancia da variavel para acrecentar nela o atributo href, com o link desejado
linkElement.setAttribute('title','Site da zoom in it design');

var textElement = document.createTextNode('Acessar o site da zoom in it');//armazenamos na variavel uma string a ser exibida com o metodo de criacao de string
linkElement.appendChild(textElement);//usamos a instancia do elemento de link criado pelo js e juntamos a string criada com o metodo acrescentarFilho e com isso o elemento passa a ser pai da string

var containerElement = document.querySelector('#app');//armazenamos em uma variavel o elemento com a id app
containerElement.appendChild(linkElement);//usamos a instancia do elemento com id app para receber a instancia com o link como filho e assim aparecer no mesmo local da div com a id app

//removendo elemento criado html com js
containerElement.removeChild(linkElement);
