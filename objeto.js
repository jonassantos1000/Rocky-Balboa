const filme = {
  nome: "Rocky Balboa",
  ano: 2006,
  descricao:
    "Rocky, aposentado há muito tempo, trabalha em um restaurante na Filadélfia e lamenta a perda de sua amada mulher, Adrian. Com saudade de seus dias de glória, ele pretende voltar ao ringue e aceita o desafio de lutar contra o atual campeão mundial dos pesos pesados, Mason 'the Line' Dixon.",
  personagens: [
    {
      ator: "Kevin King Templeton",
      nome: "Um amigo de Robert",
      img: "sem-imagem",
    },
    {
      ator: "Sylvester Stallone",
      nome: "Rocky Balboa",
      img: "099440.jpg-c_162_216_x-f_jpg-q_x-xxyxx.jpg",
    },
    {
      ator: "Burt Young",
      nome: "Paulie",
      img: "450447.jpg-c_162_216_x-f_jpg-q_x-xxyxx.jpg",
    },
    {
      ator: "Antonio Tarver",
      nome: "Manson 'the Line' Dixon",
      img: "20171179.jpg-c_162_216_x-f_jpg-q_x-xxyxx.jpg",
    },
    {
      ator: "Geraldine Hughes",
      nome: "Marie",
      img: "20171180.jpg-c_162_216_x-f_jpg-q_x-xxyxx.jpg",
    },
    {
      ator: "Milo Ventimiglia",
      nome: "Robert Jr",
      img: "239647.jpg-c_162_216_x-f_jpg-q_x-xxyxx.jpg",
    },
    {
      ator: "Tony Burton",
      nome: "Buke",
      img: "20171183.jpg-c_162_216_x-f_jpg-q_x-xxyxx.jpg",
    },
    {
      ator: "Talia Shire",
      nome: "Adrian",
      img: "409662.jpg-c_162_216_x-f_jpg-q_x-xxyxx.jpg",
    },
  ],
};

function createPagina(filme){

  filme.personagens.forEach(element => {

    let div = document.querySelector('#list-card');

    let divCard =  document.createElement('div');
    let img =  document.createElement('img');
    let pNome = document.createElement('p');
    let pAtor = document.createElement('p');

    divCard.classList.add('card');
    img.classList.add('img-card');
    pNome.classList.add('nome-card');

    if(element.img=="sem-imagem"){
      img.src="#"
    }else{
      img.src= `./img/`+element.img;
    }

    pNome.innerHTML= element.nome;
    pAtor.innerHTML= element.ator;

    divCard.append(img);
    divCard.append(pNome);
    divCard.append(pAtor);

    div.append(divCard);
  });


}


function start(filme){
  createPagina(filme);
}

start(filme);
