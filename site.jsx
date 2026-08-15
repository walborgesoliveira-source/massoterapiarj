// Main Site Entry Point — Production version
const SITE_TWEAKS = {
  palette: "areia",
  cardStyle: "border",
  heroTitle: "O cuidado que o seu corpo está pedindo",
  heroSub: "Massoterapia em Copacabana, com 16 técnicas e mais de 15 anos cuidando do Rio."
};

// ─── Scroll reveal hook ───
function useScrollReveal(threshold = 0.12) {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

// ─── Animated Section Wrapper ───
function AnimatedSection({ children, delay = 0 }) {
  const [ref, isVisible] = useScrollReveal(0.08);
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Back to Top Button ───
function BackToTop({ t }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      style={{
        position: 'fixed',
        right: 24, bottom: 96,
        zIndex: 50,
        width: 44, height: 44,
        borderRadius: '50%',
        background: t.surface,
        border: `1px solid ${t.line}`,
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.3s ease',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  );
}

// ─── Internal page heading ───
function PageHeader({ t, compact, eyebrow, title, description }) {
  return (
    <section style={{
      background: t.deep, color: t.onDeep,
      padding: compact ? '64px 22px 72px' : '104px 64px 120px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Eyebrow color="rgba(240,228,208,0.7)" compact={compact}>{eyebrow}</Eyebrow>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: compact ? 48 : 80, lineHeight: 1, fontWeight: 400,
          color: t.onDeep, margin: '20px 0 24px', letterSpacing: '-0.025em',
        }}>{title}</h1>
        <p style={{
          fontFamily: 'Karla', fontSize: compact ? 16 : 19, lineHeight: 1.6,
          color: 'rgba(240,228,208,0.76)', maxWidth: 680, margin: 0,
        }}>{description}</p>
      </div>
    </section>
  );
}

// ─── Home overview — concise previews linking to full pages ───
function HomeOverview({ t, compact }) {
  const pages = [
    { href: '/sobre', label: 'Sobre', title: 'Cuidado construído com experiência', text: 'Conheça a história, a abordagem e os valores da Massoterapia RJ.', img: 'assets/espaco/sala-1.jpeg' },
    { href: '/servicos', label: 'Serviços', title: 'Técnicas para cada momento', text: 'Veja massagens, sessões, durações e valores disponíveis.', img: 'assets/servicos/massagem-terapeutica.jpeg' },
    { href: '/equipe', label: 'Equipe', title: 'Quem cuida de você', text: 'Conheça os profissionais e suas especialidades complementares.', img: window.MRJ_TEAM[0].img },
    { href: '/espaco', label: 'Espaço', title: 'Um ambiente que acolhe', text: 'Veja as salas, a recepção e os detalhes do nosso espaço em Copacabana.', img: 'assets/espaco/recepcao.jpeg' },
    { href: '/depoimentos', label: 'Depoimentos', title: 'Experiências de quem já veio', text: 'Leia avaliações e relatos de clientes atendidos.', img: 'assets/hero-real.jpeg' },
    { href: '/faq', label: 'FAQ', title: 'Respostas antes da sessão', text: 'Encontre respostas para as dúvidas mais frequentes.', img: 'assets/espaco/detalhes-3.jpeg' },
    { href: '/contato', label: 'Contato', title: 'Onde nos encontrar', text: 'Endereço, horários, mapa e canais de contato em um só lugar.', img: 'assets/espaco/consultorio2405.jpg' },
  ];

  return (
    <Section t={t} pad="xl" compact={compact} bg={t.bg}>
      <div style={{ textAlign: 'center', marginBottom: compact ? 40 : 64 }}>
        <Eyebrow color={t.muted} compact={compact}>Conheça a Massoterapia RJ</Eyebrow>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: compact ? 38 : 60,
          lineHeight: 1.05, fontWeight: 400, color: t.ink,
          margin: '16px auto 0', letterSpacing: '-0.02em', maxWidth: 720,
        }}>Tudo o que você precisa para escolher seu cuidado</h2>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: compact ? '1fr' : 'repeat(2, 1fr)',
        gap: compact ? 16 : 24,
      }}>
        {pages.map((page) => (
          <a key={page.href} href={page.href} style={{
            ...cardSurface('border', t), display: 'grid',
            gridTemplateColumns: compact ? '112px 1fr' : '180px 1fr',
            minHeight: compact ? 150 : 190, overflow: 'hidden', textDecoration: 'none',
          }}>
            <img src={page.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85) brightness(0.94)' }} />
            <div style={{ padding: compact ? '18px 16px' : '28px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Eyebrow color={t.muted} compact>{page.label}</Eyebrow>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: compact ? 23 : 30, lineHeight: 1.1, fontWeight: 500, color: t.ink, margin: '10px 0 8px' }}>{page.title}</h3>
              <p style={{ fontFamily: 'Karla', fontSize: compact ? 13 : 14.5, lineHeight: 1.5, color: t.inkSoft, margin: 0 }}>{page.text}</p>
              <span style={{ fontFamily: 'Karla', fontSize: 13, fontWeight: 600, color: t.accent, marginTop: 14 }}>Saiba mais →</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

// ─── Main App ───
function SiteApp() {
  const t = window.MRJ_PALETTES[SITE_TWEAKS.palette] || window.MRJ_PALETTES.areia;
  const heroText = `${SITE_TWEAKS.heroTitle} | ${SITE_TWEAKS.heroSub}`;
  
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 800);
  const route = window.location.pathname.replace(/\/+$/, '') || '/';

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener('resize', handleResize);
    document.body.style.background = t.bg;
    return () => window.removeEventListener('resize', handleResize);
  }, [t.bg]);

  React.useEffect(() => {
    if (route !== '/') return;
    const legacyRoutes = { '#tecnicas': '/servicos', '#equipe': '/equipe', '#espaco': '/espaco' };
    const destination = legacyRoutes[window.location.hash.toLowerCase()];
    if (destination) window.location.replace(destination);
  }, [route]);

  const pages = {
    '/sobre': {
      eyebrow: 'Massoterapia RJ', title: 'Sobre nós',
      description: 'Experiência, escuta e cuidado individualizado em Copacabana.',
      content: <Sobre t={t} compact={isMobile} />,
    },
    '/servicos': {
      eyebrow: 'Técnicas e sessões', title: 'Serviços',
      description: 'Conheça as técnicas, durações e valores para encontrar a sessão ideal para o seu momento.',
      content: <><FeaturedServices t={t} compact={isMobile} cardStyle={SITE_TWEAKS.cardStyle} /><PriceTable t={t} compact={isMobile} /></>,
    },
    '/equipe': {
      eyebrow: 'Quem cuida de você', title: 'Nossa equipe',
      description: 'Profissionais com experiências e especialidades complementares para um cuidado personalizado.',
      content: <Equipe t={t} compact={isMobile} />,
    },
    '/espaco': {
      eyebrow: 'Copacabana', title: 'Nosso espaço',
      description: 'Um ambiente acolhedor, silencioso e preparado para o seu cuidado.',
      content: <NossoEspaco t={t} compact={isMobile} />,
    },
    '/depoimentos': {
      eyebrow: 'Experiências reais', title: 'Depoimentos',
      description: 'Avaliações e relatos de pessoas atendidas pela Massoterapia RJ.',
      content: <Depoimentos t={t} compact={isMobile} cardStyle={SITE_TWEAKS.cardStyle} />,
    },
    '/faq': {
      eyebrow: 'Dúvidas frequentes', title: 'Perguntas e respostas',
      description: 'Informações importantes para você chegar à sua sessão com tranquilidade.',
      content: <FAQ t={t} compact={isMobile} />,
    },
    '/contato': {
      eyebrow: 'Visite ou fale conosco', title: 'Contato',
      description: 'Endereço, horários, mapa e canais oficiais da Massoterapia RJ.',
      content: <MapaContato t={t} compact={isMobile} />,
    },
  };
  const currentPage = pages[route];

  return (
    <div style={{ background: t.bg, color: t.ink, fontFamily: 'Karla, system-ui, sans-serif' }}>
      <Nav t={t} compact={isMobile} />
      {currentPage ? (
        <>
          <PageHeader t={t} compact={isMobile} {...currentPage} />
          <AnimatedSection>{currentPage.content}</AnimatedSection>
        </>
      ) : (
        <>
          <Hero t={t} compact={isMobile} heroText={heroText} />
          <AnimatedSection><TrustStrip t={t} compact={isMobile} /></AnimatedSection>
          <AnimatedSection delay={0.05}><HomeOverview t={t} compact={isMobile} /></AnimatedSection>
          <AnimatedSection delay={0.05}><Blog t={t} compact={isMobile} cardStyle={SITE_TWEAKS.cardStyle} /></AnimatedSection>
        </>
      )}
      
      <FinalCTA t={t} compact={isMobile} />
      <Footer t={t} compact={isMobile} />
      <WhatsAppFloat t={t} compact={isMobile} />
      <BackToTop t={t} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SiteApp />);
