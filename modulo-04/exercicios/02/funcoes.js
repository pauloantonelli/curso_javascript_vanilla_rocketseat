var minhaPromise = function () {
    var usuario = 'pauloantonelli';
    console.log(usuario);
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + usuario);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {//codigo 200 significa que a requisicao teve sucesso
                    resolve(JSON.parse(xhr.responseText));//resolve para sucesso, converte string json para uso do XMLHttpRequest
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

var verificacao = function () {
    minhaPromise()
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.warn(error);//warn é o aviso em amarelo no console
        });
}