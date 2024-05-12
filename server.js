const express = require('express');
const cors = require('cors');
const { createUser, findUser } = require('./database');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('.'));

app.post('/createUser', async (req, res) => {
    const user = req.body;
    try {
        await createUser(user);
        res.status(200).send('Usuário cadastrado com sucesso.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar usuário.');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await findUser(email, password);
        if (user) {
            res.status(200).send('Usuário autenticado com sucesso.');
        } else {
            res.status(401).send('Email ou senha incorretos.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao autenticar usuário.');
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});