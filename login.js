const form =document.getElementById('form'); 
const email = document.getElementById('email');
const password = document.getElementById('password');
const botao = document.getElementById('botao');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

const BancoVeioDados = localStorage.getItem('BancoDados');
const bancoParaLogin = JSON.parse(BancoVeioDados);

botao.addEventListener('click', (e) => {
    e.preventDefault();
    for(i=0; i<bancoParaLogin.users.length; i+=1){
        if (email.value == bancoParaLogin.users[i].email && password.value == bancoParaLogin.users[i].senha){
            window.location.href = 'TelaFotos.html';
        };
    }
    
})






    

