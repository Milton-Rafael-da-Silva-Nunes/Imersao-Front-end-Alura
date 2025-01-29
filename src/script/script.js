function atualizarSaudacao() {
    let data = new Date();   
    let hora = String(data.getHours()).padStart(2, '0');
    let minutos = String(data.getMinutes()).padStart(2, '0');
    let horaAtual = `${hora}:${minutos}`;
    let saudacao = "";

    if(horaAtual >= "06:00" && horaAtual < "12:00") {
        saudacao = "Bom dia";
    } else if(horaAtual >= "12:00" && horaAtual < "18:00") {
        saudacao = "Boa tarde";
    } else if(horaAtual >= "18:00" && horaAtual <= "23:59") {
        saudacao = "Boa noite";
    } else {
        saudacao = "Boa madrugada";
    }

    console.log(`Hora do sistema: ${hora}:${minutos} - ${horaAtual}`);
    document.getElementById("saudacao").innerHTML = saudacao;
}

window.onload = atualizarSaudacao;