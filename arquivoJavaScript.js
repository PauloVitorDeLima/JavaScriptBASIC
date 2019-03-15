
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

var antes = Date.now();
Troco();
var duracao = Date.now() - antes;
console.log("levou " + duracao + "ms");

//Troco do Mercado
function Troco(){



var valorProduto = 0.01;
var ValorPagado = 999999999999.99; 
var Dinheiro = [0.01, 0.05, 0.10, 0.25, 0.50, 1.0, 2.0, 5.0, 10.0, 20.0, 50.0, 100.0]
var QuantidadeDinheiro = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var ValorRetornado = ValorPagado - valorProduto;

console.log("O valor do Produto é "+valorProduto+" Reais");
console.log("O valor pago pelo cliente foi "+ValorPagado+" Reais");
console.log("Será retornado "+ValorRetornado+" Reais");

  while(ValorRetornado > 0.01){
    if(ValorRetornado >= 2){
      if(ValorRetornado >= 100){
      ValorRetornado -= 100;
      QuantidadeDinheiro[11]+= 1;

      }if(ValorRetornado >= 50 && ValorRetornado < 100){
        ValorRetornado -= 50;
        QuantidadeDinheiro[10]+= 1;
      }if(ValorRetornado >= 20 && ValorRetornado < 50){
        ValorRetornado -= 20;
        QuantidadeDinheiro[9]+= 1;
      }if(ValorRetornado >= 10 && ValorRetornado < 20){
        ValorRetornado -= 10;
        QuantidadeDinheiro[8]+= 1;

      }if(ValorRetornado >= 5 && ValorRetornado < 10){
        ValorRetornado -= 5;
        QuantidadeDinheiro[7]+= 1;

      }if(ValorRetornado >= 2 && ValorRetornado < 5){
        ValorRetornado -= 2;
        QuantidadeDinheiro[6]+= 1;
      }
    }else{
      if(ValorRetornado >= 1 && ValorRetornado < 2){
        ValorRetornado -= 1;
        QuantidadeDinheiro[5]+= 1;
      }if(ValorRetornado >= 0.50 && ValorRetornado < 1){
        ValorRetornado -= 0.50;
        QuantidadeDinheiro[4]+= 1;
      }if(ValorRetornado >= 0.25 && ValorRetornado < 0.50){
        ValorRetornado -= 0.25;
        QuantidadeDinheiro[3]+= 1;
      }if(ValorRetornado >= 0.10 && ValorRetornado < 0.25){
        ValorRetornado -= 0.10;
        QuantidadeDinheiro[2]+= 1;
      }if(ValorRetornado >= 0.05 && ValorRetornado < 0.10){
        ValorRetornado -= 0.05;
        QuantidadeDinheiro[1]+= 1;
      }if(ValorRetornado >= 0.01 && ValorRetornado < 0.05){
        ValorRetornado -= 0.01;
        QuantidadeDinheiro[0] += 1;
      }
    }
  }
  console.log("=========================================================");
  if(QuantidadeDinheiro[11] != 0){
    console.log("Dê "+QuantidadeDinheiro[11]+" notas de "+Dinheiro[11]+" Reais");
  }
  if(QuantidadeDinheiro[10] != 0){
    console.log("Dê "+QuantidadeDinheiro[10]+" notas de "+Dinheiro[10]+" Reais");

  }if(QuantidadeDinheiro[9] != 0){
    console.log("Dê "+QuantidadeDinheiro[9]+" notas de "+Dinheiro[9]+" Reais");

  }if(QuantidadeDinheiro[8] != 0){
    console.log("Dê "+QuantidadeDinheiro[8]+" notas de "+Dinheiro[8]+" Reais");

  }if(QuantidadeDinheiro[7] != 0){
    console.log("Dê "+QuantidadeDinheiro[7]+" notas de "+Dinheiro[7]+" Reais");

  }if(QuantidadeDinheiro[6] != 0){
    console.log("Dê "+QuantidadeDinheiro[6]+" notas de "+Dinheiro[6]+" Reais");

  }if(QuantidadeDinheiro[5] != 0){
    console.log("Dê "+QuantidadeDinheiro[5]+" notas de "+Dinheiro[5]+" Reais");

  }if(QuantidadeDinheiro[4] != 0){
    console.log("Dê "+QuantidadeDinheiro[4]+" notas de "+Dinheiro[4]+" Reais");

  }if(QuantidadeDinheiro[3] != 0){
    console.log("Dê "+QuantidadeDinheiro[3]+" notas de "+Dinheiro[3]+" Reais");

  }if(QuantidadeDinheiro[2] != 0){
    console.log("Dê "+QuantidadeDinheiro[2]+" notas de "+Dinheiro[2]+" Reais");

  }if(QuantidadeDinheiro[1] != 0){
    console.log("Dê "+QuantidadeDinheiro[1]+" notas de "+Dinheiro[1]+" Reais");

  }if(QuantidadeDinheiro[0] != 0){
    console.log("Dê "+QuantidadeDinheiro[0]+" notas de "+Dinheiro[0]+" Reais");

  }
}