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
    frase: "Não quero perder nenhum momento ao seu lado... até seus sonhos são parte de mim. 💫",
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
    audio: "assets/ana-carolina-quem-de-nos-dois.mp3", duracao: "4:50", favorita: true }
];

/* ====== VARIÁVEIS GLOBAIS ====== */
let indiceAtual = 0;
let typingInterval;
let isTyping = false;
let isPlaying = false;
let audioContextInitialized = false;
let tentativasAutoplay = 0;
let modoAleatorio = false;
let historicoAleatorio = [];
const MAX_HISTORICO = 3;
let proximaMusicaPrecarregada = null;
let registration = null;

/* ====== ELEMENTOS DOM ====== */
const audio = document.getElementById('audio');
audio.preload = "auto";
audio.setAttribute('playsinline', '');

const playBtn = document.getElementById('play');
const anteriorBtn = document.getElementById('anterior');
const proximoBtn = document.getElementById('proximo');
const aleatorioBtn = document.getElementById('aleatorio');
const listaBtn = document.getElementById('lista');
const barraProgresso = document.getElementById('barra-progresso');
const inicio = document.getElementById('inicio');
const fim = document.getElementById('fim');
const fraseElement = document.getElementById('frase');
const listaMusicas = document.getElementById('lista-musicas');
const listaContainer = document.querySelector('.music-list-scroll');
const searchInput = document.querySelector('.search-box input');
const closeListBtn = document.querySelector('.close-list');
const efeitosContainer = document.getElementById('efeitos-romanticos');
const vinylHeart = document.querySelector('.vinyl-heart');

/* ====== INICIALIZAÇÃO ====== */
function init() {
  setupEventListeners();
  carregarMusica(indiceAtual);
  renderMusicList();
  criarEfeitosRomanticos();
  mostrarAvisoAutoplay();
  iniciarServiceWorker();

  // restaurar preferências
  const savedMode = localStorage.getItem('modoAleatorio');
  if (savedMode === 'true') {
    modoAleatorio = true;
    aleatorioBtn.classList.add('active');
  }
  const savedIndex = localStorage.getItem('ultimaMusica');
  if (savedIndex && !isNaN(savedIndex) && Number(savedIndex) < musicas.length) {
    indiceAtual = Number(savedIndex);
    carregarMusica(indiceAtual);
  }

  // pré-carregar próxima música
  precarregarProximaMusica();

  // Inicializar AudioContext sob gesto do usuário
  const once = () => { initAudioContext(); document.removeEventListener('click', once); document.removeEventListener('touchend', once); };
  document.addEventListener('click', once, { passive: true });
  document.addEventListener('touchend', once, { passive: true });
}

function initAudioContext() {
  if (audioContextInitialized) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  try {
    if (Ctx) {
      const ctx = new Ctx();
      const src = ctx.createMediaElementSource(audio);
      src.connect(ctx.destination);
    }
  } catch {}
  audioContextInitialized = true;
}

/* ====== SERVICE WORKER ====== */
function iniciarServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => {
        console.log('Service Worker registrado!');
        registration = reg;
        
        // Verifica atualizações imediatamente
        reg.update();
        
        // Configura verificação periódica (a cada 30 segundos)
        setInterval(() => {
          reg.update();
        }, 30000);
        
        // Escuta por novas atualizações
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          console.log('Nova versão do Service Worker encontrada!');
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              mostrarNotificacao('🎵 Nova versão disponível! Clique para atualizar.');
              adicionarBotaoAtualizacao();
            }
          });
        });
      })
      .catch(err => console.error('Erro no Service Worker:', err));

    // Escuta mensagens do Service Worker
    navigator.serviceWorker.addEventListener('message', event => {
      if (event.data && event.data.type === 'NOVA_VERSAO_DISPONIVEL') {
        mostrarNotificacao('🚀 Atualização disponível! Clique no botão para aplicar.');
        adicionarBotaoAtualizacao();
      }
    });
  }
}

function adicionarBotaoAtualizacao() {
  // Remove botão existente se houver
  const botaoExistente = document.getElementById('botao-atualizar-app');
  if (botaoExistente) botaoExistente.remove();
  
  const botaoAtualizar = document.createElement('button');
  botaoAtualizar.id = 'botao-atualizar-app';
  botaoAtualizar.classList.add('botao-atualizar-app');
  botaoAtualizar.innerHTML = '🔄 Atualizar App';
  
  botaoAtualizar.onclick = () => {
    if (registration) {
      registration.update().then(() => {
        window.location.reload();
      });
    }
  };
  
  document.body.appendChild(botaoAtualizar);
}

/* ====== EVENT LISTENERS ====== */
function setupEventListeners() {
  const secret = document.querySelector('.secret-message');
  if (secret) {
    secret.addEventListener('click', () => {
      const cartaFechada = document.querySelector('.carta-fechada');
      const cartaAberta = document.querySelector('.carta-aberta');
      if (cartaFechada && cartaAberta) {
        cartaFechada.style.display = 'none';
        cartaAberta.style.display = 'block';
        mostrarMensagemSecreta();
        setTimeout(() => {
          cartaAberta.style.display = 'none';
          cartaFechada.style.display = 'block';
        }, 2000);
      }
    });
    secret.addEventListener('click', mostrarMensagemSecreta);
  }

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
  audio.addEventListener('error', tratarErroAudio);

  barraProgresso.addEventListener('input', seekAudio);

  document.addEventListener('click', criarCoracaoNoClique);
  searchInput.addEventListener('input', filtrarMusicas);

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && audio.ended) {
      handleEnded();
    }
  });
}

/* ====== ATUALIZAR TELA BLOQUEIO + FAVICON ====== */
function atualizarTelaBloqueio(musica) {
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: musica.titulo,
        artist: musica.artista,
        album: "Rádio Thay 💖",
        artwork: [
          { src: musica.imagem, sizes: '96x96', type: 'image/png' },
          { src: musica.imagem, sizes: '192x192', type: 'image/png' },
          { src: musica.imagem, sizes: '512x512', type: 'image/png' }
        ]
      });
      navigator.mediaSession.setActionHandler("play", () => audio.play());
      navigator.mediaSession.setActionHandler("pause", () => audio.pause());
      navigator.mediaSession.setActionHandler("previoustrack", () => musicaAnterior());
      navigator.mediaSession.setActionHandler("nexttrack", () => proximaMusica());
    } catch {}
  }
  atualizarFavicon(musica.imagem);
}

function atualizarFavicon(imagemSrc) {
  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'shortcut icon';
    document.head.appendChild(link);
  }
  link.href = imagemSrc;
}

/* ====== CARREGAR MÚSICA ====== */
function carregarMusica(indice) {
  if (indice < 0 || indice >= musicas.length) return;

  indiceAtual = indice;
  const musica = musicas[indice];

  const imgEl = document.getElementById('imagem-musica');
  const tituloEl = document.getElementById('titulo');
  const artistaEl = document.getElementById('artista');

  if (tituloEl) tituloEl.textContent = musica.titulo;
  if (artistaEl) artistaEl.textContent = musica.artista;
  if (imgEl) {
    imgEl.src = musica.imagem;
    imgEl.alt = `Capa: ${musica.titulo}`;
    imgEl.onerror = () => { imgEl.onerror = null; };
  }

  fim.textContent = musica.duracao;
  barraProgresso.value = 0;
  inicio.textContent = '0:00';

  if (proximaMusicaPrecarregada) {
    proximaMusicaPrecarregada.src = "";
    proximaMusicaPrecarregada = null;
  }

  audio.src = musica.audio;
  audio.load();

  fraseElement.textContent = '';
  digitarFrase(fraseElement, musica.frase);

  updateActiveMusicInList();
  atualizarTelaBloqueio(musica);
  localStorage.setItem('ultimaMusica', indiceAtual);

  // Só pré-carrega próxima se não estiver no modo aleatório
  if (!modoAleatorio) {
    precarregarProximaMusica();
  }
}

/* ====== PRÉ-CARREGAR PRÓXIMA ====== */
function precarregarProximaMusica() {
  if (proximaMusicaPrecarregada) {
    proximaMusicaPrecarregada.src = "";
    proximaMusicaPrecarregada = null;
  }
  
  let proximoIndice;
  if (modoAleatorio) {
    return;
  } else {
    proximoIndice = (indiceAtual + 1) % musicas.length;
  }
  
  const proxima = musicas[proximoIndice];
  const preload = new Audio();
  preload.preload = "auto";
  preload.src = proxima.audio;
  preload.load();
  proximaMusicaPrecarregada = preload;
}

/* ====== TYPING ====== */
function digitarFrase(element, text, i = 0) {
  if (!element) return;
  clearTimeout(typingInterval);
  isTyping = true;
  if (i < text.length) {
    element.textContent = text.substring(0, i + 1);
    typingInterval = setTimeout(() => digitarFrase(element, text, i + 1), 45);
  } else {
    isTyping = false;
  }
}

/* ====== CONTROLES ====== */
function togglePlay() {
  initAudioContext();
  if (isPlaying) {
    audio.pause();
  } else {
    if (!audio.src) carregarMusica(indiceAtual);
    audio.play().catch((e) => {
      console.error("Erro ao reproduzir:", e);
      setTimeout(() => {
        carregarMusica(indiceAtual);
        audio.play().catch(()=>{});
      }, 200);
    });
  }
  criarCoracao(playBtn);
}

function proximaMusica() {
  if (isTyping) clearTimeout(typingInterval);
  const novoIndice = modoAleatorio ? escolherMusicaAleatoria() : (indiceAtual + 1) % musicas.length;
  carregarMusica(novoIndice);
  if (isPlaying) {
    audio.play().catch(() => {});
  }
}

function musicaAnterior() {
  if (isTyping) clearTimeout(typingInterval);
  const novoIndice = (indiceAtual - 1 + musicas.length) % musicas.length;
  carregarMusica(novoIndice);
  if (isPlaying) {
    audio.play().catch(() => {});
  }
}

/* ====== ALEATÓRIO ====== */
function escolherMusicaAleatoria() {
  let disponiveis = musicas.map((_, i) => i).filter(i => !historicoAleatorio.includes(i));
  if (disponiveis.length === 0) {
    historicoAleatorio = [];
    disponiveis = musicas.map((_, i) => i);
  }
  const pesos = disponiveis.map(i => (musicas[i].favorita ? 1.25 : 1));
  const totalPeso = pesos.reduce((a, b) => a + b, 0);
  let r = Math.random() * totalPeso, acc = 0, escolhido = disponiveis[0];
  for (let i = 0; i < disponiveis.length; i++) {
    acc += pesos[i];
    if (r <= acc) { escolhido = disponiveis[i]; break; }
  }
  historicoAleatorio.push(escolhido);
  if (historicoAleatorio.length > MAX_HISTORICO) historicoAleatorio.shift();
  return escolhido;
}

function toggleModoAleatorio() {
  modoAleatorio = !modoAleatorio;
  if (modoAleatorio) {
    aleatorioBtn.classList.add('active');
    criarCoracao(aleatorioBtn);
    mostrarNotificacao("Modo aleatório inteligente ativado! 🎵");
    historicoAleatorio = [indiceAtual];
    
    // Limpar pré-carregamento no modo aleatório
    if (proximaMusicaPrecarregada) {
      proximaMusicaPrecarregada.src = "";
      proximaMusicaPrecarregada = null;
    }
  } else {
    aleatorioBtn.classList.remove('active');
    mostrarNotificacao("Modo aleatório desativado.");
    
    // Reativar pré-carregamento no modo sequencial
    precarregarProximaMusica();
  }
  localStorage.setItem('modoAleatorio', modoAleatorio);
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

/* ====== ÁUDIO: ESTADO / PROGRESSO ====== */
function handlePlay() { isPlaying = true; updateUI(); if (vinylHeart) vinylHeart.classList.add('playing'); }
function handlePause() { isPlaying = false; updateUI(); if (vinylHeart) vinylHeart.classList.remove('playing'); }

function handleEnded() {
  if (tentativasAutoplay > 2) {
    isPlaying = false;
    updateUI();
    return;
  }
  tentativasAutoplay++;

  if (modoAleatorio) {
    // Modo aleatório: escolher nova música e carregar diretamente
    const novoIndice = escolherMusicaAleatoria();
    
    // Primeiro carregar a música completamente
    const musica = musicas[novoIndice];
    
    // Atualizar interface IMEDIATAMENTE
    const imgEl = document.getElementById('imagem-musica');
    if (imgEl) {
      imgEl.src = musica.imagem;
      imgEl.alt = `Capa: ${musica.titulo}`;
    }
    document.getElementById('titulo').textContent = musica.titulo;
    document.getElementById('artista').textContent = musica.artista;
    fim.textContent = musica.duracao;
    fraseElement.textContent = '';
    digitarFrase(fraseElement, musica.frase);
    
    indiceAtual = novoIndice;
    updateActiveMusicInList();
    atualizarTelaBloqueio(musica);
    localStorage.setItem('ultimaMusica', indiceAtual);

    // Configurar o áudio e esperar ele estar pronto
    audio.src = musica.audio;
    audio.load();
    
    // Esperar o áudio estar carregado antes de reproduzir
    audio.oncanplaythrough = function() {
      audio.play().then(() => {
        tentativasAutoplay = 0;
        audio.oncanplaythrough = null; // Remover o listener
      }).catch((error) => {
        console.error("Erro ao reproduzir próxima música:", error);
        audio.oncanplaythrough = null;
        setTimeout(() => {
          audio.play().catch(() => {});
        }, 150);
      });
    };
    
  } else {
    // Modo sequencial: usar pré-carregamento se disponível
    if (proximaMusicaPrecarregada && proximaMusicaPrecarregada.src) {
      const novoIndice = (indiceAtual + 1) % musicas.length;
      const musica = musicas[novoIndice];
      
      // Atualizar interface
      const imgEl = document.getElementById('imagem-musica');
      if (imgEl) {
        imgEl.src = musica.imagem;
        imgEl.alt = `Capa: ${musica.titulo}`;
      }
      document.getElementById('titulo').textContent = musica.titulo;
      document.getElementById('artista').textContent = musica.artista;
      fim.textContent = musica.duracao;
      fraseElement.textContent = '';
      digitarFrase(fraseElement, musica.frase);
      
      indiceAtual = novoIndice;
      updateActiveMusicInList();
      atualizarTelaBloqueio(musica);
      localStorage.setItem('ultimaMusica', indiceAtual);

      audio.src = proximaMusicaPrecarregada.src;
      proximaMusicaPrecarregada = null;
      audio.play().then(() => {
        tentativasAutoplay = 0;
        precarregarProximaMusica();
      }).catch((error) => {
        console.error("Erro ao reproduzir música pré-carregada:", error);
        setTimeout(() => {
          audio.play().catch(() => {});
        }, 150);
      });
    } else {
      // Fallback: usar a função normal de próxima música
      proximaMusica();
      audio.play().then(() => {
        tentativasAutoplay = 0;
      }).catch(() => {});
    }
  }
}

function updateUI() {
  const playIcon = playBtn.querySelector('svg');
  if (!playIcon) return;
  if (isPlaying) {
    playBtn.classList.add('playing');
    playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
  } else {
    playBtn.classList.remove('playing');
    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
  }
}

function atualizarProgresso() {
  if (!isNaN(audio.duration) && isFinite(audio.duration)) {
    barraProgresso.max = audio.duration;
    barraProgresso.value = audio.currentTime;
    inicio.textContent = formatarTempo(audio.currentTime);
  }
}
function carregarDuracao() {
  if (!isNaN(audio.duration) && isFinite(audio.duration)) {
    barraProgresso.max = audio.duration;
    fim.textContent = formatarTempo(audio.duration);
  } else {
    fim.textContent = '0:00';
  }
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

/* ====== EFEITOS VISUAIS ====== */
function criarCoracao(element) {
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const coracao = document.createElement('div');
  coracao.className = 'coracao';
  coracao.style.left = `${x - 15}px`;
  coracao.style.top = `${y - 15}px`;
  coracao.style.animation = `flutuar ${4 + Math.random() * 2}s ease-in-out forwards`;
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 6000);
}
function criarCoracaoNoClique(e) {
  if (!e.target.closest('button') && !e.target.closest('.secret-message')) {
    criarCoracao({ getBoundingClientRect: () => ({ left: e.clientX, top: e.clientY, width: 0, height: 0 }) });
  }
}
function criarPetala() {
  const p = document.createElement('div');
  p.className = 'petala';
  p.style.left = `${Math.random() * 100}vw`;
  p.style.animation = `cair ${5 + Math.random() * 10}s linear forwards`;
  p.style.opacity = `${0.3 + Math.random() * 0.7}`;
  p.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`;
  efeitosContainer.appendChild(p);
  setTimeout(() => p.remove(), 15000);
}
function criarEfeitosRomanticos() {
  for (let i = 0; i < 15; i++) setTimeout(criarPetala, i * 500);
  setInterval(criarPetala, 3000);
}

/* ====== MENSAGENS / NOTIFICAÇÕES ====== */
function mostrarMensagemSecreta() {
  const mensagens = [
    "Você é especial para mim","Gosto muito de você","Cada dia com você é único",
    "Seu sorriso me alegra","Você faz meus dias melhores","Meu coração é seu ❤️",
    "Sinto sua falta mesmo quando você está perto","Você é meu pensamento favorito",
    "Amo o jeito que você me olha","Seu abraço é meu lugar favorito","Você me completa",
    "Nada se compara ao seu carinho","Me apaixono mais a cada dia","Você é a melhor parte do meu dia",
    "Seu amor me transformou","Amo nossa conexão","Você me inspira a ser melhor",
    "Seu cheiro é meu aroma favorito","Amo nossa conversa sem fim","Você é lindo(a) por dentro e por fora",
    "Me sinto em casa no seu colo","Seu riso é minha música favorita","Você me faz a pessoa mais sortuda",
    "Amo nossos momentos juntos","Você é meu sonho realizado","Seu amor me aquece a alma",
    "Amo cada detalhe seu","Você é minha paz","Meu amor por você é eterno","Você é minha estrela-guia ⭐",
    "Amo como você me entende","Seu toque me eletriza","Você é resposta das minhas preces",
    "Me perco no seu olhar","Você é pura magia ✨","Amo nossa história","Seu amor me cura",
    "Você é meu porto seguro","Me apaixono pelo seu jeito","Você é tudo que sempre quis",
    "Nosso amor é lindo","Você me faz feliz","Amo te amar","Você é meu sempre 💫"
  ];
  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)] + " ❤️";
  mostrarNotificacao(mensagem);
}
function mostrarNotificacao(mensagem) {
  const n = document.createElement('div');
  n.className = 'notificacao-mensagem';
  n.textContent = mensagem;
  document.body.appendChild(n);
  setTimeout(() => { n.style.opacity = '0'; setTimeout(() => n.remove(), 500); }, 2000);
}
function mostrarAvisoAutoplay() {
  const aviso = document.createElement('div');
  aviso.className = 'aviso-autoplay';
  aviso.textContent = 'Clique em qualquer lugar para ativar a reprodução automática';
  document.body.appendChild(aviso);
  setTimeout(() => { aviso.style.opacity = '0'; setTimeout(() => aviso.remove(), 500); }, 3000);
}

/* ====== ERROS ÁUDIO ====== */
function tratarErroAudio() {
  console.error("Erro no áudio");
  setTimeout(proximaMusica, 1000);
}

/* ====== START ====== */
window.addEventListener('load', init);
