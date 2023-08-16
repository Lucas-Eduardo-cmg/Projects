function insert(num){
    document.getElementById("resultado").innerHTML += num;
}
function clan(){
    document.getElementById("resultado").innerHTML = "";
}


function back(){
    const resp = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resp.substring(0 , resp.length -1);
}

function resposta(){
    let resp = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resp);
}

