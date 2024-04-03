const textInput = document.querySelector("#entrada");
const outInput = document.querySelector("#saida");


function criptografar(){
    const texto = textInput.value;
    const cripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
  document.getElementById('resultado').innerHTML = '<textarea readonly id="entrada" style="width: 30vw; height: 20vh;">' + cripto + 
  '</textarea>' + '<button class="copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    const texto = textInput.value;
    const descripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById('resultado').innerHTML = '<textarea readonly id="saida" style="width: 30vw; height: 20vh;">' + descripto + 
    '</textarea>' + '<button class="copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    let textoCopiado = document.getElementById('entrada');
    textoCopiado.select();
    document.execCommand('copy');
}

