
# Gerar o arquivo de ambiente com a variável passada do sistema
cat <<EOF > /usr/share/nginx/html/env.js
window['env'] = {
  apiUrl: '${API_URL}',
  apiBackend: '${API_URL}'
};
EOF

# Inicia o nginx
exec nginx -g 'daemon off;'
