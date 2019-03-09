//exercicio 01
var btn = document.querySelector('button[id=botaoCria]');
btn.onclick = function(){
    var quad = document.createElement('div');
    quad.setAttribute('id','exec-01');
    quad.style.width = '100px';
    quad.style.height = '100px';
    quad.style.backgroundColor = '#f00';
    var conteiner = document.querySelector('div[id=exec-01]');
    conteiner.appendChild(quad);
}

//exercicio 02
var quadrado = document.querySelector('div[id=exec-01]');
quadrado.onmouseover = function(){
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var newColor = getRandomColor(); // #E943F0
quadrado.style.backgroundColor = newColor;
console.log(newColor);
}

//exercicio 03-04
var nomes = ['Diego','Gabriel','Lucas','Paulo','Luciele'];
//montagem da <ul>
var lis = document.createElement('ul');
//montagem das <li> com valores iniciais
for(var i = 0; i < nomes.length; i++){
    var pessoas = document.createElement('li');
    pessoas.innerHTML = nomes[i];
    lis.appendChild(pessoas);
}
//montagem das <li> extras
function adicionar(){
    var individuo = document.querySelector('input[name=nome]').value;
    nomes.push(individuo);
    document.querySelector('input[name=nome]').value = "";
    pessoas = document.createElement('li');
    for(var i = 0; i < nomes.length; i++){
        if(i != ''){
        pessoas.innerHTML = nomes[i];
        lis.appendChild(pessoas);
        //console.log(lis);
        }else{
            continue;
        }
    }
    var container = document.querySelector('div[class=lista]');
    container.appendChild(lis);
}
adicionar();

//exercicio 05
var users = [
    {
      nome: 'Gabriela',
      idade: 18,
      sexo: 'F',
    },
    {
        nome: 'José',
        idade: 30,
        sexo: 'M',
    },
    {
      nome: 'Maria',
      idade: 27,
      sexo: 'F',
    },
    {
        nome: 'Diego',
        idade: 23,                  
        sexo: 'M',                  
    }                                      
  ];
//gera <ul> principal
var lis = document.createElement('ul');
//montagem das <li> com valores do objeto
for(var i = 0; i < users.length; i++){
    var pessoas = document.createElement('li');
    if(users[i].sexo == 'M'){
        var sexo = "homem";
    }else{
        var sexo = "mulher";
    }
    var texto = users[i].nome + " é " + sexo + " e possui " + users[i].idade + " anos.";
    pessoas.innerHTML = texto;
    lis.appendChild(pessoas);
}
    var container = document.querySelector('div[class=listaObjetos]');
    container.appendChild(lis);
//funcao de ordenacao por nome
function listNome(){
    var lis = document.createElement('ul');
    users.sort(function(a,b){
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });
    for(var i = 0; i < users.length; i++){
        var pessoas = document.createElement('li');
        var texto = users[i].nome + ' é ' + sexo + ' e possui ' + users[i].idade + ' anos.';
        pessoas.innerHTML = texto;
        lis.appendChild(pessoas);   
    }
    var container = document.querySelector('div[class=listaObjetos]');
    container.appendChild(lis);
}
//funcao de ordenacao por idade
function listIdade(){
    var lis = document.createElement('ul');
    users.sort(function(a,b){
        return a.idade < b.idade ? -1 : a.idade > b.idade ? 1 : 0;
    });
    for(var i = 0; i < users.length; i++){
        var pessoas = document.createElement('li');
        var texto = users[i].nome + ' é ' + sexo + ' e possui ' + users[i].idade + ' anos.';
        pessoas.innerHTML = texto;
        lis.appendChild(pessoas);
    }
    var conteiner = document.querySelector('div[class=listaObjetos]');
    conteiner.appendChild(lis);
}
//funcao de exibicao so homens
function listMan(){
    var lis = document.createElement('ul');
    for(var i = 0; i < users.length; i++){
        if(users[i].sexo == 'M'){
            var pessoas = document.createElement('li');
            var texto = users[i].nome + ' é ' + sexo + ' e possui ' + users[i].idade + ' anos.';
            pessoas.innerHTML = texto;
            lis.appendChild(pessoas);
        }
        var conteiner = document.querySelector('div[class=listaObjetos]');
        conteiner.appendChild(lis);
    }
}
//funcao de exibicao so mulheres
function listWoman(){
    var lis = document.createElement('ul');
    for(var i = 0; i < users.length; i++){
        if(users[i].sexo == 'F'){
            var pessoas = document.createElement('li');
            var texto = users[i].nome + ' é ' + sexo + ' e possui ' + users[i].idade + ' anos.';
            pessoas.innerHTML = texto;
            lis.appendChild(pessoas);
        }
        var conteiner = document.querySelector('div[class=listaObjetos]');
        conteiner.appendChild(lis);
    }
}
//funcao de exibicao todos
function listAll(){
    var lis = document.createElement('ul');
    for(var i = 0; i < users.length; i++){
        var pessoas = document.createElement('li');
        var texto = users[i].nome + ' é ' + sexo + ' e possui ' + users[i].idade + ' anos.';
        pessoas.innerHTML = texto;
        lis.appendChild(pessoas);
    }
    var conteiner = document.querySelector('div[class=listaObjetos]');
    conteiner.appendChild(lis);
}