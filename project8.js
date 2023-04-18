var cartaAsahi = {
  nome: "Asahi",
  imagem:"https://i.pinimg.com/564x/88/21/a3/8821a36d95aabb2230b1353bfb7465b6.jpg",
    atributos: {
      ataque:9,
      recepcao:8,
      bloqueio:7,
      saque:10,
      levatamento:8
    }
};

var cartaNishinoya = {
  nome: "Nishinoya",
  imagem: "https://i.pinimg.com/564x/20/39/f7/2039f786885d77883c600417bc1d201e.jpg",
  atributos: {
    ataque:3,
    recepcao:10,
    bloqueio:0,
    saque:6,
    levatamento:8
  }
};

var cartaHinata = {
  nome: "Hinata",
  imagem:"https://i.pinimg.com/564x/da/ad/cc/daadccf24eab945e3fb1b7294c0271f5.jpg",
  atributos: {
    ataque:9,
    recepcao:6,
    bloqueio:7,
    saque:6,
    levatamento:6
  }
};

var cartaDaichi = {
  nome: "Daichi",
  imagem:"https://i.pinimg.com/564x/f0/8d/a2/f08da2a689081b71f30616ff200c9b84.jpg",
  atributos:{
    ataque:8,
    recepcao:10,
    bloqueio:7,
    saque:8,
    levatamento:8
  }
}

var cartaKageyama = {
  nome: "Kageyama",
  imagem: "https://i.pinimg.com/564x/60/ec/be/60ecbe74926cb6b06497cf6cfb75004d.jpg",
  atributos: {
    ataque:9,
    recepcao:7,
    bloqueio:9,
    saque:10,
    levatamento:10
  }
}

var cartaSugawara = {
  nome: "Sugawara",
  imagem:"https://i.pinimg.com/564x/58/b4/23/58b423d6afd2b81162ced1e27b6f56a0.jpg",
  atributos: {
    ataque:7,
    recepcao:9,
    bloqueio:8,
    saque:9,
    levatamento:9
  }
}

var cartaTsukishima = {
  nome:"Tsukishima",
  imagem:"https://i.pinimg.com/564x/c1/79/7a/c1797a4f3be574062b75704ee15c0725.jpg",
  atributos: {
    ataque:7,
    recepcao:7,
    bloqueio:10,
    saque:8,
    levatamento:5
  }
}

var cartaTanaka = {
  nome:"Tanaka",
  imagem:"https://i.pinimg.com/564x/e6/d6/86/e6d6866ee373fa50fdc650bc334b726f.jpg",
  atributos: {
    ataque:7,
    recepcao:9,
    bloqueio:8,
    saque:8,
    levatamento:6
  }
}

var cartaOikawa = {
  nome: "Oikawa",
  imagem:"https://i.pinimg.com/564x/1f/33/74/1f3374b346a712114982d36f1bf3820b.jpg",
  atributos: {
    ataque:7,
    recepcao:6,
    bloqueio:9,
    saque:10,
    levatamento:10
  }
}

var cartaAtsumu = {
  nome:"Atsumu",
  imagem:"https://i.pinimg.com/736x/6c/78/c7/6c78c75a746abb1c929cdaa4244791d9.jpg",
  atributos: {
    ataque:8,
    recepcao:10,
    bloqueio:8,
    saque:10,
    levatamento:10
  }
}

var cartaBokuto ={
  nome:"Bokuto",
  imagem:"https://i.pinimg.com/564x/67/bc/8d/67bc8d2f6b476f75102202e63c70842b.jpg",
  atributos: {
    ataque:10,
    recepcao:7,
    bloqueio:7,
    saque:9,
    levatamento:7
  }
}

var cartaUshijima ={
  nome:"Ushijima",
  imagem:"https://i.pinimg.com/564x/1d/b9/7f/1db97f8f6441d01565da2d4edd35585a.jpg",
  atributos: {
    ataque:10,
    recepcao:8,
    bloqueio:9,
    saque:10,
    levatamento:8
  }
}

var cartaOsamu ={
  nome:"Osamu",
  imagem:"https://i.pinimg.com/564x/9f/94/5e/9f945ebeebcaa4030443d9fb61bc9ab1.jpg",
  atributos: {
    ataque:10,
    recepcao:9,
    bloqueio:7,
    saque:9,
    levatamento:10
}
}

  var cartaMaquina;
  var cartaJogador;
  var cartas = [cartaAsahi, cartaNishinoya, cartaHinata, cartaDaichi, cartaKageyama, cartaSugawara, cartaTsukishima, cartaTanaka, cartaOikawa, cartaAtsumu, cartaBokuto, cartaUshijima, cartaOsamu];
  // 0          1           2
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 13);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 13);
    while (numeroCartaJogador == numeroCartaMaquina) {  
      numeroCartaJogador = parseInt(Math.random() * 13);
    }
    // o while serve pra fazer um loop até sortear duas cartas diferentes 
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    // quando tudo for execeutado então ele vai desabilitar o botão de sortear
    document.getElementById("btnJogar").disabled = false;
    // quando tudo for execeutado então ele vai habilitar o botão de jogar
    exibirCartaJogador();
    // ao final da função de sortear ele vai exibir a carta, por isso se "cita" a função de exibir
  }

  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Você perdeu!</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>A rodada empatou!</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
  }