// Esse código JavaScript solicita ao usuário que escreva algo em um prompt e, em seguida, calcula quantos caracteres ele digitou, subtraindo 280 do comprimento total do texto. Isso é geralmente usado em situações onde há um limite de caracteres, como em redes sociais ou formulários online.

// Solicita ao usuário que escreva algo e armazena o texto digitado na variável 'tweet'.
var tweet = prompt("Write below");

// Calcula o número de caracteres excedentes em relação a um limite de 280 caracteres.
var value = 280 - tweet.length 

// Exibe um alerta ao usuário mostrando o número de palavras digitadas e quantos caracteres ele tem restantes (ou excedentes).
alert("You have written " + tweet.length + " characters. You have " + value + " characters left.");




//Este código JavaScript solicita ao usuário que escreva um tweet em um prompt. Em seguida, ele extrai os primeiros 140 caracteres desse tweet e exibe tanto esses caracteres quanto o número total de caracteres na parte inicial do tweet. Isso é útil para ajudar os usuários a manter seus tweets dentro do limite de caracteres, comumente encontrado em redes sociais e formulários online.

var tweet = prompt("Write your tweet bellow");
var tweetsliced = tweet.slice(0,140);

alert(tweetsliced + " = " + tweetsliced.length);




//O código solicita ao usuário que insira seu nome por meio de uma caixa de diálogo, em seguida, extrai a primeira letra do nome e a armazena em maiúsculas, e os caracteres restantes do nome são convertidos em minúsculas. Por fim, exibe uma saudação personalizada utilizando o nome fornecido pelo usuário, com a primeira letra em maiúscula e o restante em minúscula.

var name = prompt("Whats your name?");
var nameup = name.slice(0,1);
var namelo = name.slice(1,name.lenght);

alert("Hello, " + nameup.toUpperCase() + namelo.toLowerCase() );



//este código recebe a entrada do usuário sobre a idade do seu cão, calcula a idade em anos humanos usando uma fórmula específica e, em seguida, exibe o resultado ao usuário por meio de uma mensagem de alerta.
var dogAge = prompt("Let´s find your dog age in human age!");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog age in human age is " + humanAge + "!");



//uma slice é uma operação que permite extrair uma parte de uma var, criando uma nova var contendo os elementos desejados.

//A sintaxe básica para uma slice em JavaScript é:

var.slice(início, fim)
// exemplo:
var nome = Elizabeth;
alert(var.slice(0,3));
// vai mostrar na tela escrito Eli



//Deixar tudo em caixa alta ou caixa baixa
var.toUpperCase(); //caixa alta
var.toLowerCase(); //caixa baixa



//Function se usa para armazenar um conjunto de ações

//Criando a function TIPO 1
function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp"); //console.log mostra a mensagem apenas para o desenvolvedor
    console.log("moveRight");
    console.log("moveRight");
    console.log("buyMilk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  //Chamando a function
  getMilk();



  //Criando a function TIPO 2
function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp"); 
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy" + bottles + "bottles of milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  function getMilk(bottles){
  var cost = bottles * 1.5;
}
//Chamando o function
getMilk(2); //número de garrafas a ser calculado

//Outro exemplo

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp"); //console.log mostra a mensagem apenas para o desenvolvedor
    console.log("moveRight");
    console.log("moveRight");

    var numberOfBottles = Math.floor(money / 1.50); //Math.flor() é usado para fornecer o número inteiro, sem o que vir depois da vírgula
    console.log("buy " + numberOfBottles + " bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

  //Chamando a function
  getMilk(5);




  //Criando a function TIPO 3
  function getMilk (money){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    var numberOfBottles = Math.floor(money / 1.50);
    console.log("buy " + numberOfBottles + " bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return money % 1.5; //output
  }

  //Chamando a function tipo 3
  var change = getMilk(4);
  console.log(change);
  //remanescente do troco (10)

//esse código é uma simples ferramenta de cálculo para estimar quanto tempo uma pessoa tem pela frente em dias, semanas e meses, baseada em sua idade atual e uma expectativa de vida predefinida de 90 anos.

  function lifeInWeeks(age) {
        
       var yearsRemaining = 90 - age;
        var days = yearsRemaining * 365;
        var weeks = yearsRemaining * 52;
        var months = yearsRemaining * 12;
        
        console.log("You have " + days + " days," + weeks + " weeks, and " + months + " months");
    }    
        lifeInWeeks(23);


        var change = getMilk(5); //cria uma nova variável de troco com base no valor do troco
  return money % 1.5; //remanescente do troco


  //Calculadora de bmi
  function bmiCalculator(weight, height){

    var bmi = weight / (height * height); 

    return Math.round(bmi);//arrendodar
}

bmiCalculator(65, 1.80);


//Elevar ao quadrado
Math.pow(base, exponent);

//Criar números aleatórios de 0 a 0.9999999999999999
Math.random();


//Para escolher um número aleatório de 1 a 6
var n = Math.random();
n = n * 6; //range
n = Math.floor(n) + 1; //adicionando mais um, faz com que comece a partir de 1 (ao invés de 0) e que seja possível resultar no número máximo
console.log(n);


//IF E ELSE
let num=5

if(num > 10){
  console.log("Numeral maior que 10")
}else if (num > 5){
  console.log("Numeral está entre 6 e 10")
}else{
  console.log("Numeral menor ou igual a 5")
}
console.log("Fim do programa")

//IF E ELSE COM &&
let energia = 100
let clima = "sol"

if(energia > 70 && clima === "sol"){
  console.log("Vou a praia")
}else{
  console.log("Vou ao cinema")
}

console.log("Fim do programa")


//Love Calculator
if (loveResult >= 70) {
  document.getElementById('loveResult').innerText = "A porcentagem de amor entre " + name1 + " e " + name2 + " é: " + loveResult + "%. " + "Your love is huge";
} else if (loveResult >= 30) {
  document.getElementById('loveResult').innerText = "A porcentagem de amor entre " + name1 + " e " + name2 + " é: " + loveResult + "%. " + "Your love is normal";
} else {
  document.getElementById('loveResult').innerText = "A porcentagem de amor entre " + name1 + " e " + name2 + " é: " + loveResult + "%. " + "Your love is low";
}



//Alinhamento de IF, um dentro do outro para calculo de ano bissexto (Leap Year)
function isLeap(year) {   
      
  if ( year % 4 === 0){
      if ( year % 100 === 0){
          if( year % 400 === 0){
              return "Leap year."
          } else{
              return "Not leap year."
          }
      } else{
          return "Leap year."
      }
  } else {
      return "Not leap year."
  }
}  
 


//Conjunto de elementos em uma array
var eggs = [0, 1, 2, 3, 4, 5]

var myEgg = eggs [1] //escolhe o elemento que está na posição 1, assim como mostrado acima, o 0 é o primeiro
eggs.lenght; //quantidade de itens na array
eggs.includes(4) //mostra se inclui o conteúdo dentro dos parênteses no array



//Lista VIP

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?")
if (guestList.includes(guestName)){
  alert("You are in")
}else {
  alert("Sorry, maybe next time")
}

//Você pode colocar a array sem valor definido e depois definir com push
var output = [];
output.push = [1,2,3,4]

output = [1,2,3,4]





//Este código incrementa uma variável a cada chamada da função fizzBuzz e armazena seu valor em uma matriz output, que é impressa no console a cada chamada.
var output = [];
var count = 1;

function fizzBuzz() {
output.push(count);
count++;

  console.log(output);
}

//Este código implementa a lógica do problema FizzBuzz, onde números divisíveis por 3 resultam em "Fizz", números divisíveis por 5 resultam em "Buzz", números divisíveis por ambos resultam em "FizzBuzz", e os outros números são adicionados à matriz output, que é impressa no console a cada chamada da função fizzBuzz.
var output = [];
var count = 1;

function fizzBuzz() {

if (count % 3 === 0 && count % 5 === 0){
  output.push("FizzBuzz")
}  
else if(count % 3 === 0){
  output.push("Fizz");
}
else if(count % 5 === 0)
  output.push("Buzz")
else{
  output.push(count);
}
count++;
console.log(output);
}

//Esse código conta até 10
for (var a = 1; a <= 10; a++) {
  console.log(a);
}


// Esse código escolhe uma pessoa aleatoriamente para pagar o almoço
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    
    return randomPerson + " is going to buy lunch today!";
    }



// WHILE
//O Loop While em JavaScript

//Em JavaScript, o loop while é uma estrutura de controle que permite executar um bloco de código repetidamente enquanto uma condição especificada for verdadeira. Ele é útil quando o número de iterações não é conhecido antecipadamente ou quando você precisa repetir uma tarefa até que uma condição específica seja atendida.

//A sintaxe básica do while é a seguinte:


while (condição) {
  // Bloco de código a ser executado enquanto a condição for verdadeira
}
//Aqui está como funciona:

//Verificação da Condição: Antes de cada iteração, o JavaScript avalia a condição especificada entre os parênteses. Se a condição for verdadeira, o bloco de código dentro do while é executado. Se for falsa, o loop é interrompido e a execução continua com o código após o bloco while.

//Execução do Bloco de Código: Se a condição for verdadeira, o bloco de código dentro do while é executado. Após a execução do bloco de código, o controle volta para a condição no início do loop. Este processo continua até que a condição se torne falsa.

//Evitar Loops Infinitos: É importante garantir que a condição do while eventualmente se torne falsa para evitar loops infinitos, o que pode travar o navegador ou o ambiente de execução JavaScript.

//Exemplo de Uso:

let contador = 0;

while (contador < 5) {
  console.log("Contador: " + contador);
  contador++;
}
//Neste exemplo, o código imprimirá "Contador: 0", "Contador: 1", "Contador: 2", "Contador: 3" e "Contador: 4". O loop será interrompido quando o contador atingir o valor 5, pois a condição contador < 5 se tornará falsa.

//O loop while é uma ferramenta poderosa em JavaScript para realizar tarefas repetitivas enquanto uma condição específica for atendida. Certifique-se sempre de definir a condição de forma que ela eventualmente se torne falsa para evitar loops infinitos.sdasdasd