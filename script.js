const musicas = [
    {
      titulo: "Oceano",
      artista: "Djavan",
      imagem: "assets/oceano.png",
      frase: "Amar é navegar em você… e mesmo perdido, eu me encontro no teu mar. 🌊💙",
      audio: "assets/Djavan - Oceano.mp3",
      duracao: "4:17"
    },
    {
      titulo: "Lutar pelo que é meu",
      artista: "Charlie Brown Jr.",
      imagem: "assets/lutar.png",
      frase: "Mesmo em dias nublados, teu sorriso é meu sol. Lutar pelo que é nosso sempre vale a pena. ☀️❤️",
      audio: "assets/Charlie Brown Jr - Lutar pelo que é meu.mp3",
      duracao: "3:26"
    },
    {
      titulo: "Thinking Out Loud",
      artista: "Ed Sheeran",
      imagem: "assets/thinking.png",
      frase: "Quando nossas pernas não puderem mais dançar, dançarei contigo no coração. 💃🕺",
      audio: "assets/Ed Sheeran - Thinking Out Loud.mp3",
      duracao: "4:41"
    },
    {
        titulo: "Por Onde Andei",
        artista: "Nando Reis",
        imagem: "assets/por-onde-andei.png",
        frase: "Mesmo longe de você, foi só em você que pensei. Ainda dá tempo de amar melhor. 💌",
        audio: "assets/nando-reis-por-onde-andei.mp3",
        duracao: "4:49"
      },
      {
        titulo: "Velha Infância",
        artista: "Tribalistas",
        imagem: "assets/velha-infancia.png",
        frase: "O teu riso me acalma, teu abraço é meu lar. Eu gosto de você como nunca gostei de ninguém. 🏡❤️",
        audio: "assets/Tribalistas - Velha Infância.mp3",
        duracao: "4:05"
      },
      {
        titulo: "Telegrama",
        artista: "Zeca Baleiro",
        imagem: "assets/telegrama.png",
        frase: "Se eu pudesse te escrever em todas as línguas, diria o quanto te amo… mesmo em silêncio. 📝💘",
        audio: "assets/Zeca Baleiro - Telegrama.mp3",
        duracao: "4:26"
      },
      {
        titulo: "You're Beautiful",
        artista: "James Blunt",
        imagem: "assets/youre-beautiful.png",
        frase: "Te vi no meio da multidão… e naquele instante soube: você é o meu destino. 💫",
        audio: "assets/James Blunt - You're Beautiful.mp3",
        duracao: "3:29"
      },
      {
        titulo: "If I Ain’t Got You",
        artista: "Alicia Keys",
        imagem: "assets/if-i-aint-got-you.png",
        frase: "Eu trocaria o mundo inteiro por um instante contigo. Se não for você, não quero mais ninguém. 🌍💖",
        audio: "assets/alicia-keys-if-i-aint-got-you.mp3",
        duracao: "3:48"
      },
      {
        titulo: "I'm Yours",
        artista: "Jason Mraz",
        imagem: "assets/im-yours.png",
        frase: "Nosso tempo é agora. E o meu destino… é ser teu. ⏳💑",
        audio: "assets/jason-mraz-im-yours.mp3",
        duracao: "4:06"
      }
  ];
  
  let indiceAtual = 0;
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('play');
  const anteriorBtn = document.getElementById('anterior');
  const proximoBtn = document.getElementById('proximo');
  const barraProgresso = document.getElementById('barra-progresso');
  const inicio = document.getElementById('inicio');
  const fim = document.getElementById('fim');
  const efeitosContainer = document.getElementById('efeitos-romanticos');
  
  function carregarMusica(indice) {
    const m = musicas[indice];
    document.getElementById('titulo').textContent = m.titulo;
    document.getElementById('artista').textContent = m.artista;
    document.getElementById('imagem-musica').src = m.imagem;
    
    const fraseElement = document.getElementById('frase');
    fraseElement.textContent = '';
    typeWriter(fraseElement, m.frase);
    
    audio.src = m.audio;
    fim.textContent = m.duracao;
    barraProgresso.value = 0;
    inicio.textContent = '0:00';
    document.getElementById('imagem-musica').classList.remove('playing');
  }
  
  function typeWriter(element, text, i = 0) {
    if (i < text.length) {
      element.textContent = text.substring(0, i+1);
      setTimeout(() => typeWriter(element, text, i+1), 50);
    }
  }
  
  function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? '0' + seg : seg}`;
  }
  
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    criarCoracao(playBtn.offsetLeft + playBtn.offsetWidth/2, playBtn.offsetTop + playBtn.offsetHeight/2);
  });
  
  proximoBtn.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % musicas.length;
    carregarMusica(indiceAtual);
    audio.play();
  });
  
  anteriorBtn.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + musicas.length) % musicas.length;
    carregarMusica(indiceAtual);
    audio.play();
  });
  
  audio.addEventListener('timeupdate', () => {
    barraProgresso.value = audio.currentTime;
    inicio.textContent = formatarTempo(audio.currentTime);
  });
  
  audio.addEventListener('loadedmetadata', () => {
    barraProgresso.max = audio.duration;
  });
  
  barraProgresso.addEventListener('input', () => {
    audio.currentTime = barraProgresso.value;
  });
  
  audio.addEventListener('play', () => {
    document.getElementById('imagem-musica').classList.add('playing');
    playBtn.textContent = '⏸️';
  });
  
  audio.addEventListener('pause', () => {
    document.getElementById('imagem-musica').classList.remove('playing');
    playBtn.textContent = '▶️';
  });
  
  audio.addEventListener('ended', () => {
    proximoBtn.click();
  });
  
  function criarCoracao(x, y) {
    const coracao = document.createElement('div');
    coracao.className = 'coracao';
    coracao.style.left = `${x - 15}px`;
    coracao.style.top = `${y - 15}px`;
    coracao.style.animation = `flutuar ${4 + Math.random() * 2}s ease-in-out forwards`;
    document.body.appendChild(coracao);
    setTimeout(() => coracao.remove(), 5000);
  }
  
  function criarPetala() {
    const petala = document.createElement('div');
    petala.className = 'petala';
    petala.style.left = `${Math.random() * 100}vw`;
    petala.style.animation = `cair ${5 + Math.random() * 10}s linear forwards`;
    petala.style.opacity = `${0.3 + Math.random() * 0.7}`;
    petala.style.transform = `scale(${0.5 + Math.random()})`;
    efeitosContainer.appendChild(petala);
    setTimeout(() => petala.remove(), 15000);
  }
  
  for (let i = 0; i < 15; i++) {
    setTimeout(criarPetala, i * 500);
  }
  
  document.addEventListener('click', (e) => {
    if (!e.target.closest('button') && !e.target.closest('.mensagem-secreta')) {
      criarCoracao(e.clientX, e.clientY);
    }
  });
  
  function ajustarAltura() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    const container = document.querySelector('.player-container');
    container.style.minHeight = 'calc(var(--vh, 1vh) * 100)';
    
    if (window.innerHeight < 600) {
      container.style.padding = '0.5rem';
    }
  }
  
  window.addEventListener('load', () => {
    carregarMusica(indiceAtual);
    ajustarAltura();
  });
  
  window.addEventListener('resize', ajustarAltura);
  window.addEventListener('orientationchange', ajustarAltura);
  
  document.querySelector('.mensagem-secreta').addEventListener('click', () => {
    const mensagens = [
      "Você é especial para mim",
      "Meu coração é seu",
      "Cada dia com você é único",
      "Seu sorriso me completa",
      "Amo você mais que tudo"
    ];
    alert(mensagens[Math.floor(Math.random() * mensagens.length)] + " ❤️");
  });