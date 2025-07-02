Trabalho FrontEnd - Para projeto final

#[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


:star: :star: :star: Sistema responsável por monitorar carros e motos com api de OCR para placas :star: :star: :star:


## 🔧 Requisitos

Antes de começar, você precisa ter os seguintes softwares instalados na sua máquina:

- **Node 18.19.1 ou superior.
- ** Angular-cli 19 ou superior**.
- **Npm** (para build do projeto).

## Como rodar localmente

1. Clone from Github

```
git clone https://github.com/arturSolution/spotter.git
cd spotter 
```

2. Instalar os pacotes

```
npm install
```

3. Run project

```
npm run start
```
## Como rodar com docker
1. Clone from Github

```
git clone https://github.com/arturSolution/spotter.git
cd spotter 
```
2. Construir a imagem docker
```
docker build -t spotterfront:v1.0.0 .
```
3. Rodar a imagem docker
```
 docker run -p 80:80 spotterfront:v1.0.0
```

📦 Estrutura do Projeto:
- src/app/environments/: Contém arquivos relacionados ao código responsável por criar variáveis de ambiente globais para a aplicação.
- src/demo: Contém arquivos relacionados ás páginas do sistema.
- src/demo/service: Contém arquivos relacionados ás chamadas de serviço do sistema.
- src/package.json: Arquivo responsável por organizar as dependências do projeto, versionamento e scripts de build.

🧑‍💻 Desenvolvimento
Caso deseje contribuir ou realizar modificações no projeto, basta clonar o repositório e seguir os passos descritos acima para rodar a aplicação localmente. Para criar uma nova feature ou corrigir algum bug, basta submeter um pull request.

📄 Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.

Se você tiver alguma dúvida, sinta-se à vontade para abrir uma issue ou enviar um pull request! 😊
