
const prompt = require('prompt-sync');

let primeiroNumero = prompt ("Digite o primeiro número: ")
let operador = prompt (" Digite o operador: ")
let segundoNumero = prompt ("Digite o segundo número: ")


function calculadora (primeiroNumero, segundoNumero, operador){

    switch(operador){
   
       case "+":
         return (primeiroNumero + segundoNumero)
       
       case "-" :
          return (primeiroNumero - segundoNumero)
   
       case "*":
        return (primeiroNumero * segundoNumero)
    
       case "/" :
        return (primeiroNumero / segundoNumero)

       case "%" :
        return (primeiroNumero % segundoNumero)
       
       default: 
         console.log('Não reconhecido')
    
      }
   
    }
    
    let resultado = calculadora(primeiroNumero, segundoNumero, operador)
    console.log(`O resultado do calculo é ${resultado}`) 