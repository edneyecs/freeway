//Código Ator

//ator
let xAtor = 100;
let yAtor = 366;
let meusPontos = 0;

let colisao = false;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown (UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown (DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 3;   
    }
  }
}

function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i++) {
      colisao = collideRectCircle(xCarros[i], yCarros[i],       comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
        somDaColisao.play();
        voltaAtorPosicaoInicial();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
      }
    }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 0, 0));
  text(meusPontos, width /5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}