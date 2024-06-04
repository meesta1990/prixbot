import TelegramBot from 'node-telegram-bot-api'

const token = '7468611334:AAHFaAJUwJx0v5Rl_zjpSBlPdYvgl8N-uac';
const bot = new TelegramBot(token, {polling: true});
let intervalId;

const frasi = [
    'sera sera',
    'granbue.. granbue..',
    'Periodo un po’ così..',
    'hai condiviso tutti gli occhi su rafah su Instagram?',
    'Scusa se non arrivo alla fine del mese',
    'Sia chiaro, sono idee mie',
    'Sia chiaro, nessuno mi paga, l\'ho fatto gratuitamente',
    'Pagato per..',
    'È un buon motivo per riflettere',
    '*BURP*',
    'Miracoli non ne faccio',
    'Bo ti dico..',
    'Nel chill nel chill',
    'Un periodo tetro, oscuro',
    'Devastante',
    'Ma sai cosa?...',
    'Mi spezzi',
    '?'
]

// Funzione per inviare il messaggio "ciao" ad un intervallo casuale
const sendGreeting = (chatId) => {
  const x = Math.floor(Math.random() * 10) + 1; // Genera un numero casuale tra 1 e 10
  
  
  setTimeout(() => {
    const y = Math.floor(Math.random() * frasi.length -1) + 1
    bot.sendMessage(chatId, frasi[y]);
  }, 2000);
};

// Gestore del comando /start
bot.onText("we prix", (msg) => {
  const chatId = msg.chat.id;
  // Inizia a inviare saluti
  sendGreeting(chatId);
});

console.log('Bot avviato...');
