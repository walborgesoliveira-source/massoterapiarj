// Shared primitives: placeholder, icons, surface helpers

// ─── Placeholder image: warm gradient + monospace label ───
function Placeholder({ label, ratio = '4/3', tone = 'sand', radius = 4, compact = false, kind = 'plain', t }) {
  // tones based on theme
  const tones = {
    sand:  [t.cream, t.bg, t.line],
    deep:  [t.deep, '#2A1F18', '#3F2E22'],
    accent:[t.accent, t.accentDk, t.cream],
  };
  const [a, b, c] = tones[tone] || tones.sand;
  const isDark = tone === 'deep' || tone === 'accent';
  const lblColor = isDark ? 'rgba(240,228,208,0.55)' : 'rgba(42,37,32,0.45)';

  // Subtle organic gradient + texture stripes
  const bg = `
    radial-gradient(120% 80% at 18% 20%, ${a} 0%, transparent 60%),
    radial-gradient(100% 90% at 80% 80%, ${c} 0%, transparent 55%),
    linear-gradient(135deg, ${b} 0%, ${a} 100%)
  `;

  // Optional decoration overlays by 'kind' — silhouettes hinted with concentric arcs / soft circles, NOT figurative SVG
  let overlay = null;
  if (kind === 'orb') {
    overlay = (
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(40% 40% at 50% 55%, ${isDark ? 'rgba(240,228,208,0.18)' : 'rgba(184,137,90,0.20)'} 0%, transparent 70%)`,
      }} />
    );
  } else if (kind === 'rays') {
    overlay = (
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }}>
        {Array.from({length: 18}).map((_, i) => (
          <line key={i} x1={50} y1={50} x2={50 + 70 * Math.cos(i * Math.PI / 9)} y2={50 + 70 * Math.sin(i * Math.PI / 9)}
                stroke={isDark ? '#F0E4D0' : '#B8895A'} strokeWidth="0.15" opacity="0.5" />
        ))}
      </svg>
    );
  } else if (kind === 'stripes') {
    overlay = (
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.18,
        backgroundImage: `repeating-linear-gradient(105deg, ${isDark ? '#F0E4D0' : '#B8895A'} 0 1px, transparent 1px 22px)`,
      }} />
    );
  }

  return (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: ratio,
      background: bg, borderRadius: radius, overflow: 'hidden',
      boxShadow: isDark ? 'inset 0 0 0 1px rgba(0,0,0,0.3)' : `inset 0 0 0 1px ${t.line}`,
    }}>
      {overlay}
      {label && (
        <div style={{
          position: 'absolute', left: compact ? 12 : 18, bottom: compact ? 10 : 14,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: compact ? 9 : 10, letterSpacing: '0.12em',
          color: lblColor, textTransform: 'uppercase',
        }}>{label}</div>
      )}
    </div>
  );
}

// ─── Icon glyphs (minimal line) ───
const Icon = {
  star: (size = 14, fill = '#E2A555') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <path d="M12 2l2.9 6.5L22 9.7l-5 5 1.2 7.2L12 18.5 5.8 21.9 7 14.7 2 9.7l7.1-1.2L12 2z" />
    </svg>
  ),
  whatsapp: (size = 22, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M20.5 3.5A11 11 0 0 0 3.6 17.4L2 22l4.7-1.5A11 11 0 1 0 20.5 3.5zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.9.9-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4 0-.6.2-.8.8-.9 1.7-.9 2.7 0 1.9 1.4 3.8 1.6 4 .2.2 2.8 4.2 6.7 5.8.9.4 1.6.6 2.2.8.9.3 1.7.2 2.4.1.7-.1 1.4-.6 1.6-1.1.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z" />
    </svg>
  ),
  phone: (size = 16, c = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  pin: (size = 16, c = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  clock: (size = 16, c = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  arrow: (size = 16, c = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  menu: (size = 22, c = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
      <line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/>
    </svg>
  ),
  plus: (size = 16, c = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  instagram: (size = 18, c = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill={c}/>
    </svg>
  ),
  facebook: (size = 18, c = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={c}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/>
    </svg>
  ),
};

// ─── Card surface helper — flat / border / shadow ───
function cardSurface(style, t) {
  const base = {
    background: t.surface,
    borderRadius: 6,
  };
  if (style === 'flat')    return { ...base, background: t.bg };
  if (style === 'border')  return { ...base, border: `1px solid ${t.line}` };
  if (style === 'shadow')  return { ...base, boxShadow: '0 1px 2px rgba(42,37,32,0.04), 0 8px 24px rgba(42,37,32,0.06)' };
  return base;
}

// ─── Stars row ───
function Stars({ count = 5, size = 14, color }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({length: count}).map((_, i) => (
        <span key={i}>{Icon.star(size, color)}</span>
      ))}
    </div>
  );
}

// ─── Button ───
function Btn({ children, variant = 'primary', size = 'md', t, full = false, onClick }) {
  const [hovered, setHovered] = React.useState(false);
  const sizes = {
    sm: { padY: 10, padX: 18, fs: 13 },
    md: { padY: 14, padX: 24, fs: 14 },
    lg: { padY: 18, padX: 32, fs: 15 },
  }[size];
  const variants = {
    primary: { bg: t.accent, fg: '#fff', bd: 'transparent', hoverBg: t.accentDk },
    ghost:   { bg: 'transparent', fg: t.ink, bd: t.ink, hoverBg: t.cream },
    onDeep:  { bg: t.cream, fg: t.deep, bd: 'transparent', hoverBg: '#fff' },
    outDeep: { bg: 'transparent', fg: t.onDeep, bd: 'rgba(240,228,208,0.4)', hoverBg: 'rgba(240,228,208,0.08)' },
  }[variant];
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: `${sizes.padY}px ${sizes.padX}px`,
        background: hovered ? variants.hoverBg : variants.bg,
        color: variants.fg,
        border: `1px solid ${variants.bd}`, borderRadius: 999,
        fontFamily: 'Karla, system-ui, sans-serif',
        fontSize: sizes.fs, fontWeight: 600,
        letterSpacing: '0.02em', cursor: 'pointer',
        width: full ? '100%' : 'auto',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 4px 12px rgba(0,0,0,0.12)' : 'none',
      }}
    >{children}</button>
  );
}

// ─── Eyebrow label ───
function Eyebrow({ children, color, compact }) {
  return (
    <div style={{
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      fontSize: compact ? 10 : 11, letterSpacing: '0.22em',
      color: color, textTransform: 'uppercase', fontWeight: 500,
    }}>{children}</div>
  );
}

// ─── Section container — handles padding + max width ───
function Section({ children, t, bg, pad = 'lg', compact, fullBleed = false, style = {}, id }) {
  const padY = compact ? { sm: 40, md: 56, lg: 72, xl: 96 } : { sm: 64, md: 96, lg: 128, xl: 160 };
  return (
    <section id={id} style={{
      background: bg || 'transparent',
      padding: `${padY[pad]}px 0`,
      scrollMarginTop: compact ? 70 : 100,
      ...style,
    }}>
      <div style={{
        maxWidth: fullBleed ? 'none' : 1200,
        margin: '0 auto',
        padding: fullBleed ? 0 : (compact ? '0 22px' : '0 64px'),
      }}>
        {children}
      </div>
    </section>
  );
}

// ─── WhatsApp inline CTA — placed at the end of each content section ───
function WhatsAppCTA({ t, compact }) {
  return (
    <div style={{
      marginTop: compact ? 40 : 56,
      padding: compact ? '20px 20px' : '24px 32px',
      background: t.surface,
      borderRadius: 6,
      border: `1px solid ${t.line}`,
      display: 'flex',
      alignItems: compact ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      flexDirection: compact ? 'column' : 'row',
      gap: compact ? 20 : 32,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, flex: 1 }}>
        <div style={{ flexShrink: 0, marginTop: 2 }}>
          {Icon.whatsapp(20, t.accent)}
        </div>
        <p style={{
          fontFamily: 'Karla',
          fontSize: compact ? 15 : 16,
          lineHeight: 1.55,
          color: t.inkSoft,
          margin: 0,
        }}>
          Não sabe por onde começar?{' '}
          <span style={{ color: t.ink, fontWeight: 600 }}>Fale conosco no WhatsApp</span>{' '}
          e encontre o cuidado ideal para você.
        </p>
      </div>
      <a href={window.MRJ_CONTACT.whatsapp} target="_blank" rel="noopener"
         style={{ textDecoration: 'none', flexShrink: 0 }}>
        <Btn t={t} size="sm">
          {Icon.whatsapp(15, '#fff')} Falar no WhatsApp
        </Btn>
      </a>
    </div>
  );
}

Object.assign(window, { Placeholder, Icon, cardSurface, Stars, Btn, Eyebrow, Section, WhatsAppCTA });
