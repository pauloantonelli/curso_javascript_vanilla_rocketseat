function countdown(){
    var objData = new Date("Jan 01, 1970 00:00:00");
    var hora = objData.getHours();
    var min = objData.getMinutes();
    var seg = objData.getSeconds();
    hora = 00;
    min = 00;
    seg = 00;
    flag = false;
    setInterval(function(){
        seg += 1;
        if(seg > 60){
            seg = 0;
            min += 1;
        }
        if(min >= 60){
            min = 0;
            hora += 1;
        }
        if(hora >= 24){
            hora = 00;
            min = 00;
            seg = 00;
        }
        console.log("Contador: " + hora + ":" + min + ":" + seg);
    },1000);
}  
countdown();