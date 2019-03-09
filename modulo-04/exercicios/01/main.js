function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if(idade >= 18){
            resolve('Sucesso: Maior de Idade!');
        }else{
            reject('Falha: Menor de idade');
        }
    })
}
checaIdade(17)
.then(function (response) {
    console.log(response);
})
.catch(function (reject) {
    console.log(reject);
})
