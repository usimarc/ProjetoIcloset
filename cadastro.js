/*selecionando os componentes*/
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const botao = document.getElementById('botao');

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
botao.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Evento de clique disparado');

    if(username.value && email.value && password.value){
        console.log('Todos os campos estão preenchidos');
        const user = {
            "id": Date.now(),
            "name": username.value,
            "email": email.value,
            "password": password.value,
        }
        console.log('Objeto user criado:', user);
        try {
            const response = await fetch('https://icloset-api-production.up.railway.app/usuarios/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                console.log('Usuário cadastrado com sucesso.')
                alert('Usuário cadastrado com sucesso.')
                window.location.href = 'index.html';
            } else {
                console.log('Erro ao cadastrar usuário.');
            }
        } catch (err) {
            console.error(err);
        }
    } else {
        console.log('Um ou mais campos estão vazios');
    }
});