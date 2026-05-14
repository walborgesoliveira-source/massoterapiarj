// Main Site Entry Point — Clean version without frames/designer
const SITE_TWEAKS = {
  palette: "areia",
  cardStyle: "border",
  heroTitle: "O cuidado que o seu corpo está pedindo",
  heroSub: "Massoterapia e fisioterapia em Copacabana, com 16 técnicas e mais de 8 anos cuidando do Rio."
};

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
      <TrustStrip t={t} compact={isMobile} />
      <Sobre t={t} compact={isMobile} />
      <FeaturedServices t={t} compact={isMobile} cardStyle={SITE_TWEAKS.cardStyle} />
      <PriceTable t={t} compact={isMobile} />
      <Equipe t={t} compact={isMobile} />
      <Depoimentos t={t} compact={isMobile} cardStyle={SITE_TWEAKS.cardStyle} />
      <FAQ t={t} compact={isMobile} />
      <Blog t={t} compact={isMobile} cardStyle={SITE_TWEAKS.cardStyle} />
      <MapaContato t={t} compact={isMobile} />
      <FinalCTA t={t} compact={isMobile} />
      <Footer t={t} compact={isMobile} />
      <WhatsAppFloat t={t} compact={isMobile} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SiteApp />);
