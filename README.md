Este projeto é um bot para WhatsApp utilizando a biblioteca whatsapp-web.js. Ele responde automaticamente a mensagens recebidas e oferece um menu interativo para os usuários.

Funcionalidades

Exibe um QR Code para autenticação no WhatsApp Web.

Responde a mensagens com um menu interativo.

Processa respostas para diferentes serviços:

Serviço de impressão

Assistência Técnica

Garantia

Ouvidoria

Requisitos

Node.js instalado

WhatsApp Web conectado no navegador

Biblioteca whatsapp-web.js instalada

Instalação

Clone este repositório:

git clone https://github.com/seu-repositorio.git

Acesse a pasta do projeto:

cd whatsapp-bot

Instale as dependências:

npm install whatsapp-web.js qrcode-terminal

Como Usar

Inicie o bot:

node index.js

Escaneie o QR Code exibido no terminal usando o WhatsApp Web.

O bot estará pronto para interagir com mensagens recebidas.

Estrutura do Código

Autenticação:

O QR Code é gerado no terminal para autenticação.

Recebimento de Mensagens:

O bot monitora mensagens e responde automaticamente.

Menu Interativo:

Se o usuário enviar uma saudação, o bot responderá com um menu de opções.

Respostas Personalizadas:

Dependendo da escolha do usuário, o bot fornece informações sobre os serviços da PAPERINFO.

Personalização

Caso deseje modificar as mensagens ou adicionar novas funcionalidades, edite o código dentro do evento client.on('message', async (msg) => { ... }.

Contribuição

Sinta-se à vontade para contribuir com melhorias! Envie um pull request ou abra uma issue para sugestões.

Licença

Este projeto está sob a licença MIT.

