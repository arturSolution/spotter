# Etapa 1: Construir a aplicação
FROM node:18-alpine AS build

# Diretório de trabalho da aplicação
WORKDIR /app

# Copiar os arquivos de pacotes (package.json, package-lock.json ou yarn.lock)
COPY package*.json ./

# Instalar as dependências
RUN npm install -f

# Copiar todo o código da aplicação para o container
COPY . .

# Rodar o build da aplicação Angular
RUN npm run build --prod

# Etapa 2: Servir a aplicação com NGINX (alpine)
FROM nginx:alpine

# Copiar os arquivos compilados para o diretório do Nginx
COPY --from=build /app/dist/* /usr/share/nginx/html

# Expor a porta que o Nginx vai rodar
EXPOSE 80

# Comando para rodar o NGINX em modo foreground
CMD ["nginx", "-g", "daemon off;"]
