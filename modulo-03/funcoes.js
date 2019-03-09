var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');//cria o botao de link
        linkElement.setAttribute('href','#');//seta o a com o atributo href e com link #
        var posicao = todos.indexOf(todo);//variavel recebe a posicao da palavra do indice de leitura atual do array
        linkElement.setAttribute('onclick','deleteTodo(' + posicao + ')');//elemento link<a> recebe o atributo onclick e como parametro a funcao de delete da tarefa
        var linkText = document.createTextNode('Excluir');//texto interno do link

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
} 
renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();//salva os resultados no storage
}
buttonElement.onclick = addTodo;

function deleteTodo(posicao){
    todos.splice(posicao, 1);//pega o array e usa a posicao da variavel e deleta uma posicao(a posicao da variavel).
    renderTodos();
    saveToStorage();//salva os resultados no storage
}
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));//acessa o armazenamento local.entra com dados('nome qualquer como chave', VARIAVEL NATIVA TIPADA COMO TIPO JSON.funcao que converte array em json(array))
}