// Main Site Entry Point — Production version
const SITE_TWEAKS = {
  palette: "areia",
  cardStyle: "border",
  heroTitle: "O cuidado que o seu corpo está pedindo",
  heroSub: "Massoterapia e fisioterapia em Copacabana, com 16 técnicas e mais de 8 anos cuidando do Rio."
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

// ─── Main App ───
function SiteApp() {
  const t = window.MRJ_PALETTES[SITE_TWEAKS.palette] || window.MRJ_PALETTES.areia;
  const heroText = `${SITE_TWEAKS.heroTitle} | ${SITE_TWEAKS.heroSub}`;
  
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 800);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener('resize', handleResize);
    document.body.style.background = t.bg;
    return () => window.removeEventListener('resize', handleResize);
  }, [t.bg]);

  return (
    <div style={{ background: t.bg, color: t.ink, fontFamily: 'Karla, system-ui, sans-serif' }}>
      <Nav t={t} compact={isMobile} />
      
      <Hero t={t} compact={isMobile} heroText={heroText} />
      
      <AnimatedSection>
        <TrustStrip t={t} compact={isMobile} />
      </AnimatedSection>
      
      <AnimatedSection delay={0.05}>
        <Sobre t={t} compact={isMobile} />
      </AnimatedSection>
      
      <AnimatedSection delay={0.05}>
        <FeaturedServices t={t} compact={isMobile} cardStyle={SITE_TWEAKS.cardStyle} />
      </AnimatedSection>
      
      <AnimatedSection>
        <PriceTable t={t} compact={isMobile} />
      </AnimatedSection>
      
      <AnimatedSection delay={0.05}>
        <Equipe t={t} compact={isMobile} />
      </AnimatedSection>

      <AnimatedSection>
        <NossoEspaco t={t} compact={isMobile} />
      </AnimatedSection>
      
      <AnimatedSection>
        <Depoimentos t={t} compact={isMobile} cardStyle={SITE_TWEAKS.cardStyle} />
      </AnimatedSection>
      
      <AnimatedSection>
        <FAQ t={t} compact={isMobile} />
      </AnimatedSection>
      
      <AnimatedSection delay={0.05}>
        <Blog t={t} compact={isMobile} cardStyle={SITE_TWEAKS.cardStyle} />
      </AnimatedSection>
      
      <AnimatedSection>
        <MapaContato t={t} compact={isMobile} />
      </AnimatedSection>
      
      <FinalCTA t={t} compact={isMobile} />
      <Footer t={t} compact={isMobile} />
      <WhatsAppFloat t={t} compact={isMobile} />
      <BackToTop t={t} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SiteApp />);
