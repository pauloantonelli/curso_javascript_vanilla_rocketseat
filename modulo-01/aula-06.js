function trocaSexo(a){
    if (a === 'M'){
        return 'Masculino';
    }else if(a === 'F'){
        return 'Feminino';
    }else{
        return 'Outro';
    }
}
function caseSexo(a){
    switch(a){
        case 'M' :
        return 'Masculino';
        case 'F' : 
        return 'Feminino';
        default : 
        return 'Outro';
    }
}

var resultado = caseSexo('F');
console.log(resultado);