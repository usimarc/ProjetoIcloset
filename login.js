botao.addEventListener('click', async (e) => {
    e.preventDefault();
    const user = {
        email: email.value,
        password: password.value,
    };
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (response.ok) {
            console.log('Usuário autenticado com sucesso.')
            window.location.href = 'TelaFotos.html';
        } else {
            console.log('Email ou senha incorretos.');
        }
    } catch (err) {
        console.error(err);
    }
});