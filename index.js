const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Define o caminho para o arquivo HTML
    const filePath = path.join(__dirname, 'index.html');

    // Lê o arquivo HTML do sistema de arquivos
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log('Error reading the HTML file:', err);
            res.statusCode = 500;
            return res.end('Internal Server Error');
        }

        // Define o cabeçalho de resposta como HTML
        res.setHeader('Content-Type', 'text/html');
        // Envia o conteúdo do arquivo HTML lido
        res.end(data);
    });
});

server.listen(8888, () => {
    console.log('Server started on localhost:8888!');
});