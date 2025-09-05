<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Player de Músicas Românticas</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #ffebee 0%, #fce4ec 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            overflow-x: hidden;
        }
        
        .player-container {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            padding: 25px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header {
            margin-bottom: 20px;
        }
        
        .header h1 {
            color: #d32f2f;
            font-size: 28px;
            margin-bottom: 5px;
        }
        
        .header p {
            color: #f48fb1;
            font-size: 16px;
        }
        
        .imagem-container {
            width: 250px;
            height: 250px;
            margin: 0 auto 25px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            position: relative;
            border: 5px solid #ffcdd2;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.4); }
            70% { box-shadow: 0 0 0 15px rgba(211, 47, 47, 0); }
            100% { box-shadow: 0 0 0 0 rgba(211, 47, 47, 0); }
        }
        
        .imagem-container.playing {
            animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        #imagem-musica {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .info-musica {
            margin-bottom: 20px;
        }
        
        #titulo {
            font-size: 22px;
            color: #d32f2f;
            margin-bottom: 5px;
        }
        
        #artista {
            font-size: 18px;
            color: #f48fb1;
            margin-bottom: 15px;
        }
        
        .frase-romantica {
            background: #fce4ec;
            padding: 15px;
            border-radius: 15px;
            margin-bottom: 20px;
            font-style: italic;
            color: #c2185b;
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .controles {
            margin-bottom: 20px;
        }
        
        .botoes {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
        }
        
        button {
            background: #d32f2f;
            color: white;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
        }
        
        button:hover {
            background: #b71c1c;
            transform: scale(1.05);
        }
        
        #play {
            width: 70px;
            height: 70px;
            font-size: 24px;
        }
        
        .barra-progresso-container {
            margin-bottom: 10px;
        }
        
        #barra-progresso {
            width: 100%;
            height: 6px;
            -webkit-appearance: none;
            appearance: none;
            background: #ffcdd2;
            border-radius: 10px;
            outline: none;
            margin-bottom: 5px;
        }
        
        #barra-progresso::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #d32f2f;
            cursor: pointer;
        }
        
        .tempo {
            display: flex;
            justify-content: space-between;
            color: #f48fb1;
            font-size: 14px;
        }
        
        .mensagem-secreta {
            margin-top: 20px;
            font-size: 14px;
            color: #f48fb1;
            cursor: pointer;
            text-decoration: underline;
        }
        
        /* Efeitos românticos */
        .coracao {
            position: absolute;
            width: 30px;
            height: 30px;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23d32f2f"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>');
            background-size: contain;
            z-index: 100;
            pointer-events: none;
        }
        
        .petala {
            position: absolute;
            width: 20px;
            height: 20px;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23f48fb1"><path d="M12 22s8-4 8-10c0-2.5-1.5-4-4-4-1.4 0-3 .8-4 2-1-1.2-2.6-2-4-2-2.5 0-4 1.5-4 4 0 6 8 10 8 10z"/></svg>');
            background-size: contain;
            z-index: 99;
            pointer-events: none;
        }
        
        @keyframes flutuar {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100px) rotate(20deg); opacity: 0; }
        }
        
        @keyframes cair {
            0% { transform: translateY(-100px) rotate(0deg); opacity: 0.7; }
            100% { transform: translateY(100vh) rotate(90deg); opacity: 0; }
        }
        
        footer {
            margin-top: 20px;
            color: #f48fb1;
            font-size: 12px;
        }
        
        /* Ajustes para mobile */
        @media (max-width: 480px) {
            .player-container {
                padding: 15px;
            }
            
            .imagem-container {
                width: 200px;
                height: 200px;
            }
            
            #titulo {
                font-size: 20px;
            }
            
            #artista {
                font-size: 16px;
            }
            
            button {
                width: 50px;
                height: 50px;
            }
            
            #play {
                width: 60px;
                height: 60px;
            }
        }

        .ios-warning {
            display: none;
            background: #ffeb3b;
            color: #333;
            padding: 10px;
            border-radius: 10px;
            margin-bottom: 15px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="player-container">
        <div class="ios-warning" id="ios-warning">
            Para reprodução em segundo plano no iPhone, adicione este site à sua tela inicial e abra como app.
        </div>

        <div class="header">
            <h1>Músicas Românticas</h1>
            <p>Para momentos especiais</p>
        </div>
        
        <div class="imagem-container" id="imagem-container">
            <img id="imagem-musica" src="assets/oceano.png" alt="Capa da música">
        </div>
        
        <div class="info-musica">
            <h2 id="titulo">Oceano</h2>
            <p id="artista">Djavan</p>
        </div>
        
        <div class="frase-romantica">
            <p id="frase">Amar é navegar em você… e mesmo perdido, eu me encontro no teu mar. 🌊💙</p>
        </div>
        
        <div class="controles">
            <div class="botoes">
                <button id="anterior">⏮️</button>
                <button id="play">▶️</button>
                <button id="proximo">⏭️</button>
            </div>
            
            <div class="barra-progresso-container">
                <input type="range" id="barra-progresso" min="0" value="0">
            </div>
            
            <div class="tempo">
                <span id="inicio">0:00</span>
                <span id="fim">4:17</span>
            </div>
        </div>
        
        <div class="mensagem-secreta">
            <p>Clique aqui para uma mensagem secreta</p>
        </div>
        
        <footer>
            <p>Desenvolvido com ❤️ para você</p>
        </footer>
    </div>
    
    <div id="efeitos-romanticos"></div>
    
    <audio id="audio" crossorigin="anonymous"></audio>
    
    <script>
        // Detectar se é iOS
        function isIOS() {
            return [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
            ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
        }

        // Mostrar aviso para usuários iOS
        if (isIOS()) {
            document.getElementById('ios-warning').style.display = 'block';
        }

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
        let audioContext;
        let source;
        
        // Inicializar áudio para iOS
        function inicializarAudio() {
            try {
                // Criar contexto de áudio
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                
                // Configurar o elemento de áudio
                const audio = document.getElementById('audio');
                
                // Criar fonte de áudio
                source = audioContext.createMediaElementSource(audio);
                
                // Conectar aos alto-falantes
                source.connect(audioContext.destination);
                
                console.log("Áudio inicializado com sucesso para iOS");
            } catch (e) {
                console.error("Erro ao inicializar áudio:", e);
            }
        }
        
        // Inicializar quando o usuário interagir pela primeira vez (requisito do iOS)
        function initOnFirstInteraction() {
            document.addEventListener('click', function() {
                if (!audioContext) {
                    inicializarAudio();
                }
            }, { once: true });
        }

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
            if (audioContext && audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            if (audio.paused) {
                audio.play().catch(e => {
                    console.log("Erro ao reproduzir áudio:", e);
                    // Tentar reinicializar se houver erro
                    inicializarAudio();
                    setTimeout(() => audio.play(), 100);
                });
            } else {
                audio.pause();
            }
            criarCoracao(playBtn.offsetLeft + playBtn.offsetWidth/2, playBtn.offsetTop + playBtn.offsetHeight/2);
        });
        
        proximoBtn.addEventListener('click', () => {
            indiceAtual = (indiceAtual + 1) % musicas.length;
            carregarMusica(indiceAtual);
            audio.play().catch(e => console.log("Erro ao reproduzir próxima música:", e));
        });
        
        anteriorBtn.addEventListener('click', () => {
            indiceAtual = (indiceAtual - 1 + musicas.length) % musicas.length;
            carregarMusica(indiceAtual);
            audio.play().catch(e => console.log("Erro ao reproduzir música anterior:", e));
        });
        
        audio.addEventListener('timeupdate', () => {
            if (!isNaN(audio.duration)) {
                barraProgresso.value = audio.currentTime;
                inicio.textContent = formatarTempo(audio.currentTime);
            }
        });
        
        audio.addEventListener('loadedmetadata', () => {
            if (!isNaN(audio.duration)) {
                barraProgresso.max = audio.duration;
            }
        });
        
        barraProgresso.addEventListener('input', () => {
            audio.currentTime = barraProgresso.value;
        });
        
        audio.addEventListener('play', () => {
            document.getElementById('imagem-musica').classList.add('playing');
            playBtn.textContent = '⏸️';
            
            // Manter a tela ativa para evitar que o iOS pause o áudio
            if ('wakeLock' in navigator) {
                try {
                    navigator.wakeLock.request('screen');
                } catch (err) {
                    console.log('Wake Lock não suportado:', err);
                }
            }
        });
        
        audio.addEventListener('pause', () => {
            document.getElementById('imagem-musica').classList.remove('playing');
            playBtn.textContent = '▶️';
        });
        
        audio.addEventListener('ended', () => {
            proximoBtn.click();
        });
        
        // Gerenciar quando a página perde o foco (para iOS)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && !audio.paused) {
                // Tentar manter o áudio tocando em segundo plano
                audio.play().catch(e => console.log("Erro ao reproduzir em segundo plano:", e));
            }
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
            initOnFirstInteraction();
            
            // Inicializar áudio após carregamento (para alguns navegadores)
            setTimeout(inicializarAudio, 1000);
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

        // Service Worker para suporte a segundo plano (se suportado)
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }).catch(function(error) {
                console.log('ServiceWorker registration failed: ', error);
            });
        }
    </script>
</body>
</html>