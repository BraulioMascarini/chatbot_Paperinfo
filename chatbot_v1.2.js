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
        //await delay(3000);  // Alterado para 3000ms (3 segundos)

        const contact = await msg.getContact();
        const name = contact.pushname || 'Cliente';

        // Enviar a resposta com opções de menu
        await client.sendMessage(
            msg.from,
            `Olá! ${name.split(' ')[0]}, sou a Tyfanny, assistente virtual da PAPERINFO. Como posso ajudá-lo(a)? Por favor, digite uma das opções abaixo:\n\n1 - Serviço de impressão ou Papelaria\n2 - Assistência Técnica\n3 - Garantia\n4 - Falar com Atendente\n5 - Reclamações ou sugestôes`
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
            'Caso seja impressão envie seu arquivo em formato PDF,Docx ou Jpg por favor, se o assunto for Papelaria aguarde um momento que logo iremos atende-lo(a).'
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
            'Realizamos manutenção dos serviços abaixo:\n\n1- Notebooks;\n\n2- Desktops;\n\n3- Celulares;\n\n4- Impressoras Laser, Jato de tinta, Matriciais e Copiadoras;\n\n5- Video Games;\n\n Escreva qual seu equipamento, Modelo, fabricante e explique em poucas palavras qual defeito apresentado?\n\nAguarde que logo iremos atende-lo(a)'
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
            'Fique tranquilo! Caso seu equipamento esteja dentro dos critérios de garantia teremos prazer em atendê-lo(a)\nPara uma analise eficiente todo equipamento em garantia tem um prazo de 48hs para conclusão da analise técnica\nDependendo do problema apresentado este prazo poderá se extender respeitando sempre o Código de Defesa do Consumidor em seu artigo 18, parágrafo 1.\nEnvie o numero da Ordem de serviço, seu nome completo e CPF\nRelate seu problema em poucas palavras que logo retornaremos seu contato'
        );
    }

    // Falar com Atendente Humano (Opção 4)
    if (msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await chat.sendStateTyping();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await client.sendMessage(
            msg.from,
            'Aguarde um instante que logo iremos atende-lo(a).'
        );
    }

        // Função para Reclamação (Opção 5)
    if (msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await chat.sendStateTyping();
        await delay(3000);  // Alterado para 3000ms (3 segundos)
        await client.sendMessage(
            msg.from,
            'Fique a vontade para relatar sua experiência com a PAPERINFO (Reclamações, sugestões ou elogio)\nRetornaremos seu contato em breve.'
            );
        }
});
