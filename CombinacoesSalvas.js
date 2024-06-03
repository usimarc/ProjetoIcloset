async function main() {
  const userEmail = localStorage.getItem('email');
  const savedImageUrls = await buscarCombinacoes();

  if (!savedImageUrls) {
    console.error("Não foi possível obter as URLs das imagens.");
    return;
  }

  console.log(userEmail);
  const camisas = [
    new Image(),
    new Image(),
    new Image()
  ];
  const calcas = [
    new Image(),
    new Image(),
    new Image()
  ];
  const tenis = [
    new Image(),
    new Image(),
    new Image()
  ];

  camisas[0].src = savedImageUrls.image1;
  camisas[1].src = savedImageUrls.image2;
  camisas[2].src = savedImageUrls.image3;

  calcas[0].src = savedImageUrls.image4;
  calcas[1].src = savedImageUrls.image5;
  calcas[2].src = savedImageUrls.image6;

  tenis[0].src = savedImageUrls.image7;
  tenis[1].src = savedImageUrls.image8;
  tenis[2].src = savedImageUrls.image9;

  const combinations = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        const combination = {
          camisa: camisas[i].src,
          calca: calcas[j].src,
          tenis: tenis[k].src
        };
        combinations.push(combination);
      }
    }
  }

  const linha1 = document.getElementById("linha1");
  const linha2 = document.getElementById("linha2");
  const linha3 = document.getElementById("linha3");

  for (let i = 0; i < 3; i++) {
    const divCombination = document.createElement("div");
    divCombination.classList.add("combination");

    const combination = combinations.slice(i * 9, (i + 1) * 9);

    for (const item of combination) {
      const divImage = document.createElement("div");
      divImage.classList.add("image-container");

      const imgCamisa = document.createElement("img");
      imgCamisa.src = item.camisa;
      imgCamisa.classList.add('tamanho');
      divImage.appendChild(imgCamisa);

      const imgCalca = document.createElement("img");
      imgCalca.src = item.calca;
      imgCalca.classList.add('tamanho');
      divImage.appendChild(imgCalca);

      const imgTenis = document.createElement("img");
      imgTenis.src = item.tenis;
      imgTenis.classList.add('tamanho');
      divImage.appendChild(imgTenis);

      divCombination.appendChild(divImage);
    }

    if (i === 0) {
      linha1.appendChild(divCombination);
    } else if (i === 1) {
      linha2.appendChild(divCombination);
    } else if (i === 2) {
      linha3.appendChild(divCombination);
    }
  }
}

async function buscarCombinacoes() {
  const userEmail = localStorage.getItem('email');
  console.log(`Fetching image URLs for user: ${userEmail}`); // Log the userEmail
  try {
    const response = await fetch(`https://icloset-api-production.up.railway.app/imagemUsuario/${userEmail}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('Combinações recuperadas com sucesso.');
      return await response.json();
    } else {
      console.log('Erro ao recuperar combinações.');
    }
  } catch (err) {
    console.error(err);
  }
}

// Chame a função principal
main();





/*const savedImageUrls = JSON.parse(localStorage.getItem('imageUrls'));
const imagem1 = savedImageUrls.image1;
const imagem2 = savedImageUrls.image2;
const imagem3 = savedImageUrls.image3;
const imagem4 = savedImageUrls.image4;
const imagem5 = savedImageUrls.image5;
const imagem6 = savedImageUrls.image6;
const imagem7 = savedImageUrls.image7;
const imagem8 = savedImageUrls.image8;
const imagem9 = savedImageUrls.image9;
console.log(imagem1);

var camisa = new Array();

camisa[0] = new Image();
camisa[0].src = imagem1;

camisa[1] = new Image();
camisa[1].src = imagem2;

camisa[2] = new Image();
camisa[2].src = imagem3;


var calca = new Array();

calca[0] = new Image();
calca[0].src = imagem4;

calca[1] = new Image();
calca[1].src = imagem5;

calca[2] = new Image();
calca[2].src = imagem6;

var tenis = new Array();

tenis[0] = new Image();
tenis[0].src = imagem7;

tenis[1] = new Image();
tenis[1].src = imagem8;

tenis[2] = new Image();
tenis[2].src = imagem9;

// sempre repetir as 9 camisas, 1 calça de cada x3, 3 repetição de tenis x3.

let contadorCamisa = 0;
let tipoCamisa = 0;

let contadorCalca = -1;

let contadorTenis = 0;
let auxiliar=-1;
let auxiliar2=0;

for(let i = 0; i<27; i++)
{

    if (tipoCamisa % 3 == 0)
    {
        if (i == 9 || i == 18)
        contadorCamisa++;
        document.write("<br>");
    }

    let img = document.createElement("img");
    img.src=camisa[contadorCamisa].src;
    document.body.appendChild(img);

    
    contadorCalca++;

    if (contadorCalca % 3 == 0)
    {
        contadorCalca = 0;
    }
    
    let img2 = document.createElement("img");
    img2.src=calca[contadorCalca].src;
    document.body.appendChild(img2);
    
    
    if (auxiliar == 2)
    {
        auxiliar=-1;
        contadorTenis++;
    }
    auxiliar++;
    
    if (contadorTenis == 3){
        contadorTenis = 0;
    }

    
    let img3= document.createElement("img");
    img3.src=tenis[contadorTenis].src;
    document.body.appendChild(img3);

 
    
}




for(let cas = 0; cas<3; cas++)
{
    for(let cal = 0; cal<3; cal++)
    {
        for(let ten = 0; ten<3; ten++)
        {

            let img = document.createElement("img");
            img.src=camisa[cas].src;
            document.body.appendChild(img);

            let img2 = document.createElement("img");
            img2.src=calca[cal].src;
            document.body.appendChild(img2);

            let img3= document.createElement("img");
            img3.src=tenis[ten].src;
            document.body.appendChild(img3);


        }
    }
}
*/



/*const savedImageUrls = JSON.parse(localStorage.getItem('imageUrls'));
const camisas = [
  new Image(),
  new Image(),
  new Image()
];
const calcas = [
  new Image(),
  new Image(),
  new Image()
];
const tenis = [
  new Image(),
  new Image(),
  new Image()
];


camisas[0].src = savedImageUrls.image1;
camisas[1].src = savedImageUrls.image2;
camisas[2].src = savedImageUrls.image3;

calcas[0].src = savedImageUrls.image4;
calcas[1].src = savedImageUrls.image5;
calcas[2].src = savedImageUrls.image6;

tenis[0].src = savedImageUrls.image7;
tenis[1].src = savedImageUrls.image8;
tenis[2].src = savedImageUrls.image9;


const combinations = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      const combination = {
        camisa: camisas[i].src,
        calca: calcas[j].src,
        tenis: tenis[k].src
      };
      combinations.push(combination);
    }
  }
}

const primeiraLinha=[];
primeiraLinha[0] = combinations[0]
primeiraLinha[1] = combinations[1]
primeiraLinha[2] = combinations[2]
primeiraLinha[3] = combinations[3]
primeiraLinha[4] = combinations[4]
primeiraLinha[5] = combinations[5]
primeiraLinha[6] = combinations[6]
primeiraLinha[7] = combinations[7]
primeiraLinha[8] = combinations[8]

const linha = document.getElementById("linha1");

for (const combination of primeiraLinha) {
  
  const imgCamisa = document.createElement("img");
  imgCamisa.src = combination.camisa;
  linha.appendChild(imgCamisa);
  imgCamisa.classList.add('tamanho');

  const imgCalca = document.createElement("img");
  imgCalca.src = combination.calca;
  linha.appendChild(imgCalca);
  imgCalca.classList.add('tamanho');

  const imgTenis = document.createElement("img");
  imgTenis.src = combination.tenis;
  linha.appendChild(imgTenis);
  imgTenis.classList.add('tamanho');
}

const segundaLinha=[];
segundaLinha[0] = combinations[9]
segundaLinha[1] = combinations[10]
segundaLinha[2] = combinations[11]
segundaLinha[3] = combinations[12]
segundaLinha[4] = combinations[13]
segundaLinha[5] = combinations[14]
segundaLinha[6] = combinations[15]
segundaLinha[7] = combinations[16]
segundaLinha[8] = combinations[17]

const linha2 = document.getElementById("linha2");

for (const combination of segundaLinha) {
  
  const imgCamisa = document.createElement("img");
  imgCamisa.src = combination.camisa;
  linha2.appendChild(imgCamisa);
  imgCamisa.classList.add('tamanho');

  const imgCalca = document.createElement("img");
  imgCalca.src = combination.calca;
  linha2.appendChild(imgCalca);
  imgCalca.classList.add('tamanho');

  const imgTenis = document.createElement("img");
  imgTenis.src = combination.tenis;
  linha2.appendChild(imgTenis);
  imgTenis.classList.add('tamanho');
}

const terceiraLinha=[];
terceiraLinha[0] = combinations[18]
terceiraLinha[1] = combinations[19]
terceiraLinha[2] = combinations[20]
terceiraLinha[3] = combinations[21]
terceiraLinha[4] = combinations[22]
terceiraLinha[5] = combinations[23]
terceiraLinha[6] = combinations[24]
terceiraLinha[7] = combinations[25]
terceiraLinha[8] = combinations[26]

const linha3 = document.getElementById("linha3");

for (const combination of terceiraLinha) {
  
  const imgCamisa = document.createElement("img");
  imgCamisa.src = combination.camisa;
  linha3.appendChild(imgCamisa);
  imgCamisa.classList.add('tamanho');

  const imgCalca = document.createElement("img");
  imgCalca.src = combination.calca;
  linha3.appendChild(imgCalca);
  imgCalca.classList.add('tamanho');

  const imgTenis = document.createElement("img");
  imgTenis.src = combination.tenis;
  linha3.appendChild(imgTenis);
  imgTenis.classList.add('tamanho');
}
*/