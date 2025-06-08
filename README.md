# Twt1restapi
Um exemplo simples de servidor JSON
## Instalação
Para instalar as dependências, execute:
```bash
npm install
```
## Scripts
Para iniciar o servidor JSON, execute:
```bash
npm start
```
Para iniciar o servidor backend, execute:
```bash
npm run startBackend
```
<!-- abra o índice HTML localmente após executar o servidor backend -->
## Uso
Abra seu navegador e navegue até `http://localhost:3000` para visualizar o servidor JSON.
Para visualizar o servidor backend, navegue até `http://localhost:5000` em uma aba separada.
Abra o arquivo `frontend/index.html` em seu navegador para interagir com o servidor backend.

## Pontos de extremidade da API
### Alunos
- `GET /alunos`: Lisatagem de todos os alunos.
- `POST /aluno-update`: Atualiza as informações de um aluno.
- `DELETE /aluno-delete/:id`: Exclui um aluno pelo ID.
- `POST /aluno-create`: Cria um novo aluno.
### Cursos
- `GET /cursos`: Listagem de todos os cursos.