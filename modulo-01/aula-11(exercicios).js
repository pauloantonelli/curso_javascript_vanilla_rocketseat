//exercicio 01
var endereco = {
    rua : '"Rua dos pinheiros"',
    numero : 1293,
    bairro : 'Centro',
    cidade : 'São Paulo',
    uf : 'SP'
};
function infoUser(){
    console.log('O usuário mora em ' + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + endereco.rua + " com nº " + endereco.numero + ".");
}
infoUser();

//exerciocio 02
function pares(x, y){
    j = x
    while(j <= y){
        var res = j % 2;//mod == 0 par / mod == 1 impar
        var ok = (res == 0) ? console.log(j) : '';
        /*if(res == 0){
            console.log(j);
        }*/
        j++
    }
}
//pares(32,321);

//exercicio 03
function temHabilidade(skills){
    for(var i = 0; i < skills.length; i++){
        var res = skills.indexOf('Javascript',[i]);
        if(res != -1){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}
var skills = ['Javascript', 'ReactJS', 'React Native'];
temHabilidade(skills);

//exercicio 04
function experiencia(anos){
    switch(anos){
        case 0 :
        case 1 : 
        return 'Iniciante';
        case 1 :
        case 2 :
        case 3 :
        return 'Intermediario';
        case 3 :
        case 4 :
        case 5 :
        case 6 :
        return 'Avanço';
        default :
        return 'Jedi Master';
    }
}
var anosEstudo = 7;
var ok = experiencia(anosEstudo);
console.log(ok);

//exercicio 05
var usuarios = [
    {
        nome : 'Diego',
        habilidades : ['Javascript', 'ReactJS', 'Redux']
    },
    {
        nome : 'Gabriel',
        habilidades : ['VueJS', 'Ruby on Rails', 'Elixir']
    }
];
function distincao(usuarios){
    for(var valor of usuarios){
        //declaracao
        console.log("O " + valor.nome + " possui as habilidades: " + valor.habilidades.join(", "));
    }
}
distincao(usuarios);

//exercicio 06
function countdown(minutos){
    var objData = new Date("Jan 01, 1970 00:00:00");
    var hora = objData.getHours();
    var min = objData.getMinutes();
    var seg = objData.getSeconds();
    hora = 00;
    min = minutos;
    seg = 60;
    if(min >= 60){
        hora = 1;
        min = min - 60;
    }
    setInterval(function(){
        seg -= 1;
        if(seg <= 00){
            seg = 60;
            min -= 1;
        }
        if(min <= 00){
            min = 60;
            hora -= 1;
        }
        if(hora <= 00){
            hora = 24;
            min = 59;
            seg = 60;
        }
        console.log("Contador: " + hora + ":" + min + ":" + seg);
    },1000);
}  
countdown(70);

