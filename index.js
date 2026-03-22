const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Formatar JSON bonito
app.set('json spaces', 2);

// Rota GET inicial
app.get('/', (req, res) => {
    res.json({
        status: 'success',
        timestamp: new Date().toISOString()
    });
});

// Rota GET /info
app.get('/info', (req, res) => {
    res.json({
        nome: 'Minha API REST',
        versao: '1.0.0',
        autor: 'Vitoria Viviane Ramos da Silva',
        descricao: 'API de exemplo com Express',
        tecnologias: ['Node.js', 'Express', 'Nodemon']
    });
});

// POST /usuarios
app.post('/usuarios', (req, res) => {
    const dados = req.body;

    res.json({
        mensagem: 'Usuário criado com sucesso!',
        dados_recebidos: dados,
        timestamp: new Date().toISOString()
    });
});

// POST /login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            erro: 'Email e senha são obrigatórios'
        });
    }

    res.json({
        mensagem: 'Login realizado com sucesso!',
        usuario: email,
        token: '123456abc'
    });
});

// GET /api/me
app.get('/api/me', (req, res) => {
    res.json({
        nome: 'Vitoria Viviane Ramos da Silva',
        curso: 'Engenharia de Software',
        hobbies: ['programar', 'jogar', 'ler'],
        linguagens: ['JavaScript', 'Python']
    });
});

// GET /api/data
app.get('/api/data', (req, res) => {
    res.json({
        data: new Date().toISOString()
    });
});

// GET /api/random
app.get('/api/random', (req, res) => {
    res.json({
        numero: Math.floor(Math.random() * 100)
    });
});

// Iniciar servidor (SEMPRE por último)
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});