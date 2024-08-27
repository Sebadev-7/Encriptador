function soloMinusculas(texto) {
    return /^[a-z\s]+$/.test(texto);
}


function encriptar() {

   
    let textoIngresado = document.getElementById('texto__ingresado').value;

   
    if (textoIngresado === "") {
        document.getElementById('mensaje-adicional').style.display = 'block';
        return;
    }
 
         document.getElementById('btn-copiar').style.display = 'none';
         document.getElementById('btn-limpiar').style.display = 'none';
         
    document.getElementById('muneco').style.display = 'none';

    document.getElementById('mensaje-adicional').style.display = 'none';
    
    if (!soloMinusculas(textoIngresado)) {

        document.getElementById('mensaje-error').style.display = 'block';
        document.getElementById('mensaje-error').style.color = 'red';
        return; 
    }

    document.getElementById('mensaje-error').style.color = '#BDBDBD';

    let textoEncriptado = textoIngresado
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('texto__encriptado').value = textoEncriptado;

    document.getElementById('btn-copiar').style.display = 'block';
    document.getElementById('btn-limpiar').style.display = 'block';
}
function desencriptar() {
  
    let textoIngresado = document.getElementById('texto__ingresado').value;

    if (textoIngresado === "") {
        document.getElementById('mensaje-adicional').style.display = 'block';
        return;
    }

     document.getElementById('muneco').style.display = 'none';
     
    document.getElementById('mensaje-adicional').style.display = 'none';
 
    let textoDesencriptado = textoIngresado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('texto__encriptado').value = textoDesencriptado;

    document.getElementById('btn-copiar').style.display = 'block';
    document.getElementById('btn-limpiar').style.display = 'block';
}
function copiarResultado() {
    var copyText = document.getElementById("texto__encriptado");

    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copyText.value);
  
    alert("Texto copiado: " + copyText.value);
}

function limpiar() {
    document.getElementById('texto__ingresado').value = '';
    document.getElementById('texto__encriptado').value = '';
    document.getElementById('mensaje-error').style.color = "#BDBDBD";
    document.getElementById('mensaje-adicional').style.display = 'none';
    document.getElementById('muneco').style.display = 'block';
    document.getElementById('btn-copiar').style.display = 'none';
    document.getElementById('btn-limpiar').style.display = 'none';
    
}
