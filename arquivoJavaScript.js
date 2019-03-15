

//Função
function retornaMaiorDeIdade(idade) {
 //Condicional
  if(idade >=18){
    return "Maior de idade";
  }else{
    return "Menor de Idade";
  }
}

idade = 17;
console.log(IdadeDeAlgo(idade));
//Função
function IdadeDeAlgo(idade){
  //Condicional
  switch (idade){
    case 18: 
    return "maior de Idade"
    case 17:
    return "Menor de idade"
    default:
    return "ERROR"
  }
} 
var verificar = (idade >= 18) ? "Maior de Idade" : "Menor de Idade";
//alert("the result is "+verificar);
//console.log("O resultado é "+verificar);

//Estruturas de repetição 
for(var i = 0; i <= 10; i++){
  console.log(i +" * "+ 2 + " = " + i * 2);
}
console.log("============================");
console.log("============================");
var i = 0;
while(i <= 5){
  console.log(i + " * "+ 3 + " = " + i * 3);
  i++;
}
function BotaoPressionado(){
  
  var nome = document.getElementById("Nome");
  alert("Enviado o nome "+nome);
}


//Recursividade Fatorial:
console.log("O FATORIAL DE 6 DE FORMA RECURSIVA É "+Fatorial(6));

function Fatorial(valor1){
  if(valor1 <= 0){
    return 1;
  }else{
    return valor1 = valor1 * Fatorial(valor1 - 1);
  }
}
