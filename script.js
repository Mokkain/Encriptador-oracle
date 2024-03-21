const campo_encriptar = document.querySelector(".msj-encriptar");
const campo_encriptado = document.querySelector(".msj-encriptado");
const leyenda = document.querySelector(".leyenda-busqueda");

let matriz = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"], //indice 4
];

//Validación de botones

campo_encriptar.addEventListener("input", encriptarDatos);

function encriptarDatos(){
    if (campo_encriptar.value !== "") {
        document.querySelector(".btn-encriptar").removeAttribute('disabled');
        document.querySelector(".btn-desencriptar").removeAttribute('disabled');
    } else {
        document.querySelector(".btn-encriptar").setAttribute('disabled', 'true');
        document.querySelector(".btn-desencriptar").setAttribute('disabled', 'true');
    }
}

//Validación de caracteres especiales, mayusculas y acentos

campo_encriptar.addEventListener("input", comprobacion);

function comprobacion() {
     campo_encriptar.value = campo_encriptar.value.replace(/[^a-zA-Z\s]/g, "");
  }

//Método de Encriptar

function btnEncriptar(){
    leyenda.style.display="none";
    document.querySelector(".btn-copiar").removeAttribute('disabled');
    const msjEncriptado = encriptar(campo_encriptar.value);
    campo_encriptado.value = msjEncriptado;
    campo_encriptar.value = "";
}

function encriptar(mensajeEncriptado){
    for(let i=0; i<matriz.length; i++){
        mensajeEncriptado = mensajeEncriptado.toLowerCase();
        if(mensajeEncriptado.includes(matriz[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(
                matriz[i][0], 
                matriz[i][1]
            );
        }
    }
    return mensajeEncriptado;
}

//Método de Desencriptar

function btnDesencriptar(){
    leyenda.style.display="none";
    document.querySelector(".btn-copiar").removeAttribute('disabled');
    const msjDesencriptado = desencriptar(campo_encriptar.value);
    campo_encriptado.value = msjDesencriptado;
    campo_encriptar.value = "";
}

function desencriptar(mensajeDesencriptado){
    const nuevaMatriz = matriz.reverse()
    for(let i=0; i<nuevaMatriz.length; i++){
        mensajeDesencriptado = mensajeDesencriptado.toLowerCase(); 
        if(mensajeDesencriptado.includes(nuevaMatriz[i][1])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(
                nuevaMatriz[i][1], 
                nuevaMatriz[i][0]
            );
        }
    }
    return mensajeDesencriptado;
}

//Copiar

function msjCopiar(){
    navigator.clipboard.writeText(campo_encriptado.value);
    campo_encriptado.value = "";
    leyenda.style.display="block";
}