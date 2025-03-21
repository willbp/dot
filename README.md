# 🔍 Teste Técnico - Testes com Cypress

## 📖 Descrição  
Este projeto contém testes automatizados utilizando Cypress para validar casos de teste relacionado ao cadastro de usuário e ao cadastro de um faturamento de uma compra na aplicação [automationpratice](https://automationpratice.com.br/).

Também foi executado um desafio utilizando intercept, com objetivo de interceptar uma requisição e alterar um dado coletado através de um mock, após é apresentado o dado atualizado na tela para o usuário, para este desafio foi utilizado a aplicação [ucicinemas](https://www.ucicinemas.com.br/).

Todos os testes são executados em uma pipeline no GitHub Actions, que facilita a integração e entrega contínua, garantindo eficiência e consistência no processo de desenvolvimento dos testes.

---

## 📋 Pré-requisitos  
Antes de começar, certifique-se de ter os seguintes requisitos instalados:  
- [Node.js](https://nodejs.org/) (atualizado)  
- [Git](https://git-scm.com/)  
- [Cypress](https://www.cypress.io/) (instalado via npm/yarn)  

---

## 🚀 Como Executar  

1️⃣ Clone este repositório:  
```bash
  git clone https://github.com/willbp/dot.git
```

2️⃣ Acesse a pasta do projeto:  
```bash
  cd dot
```

3️⃣ Instale as dependências:  
```bash
  npm install
```

4️⃣ Execute os testes no modo interativo:  
```bash
  npx cypress open
```

5️⃣ Para rodar os testes em modo headless (linha de comando utilize):  
```bash
  npx cypress run
```

---

## 📂 Estrutura do Projeto  

```
📦 DOT  
 ┣ 📂 cypress  
 ┃ ┣ 📂 e2e
 ┃ ┣ 📂 fixtures
 ┃ ┣ 📂 support
 ┣ 📜 cypress.config.js  
 ┣ 📜 package.json  
 ┗ 📜 .gitignore
```

## 🛠️ Tecnologias Utilizadas  
- Git
- GitHub Actions
- Cypress  
- JavaScript  
- Node.js  
- Faker.js 

---

## ✅ Casos de Teste Implementados  
### Cadastro de Usuário  
✔️ Ceve cadastrar um usuário com sucesso  
✔️ Deve exibir erro ao tentar cadastrar com todos os campos vazios  
✔️ Veve exibir erro ao tentar cadastrar apenas com campo Nome preenchido  
✔️ Deve exibir erro ao tentar cadastrar com Nome e E-mail preenchidos, mas Senha vazia  
✔️ Deve exibir erro ao tentar cadastrar com Nome válido e E-mail inválido  
✔️ Deve exibir erro ao tentar cadastrar com Nome e Senha preenchidos, mas E-mail vazio  
✔️ Deve exibir erro ao tentar cadastrar com E-mail e Senha válidos  
✔️ Deve exibir erro ao cadastrar com E-mail inválido e Senha válida  
✔️ Deve exibir erro ao tentar cadastrar com Nome e E-mail vazios e Senha válida  
✔️ Deve exibir erro ao tentar cadastrar com Nome e E-mail vazios e Senha inválida  

### Cadastro de Faturamento em uma Compra  
✔️ Deve cadastrar o faturamento com sucesso   
✔️ Deve exibir todas as mensagens de erro ao tentar finalizar faturamento sem preencher os campos

### Interceptar requisição e popular componente
✔️ Deve interceptar a api e popular o componente com novo valor

---

![Cypress](https://img.shields.io/badge/Cypress-14.2.0-brightgreen) ![Build](https://img.shields.io/badge/build-passing-green)

