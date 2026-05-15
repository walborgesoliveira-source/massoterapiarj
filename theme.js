// Theme tokens — Massoterapia RJ
// Spa zen / luxe — warm earth tones with gold accent

window.MRJ_CONTACT = {
  whatsapp: 'https://wa.me/message/JWUUFOFDZABFB1',
  whatsappLabel: 'WhatsApp',
  instagram: 'https://www.instagram.com/massoterapiarjbr/',
  instagramHandle: '@massoterapiarjbr',
  facebook: 'https://www.facebook.com/massoterapiarjbr',
  facebookHandle: '/massoterapiarjbr',
  phoneLabel: '(21) 98203-3272',
  phoneTel:   'tel:+5521982033272',
  email:      'saudebemestarelazer@gmail.com',
  scheduleUrl: '/agendamento.html',
};

window.MRJ_PALETTES = {
  areia: {
    name: 'Areia & Ouro',
    bg:       '#F5EFE7',  // page background
    surface:  '#FBF7F0',  // cards / elevated
    cream:    '#F0E4D0',  // soft cream
    ink:      '#2A2520',  // deep brown text
    inkSoft:  '#5C4F44',  // body text
    muted:    '#8C7B6A',  // labels / secondary
    line:     '#E5DACA',  // hairlines
    accent:   '#B8895A',  // warm gold/copper
    accentDk: '#946B40',
    deep:     '#1A1410',  // hero / dark sections
    onDeep:   '#F0E4D0',
    star:     '#E2A555',  // Google star color
  },
  salvia: {
    name: 'Pedra & Sálvia',
    bg:       '#F4F1EC',
    surface:  '#FAF8F3',
    cream:    '#E6E3D8',
    ink:      '#1F2D24',
    inkSoft:  '#3F4E44',
    muted:    '#7A8579',
    line:     '#DCDED4',
    accent:   '#5B7A65',
    accentDk: '#42594B',
    deep:     '#161E18',
    onDeep:   '#E0E3D8',
    star:     '#C9A56B',
  },
  argila: {
    name: 'Argila & Cobre',
    bg:       '#FAF4EE',
    surface:  '#FEF9F3',
    cream:    '#F2D9C4',
    ink:      '#2E1F18',
    inkSoft:  '#5B4034',
    muted:    '#9A7A6A',
    line:     '#EBDACB',
    accent:   '#B85A33',
    accentDk: '#8A3F1F',
    deep:     '#1F140E',
    onDeep:   '#F2D9C4',
    star:     '#D88040',
  },
};

window.MRJ_SERVICES = [
  { name: 'Massagem Relaxante',          price: 250, dur: 50, tag: 'Relaxante',  img: 'assets/servicos/massagem-relaxante.jpeg', desc: 'Toque suave com creme ou óleo. Desacelera o sistema nervoso e descontrai o corpo.' },
  { name: 'Massagem Lomi Lomi',           price: 250, dur: 50, tag: 'Relaxante',  img: 'assets/servicos/massagem-1.jpeg', desc: 'Tradição havaiana. Movimentos longos e fluidos como ondas, profundamente acolhedores.' },
  { name: 'Massagem Terapêutica',         price: 280, dur: 50, tag: 'Terapêutica', img: 'assets/servicos/massagem-terapeutica.jpeg', desc: 'Indicada para dores crônicas, tensões musculares e desconfortos posturais.' },
  { name: 'Massagem Desportiva',          price: 280, dur: 50, tag: 'Terapêutica', img: 'assets/servicos/desportiva.jpeg', desc: 'Prepara e recupera musculatura de quem treina, corre ou pratica esportes regularmente.' },
  { name: 'Shiatsu',                       price: 280, dur: 50, tag: 'Oriental',    img: 'assets/servicos/massagem-2.jpeg', desc: 'Pressão em pontos energéticos da tradição japonesa. Equilíbrio profundo.' },
  { name: 'Deep Tissue',                   price: 280, dur: 50, tag: 'Terapêutica', img: 'assets/servicos/deep-tissue.jpeg', desc: 'Trabalho em camadas profundas para tensões enraizadas e contraturas teimosas.' },
  { name: 'Drenagem Linfática',            price: 280, dur: 50, tag: 'Estética',    img: 'assets/servicos/drenagem-linfatica.jpeg', desc: 'Toque rítmico e leve que estimula a circulação e reduz retenção de líquidos.' },
  { name: 'Thai Massagem',                 price: 280, dur: 50, tag: 'Oriental',    img: 'assets/servicos/thai-massagem.jpeg', desc: 'Alongamentos passivos e digitopressão. Como um yoga praticado em você.' },
  { name: 'Massagem Crânio Facial',        price: 280, dur: 50, tag: 'Relaxante',   img: 'assets/servicos/massagem-relaxante.jpeg', desc: 'Foco em cabeça, rosto e pescoço. Alívio para quem trabalha muito na tela.' },
  { name: 'Pedras Quentes',                price: 280, dur: 50, tag: 'Especial',    img: 'assets/espaco/detalhes-5.jpeg', desc: 'Pedras vulcânicas aquecidas que derretem tensões mais profundas e gelam o corpo.' },
  { name: 'Velas Quentes',                 price: 280, dur: 50, tag: 'Especial',    img: 'assets/espaco/detalhes-6.jpeg', desc: 'Óleo de vela aromática derretido aplicado morno sobre a pele.' },
  { name: 'New Seitai',                    price: 280, dur: 50, tag: 'Terapêutica', img: 'assets/servicos/new-seitai.jpeg', desc: 'Técnica japonesa de realinhamento postural. Reorganiza estrutura e respiração.' },
  { name: 'Reflexologia Podal',            price: 280, dur: 50, tag: 'Oriental',    img: 'assets/servicos/reflexologia.jpeg', desc: 'Pressão em pontos dos pés que correspondem a órgãos e sistemas do corpo.' },
  { name: 'Ashiatsu',                      price: 280, dur: 50, tag: 'Especial',    img: 'assets/servicos/desportiva-2.jpeg', desc: 'Massagem profunda aplicada com os pés. Pressão ampla e contínua.' },
  { name: 'Liberação Miofascial',          price: 320, dur: 50, tag: 'Terapêutica', img: 'assets/servicos/liberacao-miofascial.jpeg', desc: 'Trabalho instrumental na fáscia muscular. Devolve mobilidade ao tecido.' },
  { name: 'Terapêutica + Relaxante',       price: 375, dur: 50, tag: 'Combinada',   img: 'assets/servicos/massagem-terapeutica.jpeg', desc: 'O melhor dos dois mundos em uma só sessão. Trata e acolhe.' },
  { name: 'Massagem 4 Mãos',               price: 500, dur: 50, tag: 'Especial',    img: 'assets/servicos/massagem-1.jpeg', desc: 'Duas terapeutas, sincronizadas. Uma experiência sensorial completa.' },
];

window.MRJ_TEAM = [
  { name: 'Ellaine Moreira', role: 'Fisioterapeuta · Massoterapeuta', bio: 'Fundadora. Especialista em técnicas terapêuticas, Deep Tissue e Liberação Miofascial. 12 anos cuidando de corpos.', img: 'assets/equipe/ellaine.jpeg' },
  { name: 'Fabíola',          role: 'Massoterapeuta · Terapias orientais', bio: 'Lomi Lomi, Thai Massage, Shiatsu e Reflexologia. Formada no Brasil e com estudos no Havaí e na Tailândia.', img: 'assets/equipe/fabiola.jpeg' },
  { name: 'Amanda',           role: 'Massoterapeuta clínica', bio: 'Especialista em massagem terapêutica e relaxante. Toque preciso e acolhedor.', img: 'assets/equipe/amanda.jpeg' },
  { name: 'Diana',            role: 'Massoterapeuta clínica', bio: 'Formação em técnicas ocidentais e orientais. Foco em bem-estar integral e alívio de tensões.', img: 'assets/equipe/diana.jpeg' },
  { name: 'Selma',            role: 'Massoterapeuta clínica', bio: 'Experiência em drenagem linfática, massagem desportiva e técnicas de relaxamento profundo.', img: 'assets/equipe/selma.jpeg' },
];

window.MRJ_TESTIMONIALS = [
  { name: 'Mariana C.',    stars: 5, when: 'há 2 semanas', text: 'Saio de cada sessão como se tivesse dormido três noites. A Ellaine entende exatamente onde está a tensão sem eu precisar dizer.' },
  { name: 'Rafael Sousa',  stars: 5, when: 'há 1 mês',     text: 'Fui pela primeira vez por uma dor lombar antiga. Duas sessões e voltei a correr. Atendimento muito acolhedor, ambiente impecável.' },
  { name: 'Joana Lima',    stars: 5, when: 'há 1 mês',     text: 'O melhor lugar de Copacabana, simples assim. A Fabíola faz uma Lomi Lomi que dá vontade de morar lá.' },
  { name: 'Carla Mendes',  stars: 5, when: 'há 2 meses',   text: 'Profissionais de verdade. Não é só massagem — é cuidado. Já trouxe meu marido e minha mãe.' },
  { name: 'Diego A.',      stars: 5, when: 'há 3 meses',   text: 'Faço deep tissue toda quinta. Mudou minha rotina, minha postura e meu humor. Não exagero.' },
];

window.MRJ_FAQS = [
  { q: 'Preciso tirar a roupa toda?',
    a: 'Não. Você fica à vontade — pode manter roupa íntima ou peças leves. Trabalhamos com toalhas e lençóis cobrindo todo o corpo, descobrindo apenas a região atendida no momento.' },
  { q: 'Posso comer antes da sessão?',
    a: 'Pode, mas evite refeições pesadas até duas horas antes. Algo leve está perfeito. Vir totalmente em jejum também não é ideal.' },
  { q: 'Quanto tempo demora cada sessão?',
    a: 'A sessão de massagem é de 50 minutos efetivos. Reserve cerca de 1h10 no total para incluir acolhimento, conversa inicial e o pós da sessão.' },
  { q: 'Qual técnica é melhor para mim?',
    a: 'Depende do seu objetivo: relaxar, tratar uma dor, recuperar do treino, ou simplesmente se cuidar. Na primeira conversa indicamos a técnica ideal — e podemos combinar mais de uma.' },
  { q: 'Como funciona o agendamento?',
    a: 'Você agenda online pelo site, pelo WhatsApp, ou por telefone. Confirmamos o horário e enviamos o endereço com referências por mensagem.' },
  { q: 'Onde fica a clínica?',
    a: 'Atendemos em Copacabana, Rio de Janeiro. Estamos atualizando o endereço para um espaço novo — confirme a localização exata da sua próxima sessão pelo WhatsApp ou no momento do agendamento.' },
];

window.MRJ_POSTS = [
  { tag: 'Esportistas',  title: 'Massagem desportiva: como prevenir lesões e acelerar a recuperação', img: 'assets/servicos/desportiva.jpeg',  read: '5 min', date: '12 Mai' },
  { tag: 'Técnicas',     title: 'Thai massagem: a arte do relaxamento e do alívio da dor',              img: 'assets/servicos/thai-massagem.jpeg',        read: '6 min', date: '28 Abr' },
  { tag: 'Bem-estar',    title: 'A importância da Massoterapia para o seu corpo e a sua rotina',        img: 'assets/servicos/massagem-terapeutica.jpeg', read: '4 min', date: '15 Abr' },
];
