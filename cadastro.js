/*selecionando os componentes*/
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const botao = document.getElementById('botao');

/* Criando banco de dados inicial*/
const BancoDados =
{
users: [
{
    "id":1, 
    "nome": "adm",
    "email": "adm@adm.com",
    "senha": "123",
},

{
    "id":2, 
    "nome": "adm2",
    "email": "adm2@adm.com",
    "senha": "123",

}
]
}

// atualizando banco de dados com local storage caso haja dados no localStorege
const BancoVeioDados = localStorage.getItem('BancoDados');
const bancoNovo = JSON.parse(BancoVeioDados);
if (bancoNovo){
    Object.assign(BancoDados, bancoNovo); 

}

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'Insira nome de usuário');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Insira seu email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Insira um endereço de email válido');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Insira a senha');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Senha deve ter no mínimo 8 caracteres.')
    } else {
        setSuccess(password);
    }

    };

/*Cadastrando usuário*/
botao.addEventListener('click', () => {
    
    console.log('Cliquei');

    if(username.value && email.value && password.value){
    BancoDados.users[BancoDados.users.length] =
    
        {
            "id":BancoDados.users.length + 1,
            "nome": username.value,
            "email": email.value,
            "senha": password.value,
        }
        alert('Usuário cadastrado com sucesso.')
        window.location.href = 'index.html';
    };
    //salva os dados no LocalStorage
    localStorage.setItem('BancoDados', JSON.stringify (BancoDados));
} ) ;