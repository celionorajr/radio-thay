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
  frase: "Não sei se é amor, sei que é algo lindo que sinto por você. Algo que me acalma, me completa e me faz querer compartilhar cada day ao seu lado. 🌅",
  audio: "assets/bob-marley-is-this-love.mp3",  duracao: "3:52", favorita: true
  },
  
  { titulo: "Is This Love", artista: "Whitesnake", imagem: "assets/whitesnake-is-this-love.png",
  frase: "Este amor é intenso, real e veio para ficar. Não é dúvida, é certeza. Não é paixão, é destino. É você e eu, para sempre. ❤️‍🔥",
  audio: "assets/whitesnake-is-this-love.mp3", duracao: "4:44", favorita: true
  }
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
let appInBackground = false;
let keepAliveInterval = null;

/* ====== iOS / Standalone detection + estado background ====== */
const isIOS = /iP(hone|ad|od)/i.test(navigator.userAgent);
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

const estadoBG = {
  wasPlaying: false,
  savedTime: 0,
  savedIndex: 0,
  stamp: 0
};

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

  // Adicionar detector de visibilidade
  document.addEventListener('visibilitychange', handleVisibilityChange);
  
  // Configurar Media Session para melhor controle em segundo plano
  setupMediaSession();

  // Iniciar keep-alive para reprodução em segundo plano
  startKeepAlive();

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

/* ====== CONTROLE DE VISIBILIDADE (SEGUNDO PLANO) ====== */
function handleVisibilityChange() {
  if (document.hidden) {
    console.log("App em segundo plano");
    appInBackground = true;
    
    // Tentar manter a reprodução ativa
    if (isPlaying) {
      // Forçar uma reprodução quando entrar em segundo plano
      setTimeout(() => {
        if (audio.paused && isPlaying) {
          console.log("Tentando retomar reprodução em segundo plano");
          audio.play().catch(e => console.log("Erro ao reproduzir em segundo plano:", e));
        }
      }, 300);
    }
  } else {
    console.log("App em primeiro plano");
    appInBackground = false;
  }
}

/* ====== MEDIA SESSION (CONTROLES EXTERNOS) ====== */
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    try {
      // Configurar handlers para controles externos (notificação, fones de ouvido, etc.)
      navigator.mediaSession.setActionHandler('play', () => {
        audio.play().catch(e => console.error("Erro ao reproduzir via mediaSession:", e));
      });
      
      navigator.mediaSession.setActionHandler('pause', () => {
        audio.pause();
      });
      
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        musicaAnterior();
      });
      
      navigator.mediaSession.setActionHandler('nexttrack', () => {
        proximaMusica();
      });
      
      // Atualizar a posição periodicamente
      setInterval(syncMediaSessionPosition, 1000);
    } catch (error) {
      console.error("Erro ao configurar mediaSession:", error);
    }
  }
}

/* ====== KEEP-ALIVE PARA SEGUNDO PLANO ====== */
function startKeepAlive() {
  if (keepAliveInterval) clearInterval(keepAliveInterval);
  
  keepAliveInterval = setInterval(() => {
    if (appInBackground && isPlaying && audio.paused) {
      console.log("Keep-alive: tentando retomar reprodução em segundo plano");
      audio.play().catch(e => console.log("Keep-alive não conseguiu retomar:", e));
    }
  }, 30000); // Tentar a cada 30 segundos
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

  // Guarda posição/estado ao sair (ir para segundo plano)
  window.addEventListener('pagehide', () => {
    estadoBG.wasPlaying = !audio.paused;
    estadoBG.savedTime = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    estadoBG.savedIndex = indiceAtual;
    estadoBG.stamp = performance.now();
  });

  // Ao voltar para o app (primeiro repaint)
  window.addEventListener('pageshow', () => {
    // iOS PWA costuma "avançar" o currentTime – nós voltamos exatamente de onde paramos
    const drift = Math.abs(audio.currentTime - estadoBG.savedTime);
    const TOL = 1.5; // tolerância em segundos

    // Se mudou de música indevidamente ou avançou demais, reponha o estado
    if (indiceAtual !== estadoBG.savedIndex || drift > TOL) {
      try { audio.currentTime = estadoBG.savedTime; } catch {}
      updateUI();
    }

    // Se estava tocando, tentamos retomar automaticamente
    if (estadoBG.wasPlaying) {
      audio.play().catch(() => {});
    }

    // Se a faixa terminou enquanto estávamos fora (estado marcado), avance corretamente
    if (audio.ended) {
      handleEnded();
    }
  });

  // Opcional: no iOS em modo standalone, pausar explicitamente ao esconder evita "engasgos"
  document.addEventListener('visibilitychange', () => {
    if (isIOS && isStandalone) {
      if (document.hidden) {
        // Salva e pausa – o iOS ia suspender mesmo; assim prevenimos saltos
        estadoBG.wasPlaying = !audio.paused;
        estadoBG.savedTime = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
        estadoBG.savedIndex = indiceAtual;
        audio.pause();
      }
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
  //atualizarFavicon(musica.imagem);
}

function syncMediaSessionPosition() {
  if ('mediaSession' in navigator && typeof navigator.mediaSession.setPositionState === 'function') {
    if (Number.isFinite(audio.duration) && Number.isFinite(audio.currentTime)) {
      try {
        navigator.mediaSession.setPositionState({
          duration: audio.duration,
          position: audio.currentTime,
          playbackRate: audio.playbackRate || 1
        });
      } catch {}
    }
  }
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
    
    const tentarPlay = () => {
      audio.play()
        .catch((e) => {
          console.error("Erro ao reproduzir:", e);
          
          // Se for uma restrição de autoplay, esperar interação
          if (e.name === 'NotAllowedError') {
            mostrarNotificacao("Clique para reproduzir a música");
          } else {
            // Para outros erros, tentar recarregar e reproduzir
            setTimeout(() => {
              carregarMusica(indiceAtual);
              audio.play().catch(()=>{});
            }, 200);
          }
        });
    };
    
    tentarPlay();
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
      ${musica.favorita ? '<span class="favorite-icon">❤️</span>' : ''}
    `;
    item.addEventListener('click', () => {
      if (isTyping) clearTimeout(typingInterval);
      carregarMusica(index);
      if (isPlaying) {
        audio.play().catch(() => {});
      }
      toggleListaMusicas();
    });
    listaContainer.appendChild(item);
  });
}
function filtrarMusicas() {
  const termo = searchInput.value.toLowerCase();
  const itens = listaContainer.querySelectorAll('.music-item');
  itens.forEach((item, index) => {
    const titulo = musicas[index].titulo.toLowerCase();
    const artista = musicas[index].artista.toLowerCase();
    if (titulo.includes(termo) || artista.includes(termo)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}
function updateActiveMusicInList() {
  const itens = listaContainer.querySelectorAll('.music-item');
  itens.forEach((item, index) => {
    if (index === indiceAtual) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

/* ====== PROGRESSO ====== */
function carregarDuracao() {
  if (Number.isFinite(audio.duration)) {
    barraProgresso.max = audio.duration;
    fim.textContent = formatarTempo(audio.duration);
  }
}
function atualizarProgresso() {
  if (Number.isFinite(audio.currentTime)) {
    barraProgresso.value = audio.currentTime;
    inicio.textContent = formatarTempo(audio.currentTime);
  }
}
function seekAudio() {
  audio.currentTime = barraProgresso.value;
}
function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const sec = Math.floor(segundos % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

/* ====== EVENTOS DE ÁUDIO ====== */
function handlePlay() {
  isPlaying = true;
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  playBtn.classList.add('playing');
  if (vinylHeart) vinylHeart.classList.add('playing');
}
function handlePause() {
  isPlaying = false;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
  playBtn.classList.remove('playing');
  if (vinylHeart) vinylHeart.classList.remove('playing');
}
function handleEnded() {
  proximaMusica();
}
function tratarErroAudio(e) {
  console.error("Erro no áudio:", e);
  mostrarNotificacao("Erro ao carregar música. Tentando próxima...");
  setTimeout(() => proximaMusica(), 1000);
}

/* ====== EFEITOS ====== */
function criarCoracaoNoClique(e) {
  if (e.target.closest('button') || e.target.closest('.music-item')) return;
  criarCoracao(e);
}
function criarCoracao(elemento) {
  const coracao = document.createElement('div');
  coracao.className = 'coracao-flutuante';
  coracao.innerHTML = '❤️';
  document.body.appendChild(coracao);
  const x = elemento ? elemento.getBoundingClientRect().left + elemento.offsetWidth / 2 : Math.random() * window.innerWidth;
  const y = elemento ? elemento.getBoundingClientRect().top + elemento.offsetHeight / 2 : Math.random() * window.innerHeight;
  coracao.style.left = `${x}px`;
  coracao.style.top = `${y}px`;
  setTimeout(() => { coracao.remove(); }, 2000);
}
function criarEfeitosRomanticos() {
  const efeitos = ['💖', '✨', '💕', '💘', '💓', '💝', '💞'];
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const efeito = document.createElement('div');
      efeito.className = 'efeito-romantico';
      efeito.innerHTML = efeitos[Math.floor(Math.random() * efeitos.length)];
      efeito.style.left = `${Math.random() * 100}%`;
      efeito.style.top = `${Math.random() * 100}%`;
      efeito.style.animationDuration = `${Math.random() * 3 + 2}s`;
      efeitosContainer.appendChild(efeito);
      setTimeout(() => { efeito.remove(); }, 5000);
    }, i * 300);
  }
}

/* ====== MENSAGENS ====== */
function mostrarMensagemSecreta() {
  const mensagens = [
    "Você é a pessoa mais incrível que já conheci!",
    "Cada momento contigo é especial 💖",
    "Seu sorriso ilumina meus dias ☀️",
    "Obrigado por ser quem você é!",
    "Estou sempre pensando em você...",
    "Você me faz tão feliz! 😊",
    "Nada se compara ao que sinto por você ❤️",
    "Você é minha música favorita 🎵"
  ];
  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
  mostrarNotificacao(mensagem);
}
function mostrarNotificacao(texto) {
  const notificacao = document.createElement('div');
  notificacao.className = 'notificacao';
  notificacao.textContent = texto;
  document.body.appendChild(notificacao);
  setTimeout(() => { notificacao.classList.add('show'); }, 10);
  setTimeout(() => { notificacao.classList.remove('show'); setTimeout(() => { notificacao.remove(); }, 300); }, 3000);
}
function mostrarAvisoAutoplay() {
  if (isIOS && !isStandalone) {
    mostrarNotificacao("Para melhor experiência, adicione este app à sua tela inicial 📱");
  }
}

/* ====== INICIAR APLICAÇÃO ====== */
document.addEventListener('DOMContentLoaded', init);

// Adicionar suporte para teclas de mídia
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    togglePlay();
  } else if (e.code === 'ArrowRight') {
    proximaMusica();
  } else if (e.code === 'ArrowLeft') {
    musicaAnterior();
  }
});