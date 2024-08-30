var botao = document.getElementById('verificaButton');

botao.onclick = function(){

    var idade = document.getElementById('idadeInput').value;
    
    var resultado = document.getElementById('resultado');

 if(idade<=2005){
    resultado.textContent = "Maior de idade"

 }else{
    resultado.textContent = "Menor de idade"
 }
}