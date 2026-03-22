const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Formatar JSON bonito
app.set('json spaces', 2);

// Rota GET existente
app.get('/', (req, res) => {
    res.json({
        status: 'success',
        timestamp: new Date().toISOString()
    });
});

// Rota GET /info existente
app.get('/info', (req, res) => {
    res.json({
        nome: 'Minha API REST',
        versao: '1.0.0',
        autor: 'Seu Nome',
        descricao: 'API de exemplo com Express',
        tecnologias: ['Node.js', 'Express', 'Nodemon']
    });
});

// NOVA ROTA POST - Receber dados
app.post('/usuarios', (req, res) => {
    const dados = req.body;
    
    res.json({
        mensagem: 'Usuário criado com sucesso!',
        dados_recebidos: dados,
        timestamp: new Date().toISOString()
    });
});

// NOVA ROTA POST - Login exemplo
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
        token: '123456abc' // Token fictício
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});