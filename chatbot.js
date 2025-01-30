const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');
const client = new Client();

// Serviço de leitura do QR code
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Quando o WhatsApp Web estiver pronto
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

// Inicializa a conexão do WhatsApp Web
client.initialize();

// Função de delay para fazer pausas entre as ações
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Monitorando mensagens recebidas
client.on('message', async (msg) => {
    console.log('Mensagem recebida:', msg.body); // Adicionando log para facilitar a depuração

    // Se a mensagem for uma saudação ou um comando de menu
    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        // Atraso e sinalizando que está digitando
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await chat.sendStateTyping();
        await delay(3000);  // Alterado para 3000ms (3 segundos)

        const contact = await msg.getContact();
        const name = contact.pushname || 'Cliente';

        // Enviar a resposta com opções de menu
        await client.sendMessage(
            msg.from,
            `Olá! ${name.split(' ')[0]}, sou a Tyfanny, assistente virtual da PAPERINFO. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Serviço de impressão\n2 - Assistência Técnica\n3 - Garantia\n4 - Ouvidoria`
        );
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await chat.sendStateTyping();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
    }

    // Função para o serviço de impressão (Opção 1)
    if (msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await chat.sendStateTyping();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await client.sendMessage(
            msg.from,
            'Envie seu arquivo em formato PDF, por favor, e aguarde um momento enquanto atendemos sua solicitação.'
        );
    }

    // Função para a assistência técnica (Opção 2)
    if (msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await chat.sendStateTyping();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await client.sendMessage(
            msg.from,
            'Estamos aqui para ouvir sua opinião, sugestão ou reclamação para melhorar nossos serviços. Como podemos ajudá-lo?'
        );
    }

    // Função para garantia (Opção 3)
    if (msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await chat.sendStateTyping();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await client.sendMessage(
            msg.from,
            'Fique tranquilo! Caso seu equipamento esteja dentro dos critérios de garantia, teremos prazer em atendê-lo(a).'
        );
    }

    // Função para ouvidoria (Opção 4)
    if (msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await chat.sendStateTyping();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await client.sendMessage(
            msg.from,
            'Obrigado por entrar em contato com a Ouvidoria. Em breve, entraremos em contato.'
        );
    }
});
