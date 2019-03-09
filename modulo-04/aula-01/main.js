var conn = new XMLHttpRequest();

conn.open('GET', 'https://api.github.com/users/pauloantonelli');
conn.send(null);

conn.onreadystatechange = function(){
    if(conn.readyState === 4){
        console.log(JSON.parse(conn.responseText));
    }
}