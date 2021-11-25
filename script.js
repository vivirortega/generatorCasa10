let button = document.getElementById("button");
let output = document.getElementById("output");

let quotes =
[  
    '"Taxado" - Seiti',
    '"Sentimentos de isolação e os perigos de um indivíduo que tem o entendimento da realidade meio errado" - Victor',
    '"Definitivamente uma das coisas que existem" - Vivi',
    '"Só fazem malvadezas comigo" - Qualquer infp do grupo pode ter dito essa',
    '"Vou propor uma batalha de rap contra o bolsonaro" - Vidro',
    '"Tem muito que vocês não sabem sobre meu passado sombrio como por ex que estou pagando o karma até hoje das vezes em que eu dava água com vinagre folha elástico e terra pras crianças da rua tomar quando eu estava brincando de ana maria braga" - Vivi',
    '"Épico véi" - Duda',
    '"Eu sou do rock" - Lolo',
    '"Jamais visto na humanidade humana" - Akira',
    '"Enfim a hipotenusa" - Akira',
    '"Victor, faça alguma coisa" - Vivi',
    '"Não vou entender nada mas tô atenta" - Ayu',
    '"Gente alguém pode me transferir 12 reais pra eu comprar paiero é urgente" - Duda',
    '"ROCK!!!" - Lolo',
    


];


//ao clicar no botão, retorna uma função que randomizando as quotes

button.addEventListener('click', function (){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        output.innerHTML = randomQuote; 

})

