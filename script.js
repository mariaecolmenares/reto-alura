
const inputTexto = document.querySelector(".input");
const mensaje = document.getElementById("text-info");


function botonEncriptar() {
    
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.innerHTML = textoEncriptado;
    document.querySelector(".text-info-secondary").style.display="none";
    document.querySelector(".image").style.display="none";
}

function encriptar(stringParaEncriptar) {
    let matrizEncriptar = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizEncriptar.length; i++) {
        if (stringParaEncriptar.includes(matrizEncriptar[i][0])) {
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizEncriptar[i][0], matrizEncriptar[i][1])
        }
    }
    return stringParaEncriptar;
}

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.innerHTML = textoDesencriptado;
    document.querySelector(".text-info-secondary").style.display="none";
    document.querySelector(".image").style.display="none";
}

function desencriptar(stringParaDesencriptar) {
    let matrizDesencriptar = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for (let i = 0; i < matrizDesencriptar.length; i++) {
        if (stringParaDesencriptar.includes(matrizDesencriptar[i][1])) {
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizDesencriptar[i][1], matrizDesencriptar[i][0])
        }
    }
    return stringParaDesencriptar;
}


