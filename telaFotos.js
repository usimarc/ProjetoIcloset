// Cria um objeto vazio para armazenar os endereços das imagens
const imageUrls = {};

function loadPreviewImage(input, preview, position) {
  const fotoAntesId = `fotoAntes${position.toString().padStart(2, '0')}`;
  input.addEventListener('change', (event) => {
    const imageLoading = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageLoading);
    
    reader.addEventListener('load', (event) => {
      
      const thisReader = event.target;
      const img = document.createElement('img');
      img.src = thisReader.result;
      img.className = 'tamanhoFoto';
      preview.innerHTML = '';
      preview.appendChild(img);

      // Remove a tag <img> com o id correspondente
      const fotoAntesElement = document.getElementById(fotoAntesId);
      if (fotoAntesElement) {
        fotoAntesElement.parentNode.removeChild(fotoAntesElement);
      }


      // Adiciona o endereço da imagem no objeto imageUrls
      imageUrls[`image${position}`] = thisReader.result;
      
      // Salva o objeto imageUrls no localStorage
      localStorage.setItem('imageUrls', JSON.stringify(imageUrls));

      const savedImageUrls = JSON.parse(localStorage.getItem('imageUrls'));
      console.log(savedImageUrls)

      // Cria uma variável para armazenar o conteúdo a ser exibido aqui quem fizer a próxima tela copia essas linhas e terá os arquivos para fazer as combinações
    let content = '';

    // Adiciona cada propriedade e seu valor à variável de conteúdo
    for (const key in savedImageUrls) {
    content += `${key}: ${savedImageUrls[key]}<br>`;
    }

    // // Adiciona o conteúdo ao <p> tag
    // const p = document.getElementById('exibeJson');
    // p.innerHTML = content;

      
      
    });
  });
}

for (let i = 1; i <= 9; i++) {
  const input = document.getElementById(`inputPicture0${i}`);
  const preview = document.getElementById(`span0${i}`);
  loadPreviewImage(input, preview, i);
  
  
} 

const button = document.getElementById("paiBotao");
console.log(button);
button.addEventListener('click', () => {
  window.location.href = 'Combinacoes.html';
})
