const areatexto = document.querySelector(".area_texto");
const mensaje = document.querySelector(".mensaje");

//boton encriptar  = boton turing
function botonTuring(){
    const textoEncriptado = encriptar(areatexto.value)
    mensaje.value = textoEncriptado
//limpiar campo
    areatexto.value = "",
//quitar imagen  
    mensaje.style.backgroundImage = "none"
}

//encriptado
function encriptar(stringEncriptada){
let turinCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

for(let i = 0; i < turinCodigo.length; i++){
    if(stringEncriptada.includes(turinCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(turinCodigo[i][0], turinCodigo[i][1])
    }

    }
    return stringEncriptada
}

//boton desencriptar = boton enigma
function enigma(){
    const textoEncriptado = desencriptar(areatexto.value)
    mensaje.value = textoEncriptado
    areatexto.value = "";
}

//desencriptado
function desencriptar(stringDesencriptada){
    let turinCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i = 0; i < turinCodigo.length; i++){
        if(stringDesencriptada.includes(turinCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(turinCodigo[i][1], turinCodigo[i][0])
        }
    
        }
        return stringDesencriptada
    }
    
    