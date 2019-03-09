axios.get('https://api.github.com/users/pauloantonelli') 
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);//warn é o aviso em amarelo no console
})