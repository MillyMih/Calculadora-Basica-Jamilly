
// This is a JavaScript file
var numero;
var resultado;
function insert(num){
  numero=document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;

}
function Limpar(){
  document.getElementById('resultado').innerHTML='';
}
function calcular(){
  
  resultado=eval(numero);
  documento.getElementById('resultado').innerHTML=resultado;

}
