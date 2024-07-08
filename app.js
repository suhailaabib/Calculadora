
const prompt = require('prompt-sync')();

let primeiroNumero = prompt ("Digite o primeiro número: ")
let operador = prompt (" Digite o operador: ")
let segundoNumero = prompt ("Digite o segundo número: ")

primeiroNumero = parseFloat(primeiroNumero)
segundoNumero = parseFloat (segundoNumero)

function calculadora (primeiroNumero, segundoNumero, operador){

    switch(operador){
   
       case "+":
         return primeiroNumero + segundoNumero
       
       case "-" :
          return primeiroNumero - segundoNumero
          
       case "*":
        return primeiroNumero * segundoNumero
    
       case "/" :
        return primeiroNumero / segundoNumero

       case "%" :
        return (primeiroNumero * segundoNumero)/100
       
       default: 
         console.log('Não reconhecido')
    
      }
   
    }
    
    if (isNaN(primeiroNumero) || isNaN(segundoNumero)){
      console.log('digite apenas numeros')
    }else{
      let resultado = calculadora(primeiroNumero, segundoNumero, operador)
    console.log(`O resultado do calculo é ${resultado}`)

    }
