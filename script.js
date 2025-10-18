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
  },
  
  {  titulo: "A Noite Mais Linda Do Mundo (A Felicidade)", artista: "Odair José", imagem: "assets/odair-jose-a-noite-mais-linda-do-mundo.png",
  frase: "A noite mais linda do mundo não é feita de estrelas, mas sim do seu abraço, do seu sorriso e da felicidade de te ter ao meu lado. 🌙💫",
  audio: "assets/odair-jose-a-noite-mais-linda-do-mundo.mp3", duracao: "3:45", favorita: true
  },
  
  { titulo: "Planta sem Raiz", artista: "Odair José", imagem: "assets/odair-jose-planta-sem-raiz.png",
  frase: "Longe de você, sou como planta sem raiz: não me sustento, não cresço, não vivo. Só sobrevivo. Preciso de você para me completar. 🌿💔",
  audio: "assets/odair-jose-planta-sem-raiz.mp3", duracao: "3:20", favorita: true
  },

  { titulo: "Can't Help Falling in Love", artista: "Elvis Presley", imagem: "assets/elvis-cant-help-falling-in-love.png",
  frase: "Não foi uma escolha, foi um destino. Meu coração simplesmente se rendeu ao seu, naturalmente, como um rio que flui para o mar. 🌊💙",
  audio: "assets/elvis-cant-help-falling-in-love.mp3", duracao: "3:00", favorita: true
  },
  
  { titulo: "I Wanna Be Yours", artista: "Arctic Monkeys", imagem: "assets/arctic-monkeys-i-wanna-be-yours.png",
  frase: "Não quero ser só mais um na sua vida. Quero ser seu porto seguro, seu café quente de manhã, seu cobertor no frio. Quero ser seu. Ponto. 🖤",
  audio: "assets/arctic-monkeys-i-wanna-be-yours.mp3", duracao: "3:04", favorita: true
  },
  
  { titulo: "Something", artista: "The Beatles", imagem: "assets/beatles-something.png",
  frase: "Há algo no seu jeito que me atrai como nenhum outro. Não sei explicar, não preciso – só sei que quero viver ao seu lado para sempre. ✨",
  audio: "assets/beatles-something.mp3", duracao: "3:03", favorita: true
  },
  
  {
  titulo: "Love Gun", artista: "KISS", imagem: "assets/kiss-love-gun.png",
  frase: "Meu amor por você não é delicado – é intenso, quente e cheio de atitude. Como um tiro certeiro no alvo do coração. 💘🔫",
  audio: "assets/kiss-love-gun.mp3", duracao: "3:18", favorita: true
  },
  
  { titulo: "All for Love", artista: "Bryan Adams, Rod Stewart & Sting", imagem: "assets/bryan-adams-rod-stewart-sting-all-for-love.png",
  frase: "Por você, eu enfrentaria qualquer desafio, cruzaria oceanos, desafiaria o mundo. Porque quando se trata de nós, é tudo ou nada – e eu escolho tudo. 🌊❤️", audio: "assets/bryan-adams-rod-stewart-sting-all-for-love.mp3", duracao: "4:50", favorita: true
  },
  
  { titulo: "Just One Day", artista: "BTS", imagem: "assets/bts-just-one-day.png",
  frase: "Me dê apenas um dia com você – longe do mundo, das obrigações, do tempo. Só eu, você e a certeza de que esse dia seria eterno. 🌙✨",
  audio: "assets/bts-just-one-day.mp3", duracao: "3:59", favorita: true
  },
  
  { titulo: "Heart Attack", artista: "Chuu (LOONA)", imagem: "assets/chuu-heart-attack.png",
  frase: "Você me deu um ataque cardíaco de tanto amor! Meu coração dispara, minha mente gira... e eu não me importo, porque é por você. 💘⚡",
  audio: "assets/chuu-heart-attack.mp3", duracao: "3:14", favorita: true
  },
  
  { titulo: "Destiny", artista: "Lovelyz", imagem: "assets/lovelyz-destiny.png",
  frase: "Algumas histórias são escritas pelas estrelas. A nossa é uma delas. Você não foi uma escolha, foi um destino. E eu não trocaria nosso final feliz por nada. ✨📖",
  audio: "assets/lovelyz-destiny.mp3", duracao: "3:51", favorita: true
  },
  
  { titulo: "Always Somewhere", artista: "Scorpions", imagem: "assets/scorpions-always-somewhere.png",
  frase: "Não importa a distância, o meu coração está sempre em algum lugar perto de você. Onde quer que eu vá, levo seu amor comigo. 🌍❤",
  audio: "assets/scorpions-always-somewhere.mp3", duracao: "4:58", favorita: true
  },
  
  { titulo: "peach eyes", artista: "wave to earth", imagem: "assets/wave-to-earth-peach-eyes.png",
  frase: "Seus olhos são como pêssegos: doces, suaves e cheios de luz. Eles me acalmam, me inspiram e me fazem acreditar que o amor pode ser simples assim. 🍑✨",
  audio: "assets/wave-to-earth-peach-eyes.mp3", duracao: "3:45", favorita: true
  },
  
  { titulo: "Segredos", artista: "Frejat", imagem: "assets/frejat-segredos.png",
  frase: "Entre nós não existem segredos, só verdades que guardamos a sete chaves no nosso cantinho. Meu maior medo é não ter você para dividir meus silêncios. 🤫❤",
  audio: "assets/frejat-segredos.mp3", duracao: "4:22", favorita: true
  },
  
  { titulo: "Eu Sei Que Vou Te Amar", artista: "Vinicius de Moraes & Tom Jobim", imagem: "assets/vinicius-tom-eu-sei-que-vou-te-amar.png",
  frase: "Eu sei que vou te amar até o último segundo da minha existência. Porque nosso amor não cabe no tempo – é eterno, como a melodia que não tem fim. 🌌",
  audio: "assets/vinicius-tom-eu-sei-que-vou-te-amar.mp3", duracao: "3:50", favorita: true
  },
  
  { titulo: "Você", artista: "Tim Maia", imagem: "assets/tim-maia-voce.png",
  frase: "Você não é uma opção, é uma necessidade. É a batida do meu coração, o ritmo da minha alma, a razão do meu sorriso. Não existe eu sem você. 💛",
  audio: "assets/tim-maia-voce.mp3", duracao: "4:24", favorita: true
  },
  
  { titulo: "Linda", artista: "Roupa Nova", imagem: "assets/roupa-nova-linda.png",
  frase: "Você é linda de um jeito que vai além do espelho. É a luz que acorda meu dia, a melodia que embala meus sonhos, a poesia que eu sempre quis viver. ✨📖",
  audio: "assets/roupa-nova-linda.mp3", duracao: "4:15", favorita: true
  },

  { titulo: "Ela É Demais", artista: "Rick & Renner", imagem: "assets/rick-renner-ela-e-demais.png",
  frase: "Você é demais em tudo: no sorriso, no abraço, no jeito de ser. E eu tenho orgulho de dizer por aí: essa mulher maravilhosa é minha! 💃❤",
  audio: "assets/rick-renner-ela-e-demais.mp3", duracao: "3:35", favorita: true
  },

  { titulo: "Ordinary", artista: "Alex Warren", imagem: "assets/alex-warren-ordinary.png",
  frase: "Nosso amor não precisa de holofotes nem de grandes gestos. É na simplicidade de um abraço, na verdade de um olhar, que ele se torna extraordinário. E eu não troco isso por nada. 🌧❤",
  audio: "assets/alex-warren-ordinary.mp3", duracao: "3:30", favorita: true
  },
  
  { titulo: "Yellow", artista: "Coldplay", imagem: "assets/coldplay-yellow.png",
  frase: "Para você, eu atravessaria o universo. Escreveria uma canção em cada estrela, pintaria o céu de amarelo e diria: você é a luz que eu sempre busquei. 💫",
  audio: "assets/coldplay-yellow.mp3", duracao: "4:29", favorita: true
  },
  { titulo: "we fell in love in october", artista: "girl in red", imagem: "assets/girl-in-red-we-fell-in-love-in-october.png",
  frase: "O outono chegou trazendo folhas secas e o seu amor. E mesmo com o frio, me sinto mais aquecido do que nunca – porque tenho você. 🧣☕", audio: "assets/girl-in-red-we-fell-in-love-in-october.mp3", duracao: "3:05", favorita: true
  },
  
  { titulo: "Die With A Smile", artista: "Lady Gaga & Bruno Mars", imagem: "assets/lady-gaga-bruno-mars-die-with-a-smile.png",
  frase: "Se um dia a vida nos der o adeus final, que seja de mãos dadas, de corações cheios e com um sorriso no rosto – porque cada instante ao seu lado valeu uma eternidade. 🌅❤",
  audio: "assets/lady-gaga-bruno-mars-die-with-a-smile.mp3", duracao: "4:25", favorita: true
  },
  
  {
  titulo: "Pra Você Guardei o Amor", artista: "Nando Reis & Ana Cañas", imagem: "assets/nando-reis-ana-canas-pra-voce-guardei-o-amor.png",
  frase: "Eu guardei o amor mais puro, mais verdadeiro, mais meu... para você. Porque desde sempre soube que existiria alguém como você para recebê-lo. E valeu cada segundo de espera. 💖",
  audio: "assets/nando-reis-ana-canas-pra-voce-guardei-o-amor.mp3", duracao: "3:50", favorita: true
  },
  
  { titulo: "Cheia de Charme", artista: "Guilherme Arantes", imagem: "assets/guilherme-arantes-cheia-de-charme.png",
  frase: "Você é cheia de charme, do jeito mais puro e verdadeiro. Não é sobre pose, é sobre essência. E eu me encanto mais a cada dia com a pessoa incrível que você é. 💫",
  audio: "assets/guilherme-arantes-cheia-de-charme.mp3", duracao: "3:45", favorita: true
  },
  
  { titulo: "OMG", artista: "NewJeans", imagem: "assets/newjeans-omg.png",
  frase: "Só de te ver, meu coração diz 'OMG!'. Você me deixa sem reação, sem palavras, sem jeito... E eu adoro cada segundo disso! 💖",
  audio: "assets/newjeans-omg.mp3", duracao: "3:32", favorita: true
  },
  
  { titulo: "Killin' It Girl", artista: "j-hope feat. GloRilla", imagem: "assets/jhope-killin-it-girl.png",
  frase: "Você chega e domina o ambiente. É confiante, poderosa, dona do seu mundo. E eu não me canso de admirar como você está 'killin' it' em tudo que faz. 💃🔥",
  audio: "assets/jhope-killin-it-girl.mp3", duracao: "2:45", favorita: true
  },
  
  { titulo: "I Will Always Love You", artista: "Whitney Houston", imagem: "assets/whitney-houston-i-will-always-love-you.png",
  frase: "Eu vou te amar para sempre. Não importa a distância, o tempo ou o destino. Você ficou marcado em mim, e levo seu amor em cada batida do meu coração. 💖",
  audio: "assets/whitney-houston-i-will-always-love-you.mp3", duracao: "4:32", favorita: true
  },
  
  { titulo: "Say Yes To Heaven", artista: "Lana Del Rey", imagem: "assets/lana-del-rey-say-yes-to-heaven.png",
  frase: "Se o céu me perguntasse se eu te amo, eu diria 'sim' sem hesitar. Porque você é meu paraíso na Terra, minha paz, minha eternidade. 🌌",
  audio: "assets/lana-del-rey-say-yes-to-heaven.mp3", duracao: "3:45", favorita: true
  },
  
  { titulo: "All of Me", artista: "John Legend", imagem: "assets/john-legend-all-of-me.png",
  frase: "Eu te amo com tudo que tenho e com tudo que sou. Cada detalhe, cada imperfeição, cada sonho. Você é minha história completa, meu 'all of me' pertence a você. 💞",
  audio: "assets/john-legend-all-of-me.mp3", duracao: "4:30", favorita: true
  },
  
  { titulo: "Meu Abrigo", artista: "Merlin", imagem: "assets/merlin-meu-abrigo.png",
  frase: "Nos seus braços eu encontrei meu lugar no mundo. Você é meu abrigo nos dias de tempestade, meu porto seguro, meu lar. 🏡❤",
  audio: "assets/merlin-meu-abrigo.mp3", duracao: "3:50", favorita: true
  },
  
  { titulo: "Make You Feel My Love", artista: "Adele", imagem: "assets/adele-make-you-feel-my-love.png",
  frase: "Eu faria o impossível para você sentir meu amor. Nos dias frios, nas noites escuras, eu estarei aqui – para aquecer, proteger e lembrar o quanto você é amada. 🌧️🔥",
  audio: "assets/adele-make-you-feel-my-love.mp3", duracao: "3:32", favorita: true
  },
  
  { titulo: "Dusk Till Dawn", artista: "Zayn feat. Sia", imagem: "assets/zayn-sia-dusk-till-dawn.png",
  frase: "Do anoitecer ao amanhecer, em cada segundo, em cada respiração... eu estarei ao seu lado. Você não estará sozinha nunca mais. 🌙🌅",
  audio: "assets/zayn-sia-dusk-till-dawn.mp3", duracao: "4:25", favorita: true
  },
  
  { titulo: "My Little Love", artista: "Adele", imagem: "assets/adele-my-little-love.png",
  frase: "Você é meu pequeno amor, minha razão para ser melhor a cada dia. Te amo de um jeito que não cabe em palavras, que não tem fim, que é puro e eterno. 🌟",
  audio: "assets/adele-my-little-love.mp3", duracao: "6:29", favorita: true
  },
  
  { titulo: "Time After Time", artista: "Cyndi Lauper", imagem: "assets/cyndi-lauper-time-after-time.png",
  frase: "Se você se perder, pode me ligar. Se cair, eu te seguro. Tempo após tempo, eu estarei aqui. Porque nosso amor é feito de recomeços. 🔁❤",
  audio: "assets/cyndi-lauper-time-after-time.mp3", duracao: "4:01", favorita: true
  },
  
  { titulo: "Caso Sério", artista: "Rita Lee", imagem: "assets/rita-lee-caso-serio.png",
  frase: "O que sinto por você não é brincadeira, é caso sério! Todo mundo já percebeu - meu coração grita seu nome a cada batida. 💘",
  audio: "assets/rita-lee-caso-serio.mp3", duracao: "3:10", favorita: true
  }




];

/* ====== VARIÁVEIS ====== */
let indiceAtual = 0;
let isPlaying = false;
let typingInterval;
let modoAleatorio = false;
let historicoAleatorio = [];
const MAX_HISTORICO = 3;

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
  ensurePlaySvg();
  setupEventListeners();
  carregarMusica(indiceAtual);
  renderMusicList();
}

/* ====== UTIL: garante que o botão de play tenha um SVG dentro ====== */
function ensurePlaySvg() {
  if (!playBtn) return;
  if (!playBtn.querySelector('svg')) {
    playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`;
  }
}

/* ====== CARREGAR MÚSICA ====== */
function carregarMusica(indice) {
  if (indice < 0 || indice >= musicas.length) return;
  indiceAtual = indice;
  const musica = musicas[indice];

  const tituloEl = document.getElementById('titulo');
  const artistaEl = document.getElementById('artista');
  const imgEl = document.getElementById('imagem-musica');

  if (tituloEl) tituloEl.textContent = musica.titulo;
  if (artistaEl) artistaEl.textContent = musica.artista;
  if (imgEl) {
    imgEl.src = musica.imagem;
    imgEl.alt = `Capa: ${musica.titulo}`;
  }

  fim.textContent = musica.duracao || '0:00';
  barraProgresso.value = 0;
  inicio.textContent = '0:00';

  fraseElement.textContent = '';
  digitarFrase(fraseElement, musica.frase || '');

  audio.src = musica.audio;
  audio.load();

  updateActiveMusicInList();
  /* ====== ATUALIZAR CONTROLE DE MÍDIA (tela bloqueada / centro de controle) ====== */
	if ('mediaSession' in navigator) {
	  const musica = musicas[indiceAtual];
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

	  navigator.mediaSession.setActionHandler("play", () => { audio.play(); });
	  navigator.mediaSession.setActionHandler("pause", () => { audio.pause(); });
	  navigator.mediaSession.setActionHandler("previoustrack", () => { musicaAnterior(); });
	  navigator.mediaSession.setActionHandler("nexttrack", () => { proximaMusica(); });
	}

}

/* ====== DIGITAR FRASE ====== */
function digitarFrase(element, text, i = 0) {
  if (!element) return;
  clearTimeout(typingInterval);
  if (i < text.length) {
    element.textContent = text.substring(0, i + 1);
    typingInterval = setTimeout(() => digitarFrase(element, text, i + 1), 45);
  } else {
    // fim do typing
  }
}

/* ====== CONTROLES ====== */
function togglePlay() {
  // animar coracao no clique do play
  criarCoracao(playBtn);

  if (isPlaying) {
    audio.pause();
  } else {
    if (!audio.src) carregarMusica(indiceAtual);
    audio.play().catch((e) => {
      // silencia erros de autoplay; usuário deve interagir para liberar em alguns navegadores
      console.debug("play() falhou:", e);
      mostrarNotificacao("Toque novamente para começar a reprodução.");
    });
  }
}

function proximaMusica() {
  let novoIndice;
  if (modoAleatorio) {
    novoIndice = escolherMusicaAleatoria();
  } else {
    novoIndice = (indiceAtual + 1) % musicas.length;
  }
  carregarMusica(novoIndice);
  audio.play().catch(()=>{});
}

function musicaAnterior() {
  indiceAtual = (indiceAtual - 1 + musicas.length) % musicas.length;
  carregarMusica(indiceAtual);
  audio.play().catch(()=>{});
}

/* ====== ALEATÓRIO (inteligente) ====== */
function escolherMusicaAleatoria() {
  let disponiveis = musicas.map((_, i) => i).filter(i => !historicoAleatorio.includes(i));
  if (disponiveis.length === 0) {
    historicoAleatorio = [];
    disponiveis = musicas.map((_, i) => i);
  }
  const pesos = disponiveis.map(i => (musicas[i].favorita ? 1.25 : 1));
  const totalPeso = pesos.reduce((a, b) => a + b, 0);
  let r = Math.random() * totalPeso, acc = 0, escolhido = disponiveis[0];
  for (let k = 0; k < disponiveis.length; k++) {
    acc += pesos[k];
    if (r <= acc) { escolhido = disponiveis[k]; break; }
  }
  historicoAleatorio.push(escolhido);
  if (historicoAleatorio.length > MAX_HISTORICO) historicoAleatorio.shift();
  return escolhido;
}
function toggleModoAleatorio() {
  modoAleatorio = !modoAleatorio;
  if (aleatorioBtn) aleatorioBtn.classList.toggle('active', modoAleatorio);
  mostrarNotificacao(modoAleatorio ? 'Modo aleatório ativado' : 'Modo aleatório desativado');
}

/* ====== EVENT LISTENERS ====== */
function setupEventListeners() {
  // carta / mensagem secreta (procura pelos dois seletores comuns)
  const secret = document.querySelector('.secret-message') || document.querySelector('.mensagem-secreta');
  if (secret) {
    secret.addEventListener('click', () => {
      // abrir a carta visualmente (se houver elementos .carta-fechada / .carta-aberta)
      const cartaFechada = document.querySelector('.carta-fechada');
      const cartaAberta = document.querySelector('.carta-aberta');
      if (cartaFechada && cartaAberta) {
        cartaFechada.style.display = 'none';
        cartaAberta.style.display = 'block';
        // mostrar mensagem tipo toast
        mostrarMensagemSecreta();
        setTimeout(() => {
          cartaAberta.style.display = 'none';
          cartaFechada.style.display = 'block';
        }, 2000);
      } else {
        // fallback: só mostra mensagem se estrutura não existir
        mostrarMensagemSecreta();
      }
    });
  }

  if (playBtn) playBtn.addEventListener('click', togglePlay);
  if (anteriorBtn) anteriorBtn.addEventListener('click', musicaAnterior);
  if (proximoBtn) proximoBtn.addEventListener('click', proximaMusica);
  if (aleatorioBtn) aleatorioBtn.addEventListener('click', toggleModoAleatorio);
  if (listaBtn) listaBtn.addEventListener('click', toggleListaMusicas);
  if (closeListBtn) closeListBtn.addEventListener('click', toggleListaMusicas);

  if (audio) {
    audio.addEventListener('timeupdate', atualizarProgresso);
    audio.addEventListener('loadedmetadata', carregarDuracao);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', () => { console.debug("Erro no elemento audio"); });
  }

  if (barraProgresso) barraProgresso.addEventListener('input', seekAudio);
  if (searchInput) searchInput.addEventListener('input', filtrarMusicas);

  // clique em qualquer lugar (fora dos botões) cria coracao flutuante
  document.addEventListener('click', (e) => {
    if (!e.target.closest('button') && !e.target.closest('.secret-message') && !e.target.closest('.mensagem-secreta')) {
      criarCoracao(e.clientX, e.clientY);
    }
  });

  // responsividade (ajuste de altura) opcional se usar CSS com --vh
  window.addEventListener('resize', ajustarAltura);
  window.addEventListener('orientationchange', ajustarAltura);
  window.addEventListener('load', ajustarAltura);
}

/* ====== AJUSTE DE ALTURA (mobile) ====== */
function ajustarAltura() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  const container = document.querySelector('.player-container');
  if (container) container.style.minHeight = 'calc(var(--vh, 1vh) * 100)';
}

/* ====== LISTA ====== */
function toggleListaMusicas() {
  if (listaMusicas) listaMusicas.classList.toggle('show');
}

function renderMusicList() {
  if (!listaContainer) return;
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
      <div class="music-item-duration">${musica.duracao || ''}</div>
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
  if (!searchInput) return;
  const termo = (searchInput.value || '').toLowerCase();
  document.querySelectorAll('.music-item').forEach((item, index) => {
    const m = musicas[index];
    const texto = `${m.titulo.toLowerCase()} ${m.artista.toLowerCase()}`;
    item.style.display = texto.includes(termo) ? 'flex' : 'none';
  });
}

/* ====== PROGRESSO ====== */
function atualizarProgresso() {
  if (!audio || isNaN(audio.duration)) return;
  barraProgresso.max = audio.duration;
  barraProgresso.value = audio.currentTime;
  inicio.textContent = formatarTempo(audio.currentTime);
}
function carregarDuracao() {
  if (!audio || isNaN(audio.duration)) {
    fim.textContent = '0:00';
    return;
  }
  barraProgresso.max = audio.duration;
  fim.textContent = formatarTempo(audio.duration);
}
function seekAudio() {
  if (!audio) return;
  audio.currentTime = Number(barraProgresso.value || 0);
  inicio.textContent = formatarTempo(audio.currentTime);
}
function formatarTempo(seg) {
  if (!Number.isFinite(seg)) return '0:00';
  const m = Math.floor(seg / 60);
  const s = Math.floor(seg % 60);
  return `${m}:${s < 10 ? '0' + s : s}`;
}

/* ====== ESTADO / UI (SVG play/pause + vinylHeart) ====== */
function handlePlay() {
  isPlaying = true;
  updateUI();
  if (vinylHeart) vinylHeart.classList.add('playing');
}
function handlePause() {
  isPlaying = false;
  updateUI();
  if (vinylHeart) vinylHeart.classList.remove('playing');
}
function handleEnded() {
  proximaMusica();
}

function updateUI() {
  ensurePlaySvg();
  const playIcon = playBtn.querySelector('svg');
  if (!playIcon) return;

  const path = playIcon.querySelector('path') || document.createElementNS('http://www.w3.org/2000/svg','path');
  if (!playIcon.querySelector('path')) playIcon.appendChild(path);

  if (isPlaying) {
    // pause icon (dois retângulos)
    path.setAttribute('d', 'M6 19h4V5H6v14zm8-14v14h4V5h-4z');
    playBtn.classList.add('playing');
  } else {
    // play triangle
    path.setAttribute('d', 'M8 5v14l11-7z');
    playBtn.classList.remove('playing');
  }
}

/* ====== CORAÇÕES VISUAIS ====== */
/*
  criarCoracao pode receber:
    - um elemento (HTMLElement) -> posiciona no centro do elemento
    - duas coordenadas (x, y) -> posiciona na posição clicada
*/
function criarCoracao(a, b) {
  let x, y;
  if (typeof a === 'number' && typeof b === 'number') {
    x = a; y = b;
  } else if (a && typeof a.getBoundingClientRect === 'function') {
    const rect = a.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = rect.top + rect.height / 2;
  } else {
    // centro da tela como fallback
    x = window.innerWidth / 2;
    y = window.innerHeight / 2;
  }

  const coracao = document.createElement('div');
  coracao.className = 'coracao';
  coracao.textContent = '❤';
  // estilos inline para garantir animação mesmo sem CSS externo
  coracao.style.position = 'fixed';
  coracao.style.left = `${x - 12}px`;
  coracao.style.top = `${y - 12}px`;
  coracao.style.fontSize = '20px';
  coracao.style.pointerEvents = 'none';
  coracao.style.zIndex = 9999;
  coracao.style.opacity = '1';
  coracao.style.transition = 'transform 5s ease-out, opacity 5s ease-out';
  document.body.appendChild(coracao);

  // forçar layout e iniciar animação
  requestAnimationFrame(() => {
    coracao.style.transform = `translateY(-140px) scale(${1 + Math.random() * 0.6}) rotate(${(Math.random()-0.5)*40}deg)`;
    coracao.style.opacity = '0';
  });

  setTimeout(() => {
    coracao.remove();
  }, 5200);
}

/* ====== PETALAS (efeito romântico) ====== */
function criarPetala() {
  const petala = document.createElement('div');
  petala.className = 'petala';
  petala.style.position = 'fixed';
  petala.style.left = `${Math.random() * 100}vw`;
  petala.style.top = `-10vh`;
  petala.style.opacity = `${0.3 + Math.random() * 0.7}`;
  petala.style.transform = `scale(${0.5 + Math.random()}) rotate(${Math.random()*360}deg)`;
  petala.style.pointerEvents = 'none';
  petala.style.zIndex = 5;
  petala.style.transition = `transform ${6 + Math.random()*8}s linear, top ${6 + Math.random()*8}s linear, opacity ${6 + Math.random()*8}s linear`;
  petala.textContent = ''; // se quiser imagem, ajustar aqui
  document.body.appendChild(petala);

  // animar para baixo
  requestAnimationFrame(() => {
    petala.style.top = `${100 + Math.random() * 30}vh`;
    petala.style.transform = `translateY(${100 + Math.random()*20}vh) scale(${0.5 + Math.random()}) rotate(${Math.random()*720}deg)`;
    petala.style.opacity = '0';
  });

  setTimeout(() => petala.remove(), 16000);
}
// opcional: criar algumas petalas no inicio
for (let i = 0; i < 8; i++) setTimeout(criarPetala, i * 700);

/* ====== MENSAGENS / TOASTS ====== */
function mostrarMensagemSecreta() {
  const mensagens = [
    "Você é especial para mim","Gosto muito de você","Cada dia com você é único",
    "Seu sorriso me alegra","Você faz meus dias melhores","Meu coração é seu ❤️",
    "Sinto sua falta mesmo quando você está perto","Você é meu pensamento favorito",
    "Amo o jeito que você me olha","Seu abraço é meu lugar favorito","Você me completa",
    "Nada se compara ao seu carinho","Me apaixono mais a cada dia","Você é a melhor parte do meu dia",
    "Seu amor me transformou","Amo nossa conexão","Você me inspira a ser melhor",
    "Seu cheiro é meu aroma favorito","Amo nossa conversa sem fim","Você é lindo(a) por dentro e por fora"
  ];
  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)] + " ❤️";
  mostrarNotificacao(mensagem);
}

function mostrarNotificacao(mensagem, duracao = 2400) {
  const n = document.createElement('div');
  n.className = 'notificacao-mensagem';
  n.textContent = mensagem;
  // estilos inline para garantir visual mesmo sem CSS
  n.style.position = 'fixed';
  n.style.left = '50%';
  n.style.bottom = '20px';
  n.style.transform = 'translateX(-50%)';
  n.style.background = 'rgba(0,0,0,0.75)';
  n.style.color = '#fff';
  n.style.padding = '10px 14px';
  n.style.borderRadius = '10px';
  n.style.zIndex = 99999;
  n.style.fontSize = '14px';
  n.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
  n.style.opacity = '1';
  n.style.transition = 'opacity 400ms ease';

  document.body.appendChild(n);
  setTimeout(() => { n.style.opacity = '0'; setTimeout(() => n.remove(), 420); }, duracao);
}

/* ====== START ====== */
window.addEventListener('load', init);
