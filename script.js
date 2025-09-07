/* ============================================
   PLAYER / PLAYLIST – Rádio Thay (script.js)
   ============================================ */

/* ====== PLAYLIST ====== */
const musicas = [
  { titulo: "Oceano", artista: "Djavan", imagem: "assets/oceano.png",
    frase: "Você me traz uma paz que eu nunca senti antes... como o mar que acalma a alma. 🌊",
    audio: "assets/Djavan - Oceano.mp3", duracao: "4:17", favorita: true },

  { titulo: "Lutar pelo que é meu", artista: "Charlie Brown Jr.", imagem: "assets/lutar.png",
    frase: "Seu sorriso ilumina meus dias mais cinzentos. Vamos construir algo especial juntos. ☀️",
    audio: "assets/Charlie Brown Jr - Lutar pelo que é meu.mp3", duracao: "3:26" },

  { titulo: "Thinking Out Loud", artista: "Ed Sheeran", imagem: "assets/thinking.png",
    frase: "Adoro como nos conectamos, mesmo sem palavras. Você me faz sentir em casa. 💃🕺",
    audio: "assets/Ed Sheeran - Thinking Out Loud.mp3", duracao: "4:41", favorita: true },

  { titulo: "Por Onde Andei", artista: "Nando Reis", imagem: "assets/por-onde-andei2.png",
    frase: "Mesmo quando estamos longe, você é meu pensamento favorito. 💌",
    audio: "assets/nando-reis-por-onde-andei.mp3", duracao: "4:49" },

  { titulo: "Velha Infância", artista: "Tribalistas", imagem: "assets/velha-infancia.png",
    frase: "Com você, cada momento vira uma memória especial. Você é diferente de tudo que já vivi. 🏡",
    audio: "assets/Tribalistas - Velha Infância.mp3", duracao: "4:05" },

  { titulo: "Telegrama", artista: "Zeca Baleiro", imagem: "assets/telegrama.png",
    frase: "Se eu pudesse te descrever, diria que você é a pessoa que me faz sorrir sem motivo. 📝",
    audio: "assets/Zeca Baleiro - Telegrama.mp3", duracao: "4:26" },

  { titulo: "You're Beautiful", artista: "James Blunt", imagem: "assets/youre-beautiful.png",
    frase: "Algo em você me chamou atenção... e agora não consigo mais parar de pensar nesse algo. 💫",
    audio: "assets/James Blunt - You're Beautiful.mp3", duracao: "3:29", favorita: true },

  { titulo: "If I Ain't Got You", artista: "Alicia Keys", imagem: "assets/if-i-aint-got-you.png",
    frase: "Nada faz sentido se não for com você por perto. Você traz significado aos meus dias. 🌍",
    audio: "assets/alicia-keys-if-i-aint-got-you.mp3", duracao: "3:48" },

  { titulo: "I'm Yours", artista: "Jason Mraz", imagem: "assets/im-yours.png",
    frase: "Meu coração diz que devo dar uma chance a isso que estamos vivendo. Vamos aproveitar o momento? ⏳",
    audio: "assets/jason-mraz-im-yours.mp3", duracao: "4:06" },

  { titulo: "Mais Ninguém", artista: "Banda do Mar", imagem: "assets/banda_do_mar_mais_ninguém.png",
    frase: "Só eu e você, e mais ninguém... como se o mundo inteiro desaparecesse quando estamos juntos. 🌌",
    audio: "assets/banda_do_mar_mais_ninguém.mp3", duracao: "2:47", favorita: true },

  { titulo: "Perfect", artista: "Ed Sheeran", imagem: "assets/ed_sheeran_perfect.png",
    frase: "Dançar contigo sob as estrelas é tudo que eu sempre sonhei. Você é meu perfeito. 🌙✨",
    audio: "assets/ed_sheeran_perfect.mp3", duracao: "4:23", favorita: true },

  { titulo: "When You Came Into My Life", artista: "Scorpions", imagem: "assets/scorpions_when_you_came_into_my_life.png",
    frase: "Sua chegada mudou tudo... é como se minha vida tivesse começado de novo. ❤️",
    audio: "assets/scorpions_when_you_came_into_my_life.mp3", duracao: "5:13" },

  { titulo: "De Janeiro a Janeiro", artista: "Roberta Campos", imagem: "assets/roberta_campos_de_janeiro_a_janeiro.png",
    frase: "Prometo te amar de janeiro a janeiro... até o fim dos meus dias. 🌹",
    audio: "assets/roberta_campos_de_janeiro_a_janeiro.mp3", duracao: "3:13" },

  { titulo: "I Don't Want to Miss a Thing", artista: "Aerosmith", imagem: "assets/aerosmith_i_dont_want_to_miss_a_thing.png",
    frase: "Não quero perder nenhum momento ao seu lado... até seus sonhos são parte de moi. 💫",
    audio: "assets/aerosmith_i_dont_want_to_miss_a_thing.mp3", duracao: "4:59" },

  { titulo: "Sweet Child O' Mine", artista: "Guns N' Roses", imagem: "assets/guns_n_roses_sweet_child_o_mine.png",
    frase: "Seu sorriso é como um raio de sol que ilumina até meus dias mais escuros. 🌞🌹",
    audio: "assets/guns_n_roses_sweet_child_o_mine.mp3", duracao: "5:56" },

  { titulo: "Nothing Else Matters", artista: "Metallica", imagem: "assets/metallica_nothing_else_matters.png",
    frase: "Com você, nada mais importa. Só nós dois, no silêncio do mundo. 🖤",
    audio: "assets/metallica_nothing_else_matters.mp3", duracao: "6:28" },

  { titulo: "Every Breath You Take", artista: "The Police", imagem: "assets/the_police_every_breath_you_take.png",
    frase: "Cada suspiro seu, cada olhar... eu guardo como se fosse meu. 🌌",
    audio: "assets/the_police_every_breath_you_take.mp3", duracao: "4:13" },

  { titulo: "The Scientist", artista: "Coldplay", imagem: "assets/coldplay-the-scientist.png",
    frase: "Relógios quebrados espalhados pelo chão, mas seguimos de mãos dadas, querendo voltar no tempo. ⏳❤️",
    audio: "assets/coldplay-the-scientist.mp3", duracao: "5:09" },

  { titulo: "Use Somebody", artista: "Kings of Leon", imagem: "assets/kings-of-leon-use-somebody.png",
    frase: "No meio da noite, sua presença é a luz que guia meu caminho. 🌃✨",
    audio: "assets/kings-of-leon-use-somebody.mp3", duracao: "3:51" },

  { titulo: "Nem um Dia", artista: "Djavan", imagem: "assets/djavan-nem-um-dia.png",
    frase: "Algumas pessoas não saem da gente nem por um dia... e eu não quero que você saia. Nunca. 🕊️",
    audio: "assets/djavan-nem-um-dia.mp3", duracao: "5:04", favorita: true },

  { titulo: "Still Loving You", artista: "Scorpions", imagem: "assets/scorpions-still-loving-you.png",
    frase: "Eu ainda estarei te amando, não importa o que aconteça. Prometo lutar por nós. 🖤",
    audio: "assets/scorpions-still-loving-you.mp3", duracao: "6:28", favorita: true },

  { titulo: "Your Song", artista: "Elton John", imagem: "assets/elton-john-your-song.png",
    frase: "E se eu dissesse que te amo? Você acredita que é a coisa mais linda que já fiz? 🎹💛",
    audio: "assets/elton-john-your-song.mp3", duracao: "4:02", favorita: true },

  { titulo: "Quem de Nós Dois", artista: "Ana Carolina", imagem: "assets/ana-carolina-quem-de-nos-dois.png",
    frase: "Quem de nós dois vai ser o primeiro a admitir que isso é amor? E que não dá mais para fugir? 💘",
    audio: "assets/ana-carolina-quem-de-nos-dois.mp3", duracao: "4:50", favorita: true },
	
  { titulo: "More Than Words",artista: "Extreme", imagem: "assets/extreme-more-than-words.png", 
    frase: "Palavras são pouco para expressar o que sinto. Meus olhos, meus gestos, meu coração - tudo grita o quanto te amo. ❤️", audio: "assets/extreme-more-than-words.mp3", duracao: "5:34", favorita: true
  },
  
  { titulo: "Shimbalaiê",  artista: "Maria Gadú",  imagem: "assets/maria-gadu-shimbalaie.png",
    frase: "Você me conquista sem dizer uma palavra... Seu jeito, seu olhar, seu toque - tudo em você é uma dança que me encanta. 💃🕺",
    audio: "assets/maria-gadu-shimbalaie.mp3", duracao: "3:22", favorita: true
  },
  
  { titulo: "Mania de Você", artista: "Rita Lee", imagem: "assets/rita-lee-mania-de-voce.png",
    frase: "Não é mania, não é paixão, não é carência... É algo muito maior: é amor puro e sincero que não consigo controlar. 💘",
    audio: "assets/rita-lee-mania-de-voce.mp3", duracao: "4:20", favorita: true
  },
  
  { titulo: "Sunshine of Your Love", artista: "Cream", imagem: "assets/cream-sunshine-of-your-love.png",
    frase: "Seu amor é como o sol que ilumina meus dias mais escuros. Não consigo viver sem a luz que você traz para minha vida. ☀️",
    audio: "assets/cream-sunshine-of-your-love.mp3", duracao: "4:10", favorita: true
  },
  
  { titulo: "Someone You Loved", artista: "Lewis Capaldi", imagem: "assets/lewis-capaldi-someone-you-loved.png",
  frase: "Antes de você, eu só sobrevivia. Agora, finalmente entendo o que é viver de verdade. Você chegou e preencheu todos os vazios que eu nem sabia que tinha. 🌈",
  audio: "assets/lewis-capaldi-someone-you-loved.mp3", duracao: "3:02", favorita: true
  },
  
  { titulo: "I Was Made For Lovin' You", artista: "KISS", imagem: "assets/kiss-i-was-made-for-lovin-you.png",
  frase: "O universo não errou: eu fui feito para te amar, você foi feita para me amar, e juntos somos uma combinação explosiva de paixão! 💥",
  audio: "assets/kiss-i-was-made-for-lovin-you.mp3", duracao: "4:31", favorita: true
  },
  
  { titulo: "You're Mine", artista: "Disturbed", imagem: "assets/disturbed-youre-mine.png",
  frase: "Não é posse, é destino. Não é obsessão, é certeza. Você é minha e eu sou seu, e nada nesse mundo vai mudar isso. 🌑",
  audio: "assets/disturbed-youre-mine.mp3", duracao: "4:55", favorita: true
  },
  
  { titulo: "Borbulhas de Amor", artista: "Fagner", imagem: "assets/fagner-borbulhas-de-amor.png",
  frase: "Seu amor é como espuma de champagne: doce, efervescente e fazendo meu coração borbulhar de felicidade. Cada momento contigo é uma celebração! 🥂",
  audio: "assets/fagner-borbulhas-de-amor.mp3", duracao: "3:30", favorita: true
  },
  
  { titulo: "True Love", artista: "SOJA", imagem: "assets/soja-true-love.png",
  frase: "Seu amor é como o reggae: suave, sincero e cura minha alma. Não é passageiro, não é ilusão – é true love, puro e real. 🎶",
  audio: "assets/soja-true-love.mp3", duracao: "4:03", favorita: true
  },
  
  { titulo: "Is This Love", artista: "Bob Marley", imagem: "assets/bob-marley-is-this-love.png",
  frase: "Não sei se é amor, sei que é algo lindo que sinto por você. Algo que me acalma, me completa e me faz querer compartilhar cada dia ao seu lado. 🌅",
  audio: "assets/bob-marley-is-this-love.mp3",  duracao: "3:52", favorita: true
  },
  
  { titulo: "Is This Love", artista: "Whitesnake", imagem: "assets/whitesnake-is-this-love.png",
  frase: "Este amor é intenso, real e veio para ficar. Não é dúvida, é certeza. Não é paixão, é destino. É você e eu, para sempre. ❤️‍🔥",
  audio: "assets/whitesnake-is-this-love.mp3", duracao: "4:44", favorita: true
  }
];

/* ====== VARIÁVEIS ====== */
let indiceAtual = 0;
let isPlaying = false;
let typingInterval;

/* ====== ELEMENTOS DOM ====== */
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const anteriorBtn = document.getElementById('anterior');
const proximoBtn = document.getElementById('proximo');
const barraProgresso = document.getElementById('barra-progresso');
const inicio = document.getElementById('inicio');
const fim = document.getElementById('fim');
const fraseElement = document.getElementById('frase');
const listaMusicas = document.getElementById('lista-musicas');
const listaContainer = document.querySelector('.music-list-scroll');
const searchInput = document.querySelector('.search-box input');
const closeListBtn = document.querySelector('.close-list');
const aleatorioBtn = document.getElementById('aleatorio');
const listaBtn = document.getElementById('lista');
const vinylHeart = document.querySelector('.vinyl-heart');

/* ====== INICIALIZAÇÃO ====== */
function init() {
  setupEventListeners();
  carregarMusica(indiceAtual);
  renderMusicList();
}

/* ====== CARREGAR MÚSICA ====== */
function carregarMusica(indice) {
  indiceAtual = indice;
  const musica = musicas[indice];

  document.getElementById('titulo').textContent = musica.titulo;
  document.getElementById('artista').textContent = musica.artista;
  document.getElementById('imagem-musica').src = musica.imagem;

  fim.textContent = musica.duracao;
  barraProgresso.value = 0;
  inicio.textContent = '0:00';

  fraseElement.textContent = '';
  digitarFrase(fraseElement, musica.frase);

  audio.src = musica.audio;
  audio.load();

  updateActiveMusicInList();
}

/* ====== DIGITAR FRASE ====== */
function digitarFrase(element, text, i = 0) {
  clearTimeout(typingInterval);
  if (i < text.length) {
    element.textContent = text.substring(0, i + 1);
    typingInterval = setTimeout(() => digitarFrase(element, text, i + 1), 45);
  }
}

/* ====== CONTROLES ====== */
function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    if (!audio.src) carregarMusica(indiceAtual);
    audio.play().catch(() => {});
  }
}

function proximaMusica() {
  indiceAtual = (indiceAtual + 1) % musicas.length;
  carregarMusica(indiceAtual);
  audio.play().catch(() => {});
}

function musicaAnterior() {
  indiceAtual = (indiceAtual - 1 + musicas.length) % musicas.length;
  carregarMusica(indiceAtual);
  audio.play().catch(() => {});
}

/* ====== EVENT LISTENERS ====== */
function setupEventListeners() {
  playBtn.addEventListener('click', togglePlay);
  anteriorBtn.addEventListener('click', musicaAnterior);
  proximoBtn.addEventListener('click', proximaMusica);
  aleatorioBtn.addEventListener('click', toggleModoAleatorio);
  listaBtn.addEventListener('click', toggleListaMusicas);
  closeListBtn.addEventListener('click', toggleListaMusicas);
  listaMusicas.addEventListener('click', (e) => { if (e.target === listaMusicas) toggleListaMusicas(); });

  audio.addEventListener('timeupdate', atualizarProgresso);
  audio.addEventListener('loadedmetadata', carregarDuracao);
  audio.addEventListener('play', handlePlay);
  audio.addEventListener('pause', handlePause);
  audio.addEventListener('ended', handleEnded);

  barraProgresso.addEventListener('input', seekAudio);
  searchInput.addEventListener('input', filtrarMusicas);
}

/* ====== LISTA ====== */
function toggleListaMusicas() {
  listaMusicas.classList.toggle('show');
}

function renderMusicList() {
  listaContainer.innerHTML = '';
  musicas.forEach((musica, index) => {
    const item = document.createElement('div');
    item.className = `music-item ${index === indiceAtual ? 'active' : ''}`;
    item.innerHTML = `
      <img src="${musica.imagem}" alt="${musica.titulo}">
      <div class="music-item-info">
        <h4>${musica.titulo}</h4>
        <p>${musica.artista}</p>
      </div>
      <div class="music-item-duration">${musica.duracao}</div>
    `;
    item.addEventListener('click', () => {
      carregarMusica(index);
      if (isPlaying) audio.play().catch(()=>{});
      toggleListaMusicas();
    });
    listaContainer.appendChild(item);
  });
}

function updateActiveMusicInList() {
  document.querySelectorAll('.music-item').forEach((item, index) => {
    item.classList.toggle('active', index === indiceAtual);
  });
}

function filtrarMusicas() {
  const termo = (searchInput.value || '').toLowerCase();
  document.querySelectorAll('.music-item').forEach((item, index) => {
    const m = musicas[index];
    const texto = `${m.titulo.toLowerCase()} ${m.artista.toLowerCase()}`;
    item.style.display = texto.includes(termo) ? 'flex' : 'none';
  });
}

/* ====== PROGRESSO ====== */
function atualizarProgresso() {
  barraProgresso.max = audio.duration;
  barraProgresso.value = audio.currentTime;
  inicio.textContent = formatarTempo(audio.currentTime);
}
function carregarDuracao() {
  barraProgresso.max = audio.duration;
  fim.textContent = formatarTempo(audio.duration);
}
function seekAudio() {
  audio.currentTime = Number(barraProgresso.value || 0);
  inicio.textContent = formatarTempo(audio.currentTime);
}
function formatarTempo(seg) {
  const m = Math.floor(seg / 60);
  const s = Math.floor(seg % 60);
  return `${m}:${s < 10 ? '0' + s : s}`;
}

/* ====== ESTADO ====== */
function handlePlay() {
  isPlaying = true;
  playBtn.classList.add('playing');
  playBtn.innerHTML = '⏸️';
  if (vinylHeart) vinylHeart.classList.add('playing');
}
function handlePause() {
  isPlaying = false;
  playBtn.classList.remove('playing');
  playBtn.innerHTML = '▶️';
  if (vinylHeart) vinylHeart.classList.remove('playing');
}
function handleEnded() {
  proximaMusica();
}

/* ====== START ====== */
window.addEventListener('load', init);
