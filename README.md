# 📌 API REST - Node.js (Express)

## 📖 Descrição

API REST desenvolvida em Node.js utilizando Express, com endpoints GET e POST para simulação de cadastro e autenticação de usuários.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* Nodemon
* Postman

---

## 📡 Endpoints

### 🔹 GET /

**URL:** http://localhost:3000/
**Descrição:** Retorna status da API

**Resposta:**

```json
{
  "status": "success",
  "timestamp": "2026-03-22T22:06:27.775Z"
}
```

---

### 🔹 GET /info

**URL:** http://localhost:3000/info
**Descrição:** Informações da API

**Resposta:**

```json
{
  "nome": "Minha API REST",
  "versao": "1.0.0",
  "autor": "Vitoria Viviane Ramos da Silva"
}
```

---

### 🔹 POST /usuarios

**URL:** http://localhost:3000/usuarios

**Body:**

```json
{
  "nome": "Vitoria",
  "email": "vitoria@email.com"
}
```

**Resposta:**

```json
{
  "mensagem": "Usuário criado com sucesso!",
  "dados_recebidos": {
    "nome": "Vitoria",
    "email": "vitoria@email.com"
  }
}
```

---

### 🔹 POST /login

**URL:** http://localhost:3000/login

**Body:**

```json
{
  "email": "teste@email.com",
  "senha": "123456"
}
```

**Resposta:**

```json
{
  "mensagem": "Login realizado com sucesso!",
  "usuario": "teste@email.com",
  "token": "123456abc"
}
```

---

### 🔹 GET /api/me

**Descrição:** Retorna dados pessoais

**Resposta:**

```json
{
  "nome": "Vitoria Viviane Ramos da Silva",
  "curso": "Engenharia de Software",
  "hobbies": ["programar", "jogar", "ler"],
  "linguagens": ["JavaScript", "Python"]
}
```

---

### 🔹 GET /api/data

**Descrição:** Retorna data atual

**Resposta:**

```json
{
  "data": "2026-03-22T22:06:27.775Z"
}
```

---

### 🔹 GET /api/random

**Descrição:** Número aleatório

**Resposta:**

```json
{
  "numero": 42
}
```

---

## ✅ Validações implementadas

* Verificação de campos obrigatórios (email e senha no login)
* Retorno de erro 400 quando dados não são enviados

---

## 🧪 Testes

Todos os endpoints foram testados utilizando o Postman.
A collection está disponível no repositório.

---

## 📁 Repositório

https://github.com/vvramos01/aula-api-post
