// Main app — DesignCanvas with Desktop + Mobile frames + Tweaks panel

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "areia",
  "cardStyle": "border",
  "heroTitle": "O cuidado que o seu corpo está pedindo",
  "heroSub": "Massoterapia em Copacabana, com 16 técnicas e mais de 15 anos cuidando do Rio."
}/*EDITMODE-END*/;

// ─── Site composition — used by both Desktop & Mobile ───
function SiteContent({ t, compact, cardStyle, heroText }) {
  return (
    <div style={{ background: t.bg, color: t.ink, fontFamily: 'Karla, system-ui, sans-serif' }}>
      <Nav t={t} compact={compact} />
      <Hero t={t} compact={compact} heroText={heroText} />
      <TrustStrip t={t} compact={compact} />
      <Sobre t={t} compact={compact} />
      <FeaturedServices t={t} compact={compact} cardStyle={cardStyle} />
      <PriceTable t={t} compact={compact} />
      <Equipe t={t} compact={compact} />
      <Depoimentos t={t} compact={compact} cardStyle={cardStyle} />
      <FAQ t={t} compact={compact} />
      <Blog t={t} compact={compact} cardStyle={cardStyle} />
      <MapaContato t={t} compact={compact} />
      <FinalCTA t={t} compact={compact} />
      <Footer t={t} compact={compact} />
    </div>
  );
}

// ─── Desktop frame ─── shows site inside browser chrome
function DesktopFrame({ t, cardStyle, heroText }) {
  return (
    <div style={{ position: 'relative', width: 1320, padding: 20, background: 'transparent' }}>
      <ChromeWindow
        tabs={[{ title: 'Ellaine Massoterapia — Copacabana' }, { title: 'New Tab' }]}
        url="massoterapiarj.com.br"
        width={1280}
        height="auto"
      >
        <div style={{ minHeight: 0 }}>
          <SiteContent t={t} compact={false} cardStyle={cardStyle} heroText={`${heroText}`} />
        </div>
      </ChromeWindow>
      <WhatsAppFloat t={t} compact={false} />
    </div>
  );
}

// ─── Mobile frame ─── custom phone bezel to render full content height
function MobileFrame({ t, cardStyle, heroText }) {
  return (
    <div style={{ position: 'relative', width: 430, padding: 20, background: 'transparent' }}>
      <div style={{
        width: 390,
        borderRadius: 48, overflow: 'hidden',
        background: t.bg,
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12), inset 0 0 0 10px #0a0a0a, inset 0 0 0 11px rgba(255,255,255,0.05)',
        position: 'relative',
        margin: '0 auto',
      }}>
        {/* iOS status bar */}
        <div style={{
          position: 'relative', zIndex: 20, width: '100%',
          padding: '21px 32px 12px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: t.bg,
        }}>
          <span style={{
            fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 600,
            fontSize: 16, color: t.ink,
          }}>9:41</span>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <svg width="17" height="11" viewBox="0 0 19 12">
              <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={t.ink}/>
              <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={t.ink}/>
              <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={t.ink}/>
              <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={t.ink}/>
            </svg>
            <svg width="24" height="12" viewBox="0 0 27 13">
              <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={t.ink} strokeOpacity="0.4" fill="none"/>
              <rect x="2" y="2" width="20" height="9" rx="2" fill={t.ink}/>
            </svg>
          </div>
        </div>
        {/* Dynamic island */}
        <div style={{
          position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
          width: 110, height: 34, borderRadius: 24, background: '#000', zIndex: 30,
        }} />

        <SiteContent t={t} compact={true} cardStyle={cardStyle} heroText={heroText} />

        {/* home indicator */}
        <div style={{
          width: '100%', display: 'flex', justifyContent: 'center',
          padding: '12px 0 10px', background: t.bg,
        }}>
          <div style={{ width: 134, height: 5, borderRadius: 100, background: t.ink, opacity: 0.85 }} />
        </div>
      </div>
      <WhatsAppFloat t={t} compact={true} />
    </div>
  );
}

// ─── App ───
function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const t = window.MRJ_PALETTES[tw.palette] || window.MRJ_PALETTES.areia;
  const heroText = `${tw.heroTitle} | ${tw.heroSub}`;

  // Inject body background color
  React.useEffect(() => {
    document.body.style.background = '#1a1410';
  }, []);

  return (
    <>
      <DesignCanvas defaultZoom={0.42}>
        <DCSection id="responsive" title="Ellaine Massoterapia · Site para Web e Mobile" subtitle="Mesma estrutura, dois viewports — paleta, cards e copy ajustáveis nos Tweaks">
          <DCArtboard id="desktop" label="Desktop · 1280" width={1320} height={7320}>
            <DesktopFrame t={t} cardStyle={tw.cardStyle} heroText={heroText} />
          </DCArtboard>
          <DCArtboard id="mobile" label="Mobile · 390" width={430} height={8360}>
            <MobileFrame t={t} cardStyle={tw.cardStyle} heroText={heroText} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Paleta de cores">
          <TweakColor
            label="Paleta"
            value={[
              window.MRJ_PALETTES[tw.palette].bg,
              window.MRJ_PALETTES[tw.palette].ink,
              window.MRJ_PALETTES[tw.palette].accent,
              window.MRJ_PALETTES[tw.palette].cream,
            ]}
            options={Object.keys(window.MRJ_PALETTES).map(k => [
              window.MRJ_PALETTES[k].bg,
              window.MRJ_PALETTES[k].ink,
              window.MRJ_PALETTES[k].accent,
              window.MRJ_PALETTES[k].cream,
            ])}
            onChange={(v) => {
              const idx = [
                [window.MRJ_PALETTES.areia.bg, window.MRJ_PALETTES.areia.ink, window.MRJ_PALETTES.areia.accent, window.MRJ_PALETTES.areia.cream],
                [window.MRJ_PALETTES.salvia.bg, window.MRJ_PALETTES.salvia.ink, window.MRJ_PALETTES.salvia.accent, window.MRJ_PALETTES.salvia.cream],
                [window.MRJ_PALETTES.argila.bg, window.MRJ_PALETTES.argila.ink, window.MRJ_PALETTES.argila.accent, window.MRJ_PALETTES.argila.cream],
              ].findIndex(p => p[0] === v[0]);
              setTweak('palette', ['areia', 'salvia', 'argila'][Math.max(0, idx)]);
            }}
          />
          <div style={{ fontFamily: 'Karla', fontSize: 11.5, color: '#9aa0a6', marginTop: -4, marginLeft: 2, letterSpacing: '0.02em' }}>
            Atual: {window.MRJ_PALETTES[tw.palette].name}
          </div>
        </TweakSection>

        <TweakSection label="Estilo dos cards">
          <TweakRadio
            label="Estilo"
            value={tw.cardStyle}
            options={[
              { value: 'flat',   label: 'Sem borda' },
              { value: 'border', label: 'Borda' },
              { value: 'shadow', label: 'Sombra' },
            ]}
            onChange={(v) => setTweak('cardStyle', v)}
          />
        </TweakSection>

        <TweakSection label="Texto do hero">
          <TweakText
            label="Título"
            value={tw.heroTitle}
            onChange={(v) => setTweak('heroTitle', v)}
          />
          <TweakText
            label="Subtítulo"
            value={tw.heroSub}
            onChange={(v) => setTweak('heroSub', v)}
          />
          <TweakButton
            label="Voltar ao texto original"
            secondary
            onClick={() => setTweak({
              heroTitle: 'O cuidado que o seu corpo está pedindo',
              heroSub: 'Massoterapia em Copacabana, com 16 técnicas e mais de 15 anos cuidando do Rio.',
            })}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
