// Section components: Nav, Hero, Trust, Sobre, Equipe

// ─── Wordmark / Logo ───
function Wordmark({ t, onDark = false, compact = false }) {
  const ink = onDark ? t.onDeep : t.ink;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: compact ? 10 : 12 }}>
      {/* actual brand mark */}
      <div style={{
        width: compact ? 36 : 44, height: compact ? 36 : 44,
        borderRadius: '50%',
        background: onDark ? 'rgba(240,228,208,0.08)' : t.surface,
        border: `1px solid ${onDark ? 'rgba(240,228,208,0.15)' : t.line}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <img src="assets/logo.png" alt="Ellaine Massoterapia"
             style={{ width: compact ? 24 : 30, height: 'auto', display: 'block' }} />
      </div>
      <div style={{ lineHeight: 1.1 }}>
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: compact ? 18 : 21, color: ink,
          fontWeight: 500, letterSpacing: '0.01em',
        }}>Massoterapia RJ</div>
        <div style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: compact ? 8.5 : 9.5, letterSpacing: '0.22em',
          color: onDark ? 'rgba(240,228,208,0.65)' : t.muted,
          textTransform: 'uppercase', marginTop: 3,
        }}>Ellaine · Fabiola · Copacabana</div>
      </div>
    </div>
  );
}

// ─── Utility strip — single official address pinned to the top ───
function UtilityStrip({ t, compact }) {
  if (compact) {
    return (
      <div style={{
        background: t.deep, color: t.onDeep,
        padding: '10px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'Karla', fontSize: 12, letterSpacing: '0.01em',
        borderBottom: `1px solid rgba(240,228,208,0.08)`,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          {Icon.pin(13, t.accent)}
          <span style={{ color: 'rgba(240,228,208,0.95)' }}>
            Av. Princesa Isabel, 323 · <span style={{ color: t.accent, fontWeight: 600 }}>Copacabana</span>
          </span>
        </span>
      </div>
    );
  }
  return (
    <div style={{
      background: t.deep, color: t.onDeep,
      borderBottom: `1px solid rgba(240,228,208,0.08)`,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '12px 64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
        fontFamily: 'Karla', fontSize: 13,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {Icon.pin(14, t.accent)}
            <span style={{ color: 'rgba(240,228,208,0.95)' }}>
              Av. Princesa Isabel, 323 — sala 1007 ·{' '}
              <span style={{ color: t.accent, fontWeight: 600 }}>Copacabana, Rio de Janeiro</span>
            </span>
          </span>
          <span style={{ width: 1, height: 14, background: 'rgba(240,228,208,0.18)' }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(240,228,208,0.75)' }}>
            {Icon.clock(13, 'rgba(240,228,208,0.6)')} Seg–Sáb · 09h às 21h
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href={window.MRJ_CONTACT.phoneTel} style={{
            color: 'rgba(240,228,208,0.85)', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            {Icon.phone(13, 'rgba(240,228,208,0.7)')} {window.MRJ_CONTACT.phoneLabel}
          </a>
          <a href="#" style={{
            color: t.accent, textDecoration: 'none', fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 4,
          }}>
            Ver no Maps {Icon.arrow(12, t.accent)}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Top Navigation ───
function Nav({ t, compact }) {
  const links = ['Início', 'Serviços', 'Sobre', 'Depoimentos', 'Blog', 'Contato'];
  if (compact) {
    return (
      <>
        <UtilityStrip t={t} compact />
        <div style={{
          position: 'sticky', top: 0, zIndex: 30,
          background: t.bg, borderBottom: `1px solid ${t.line}`,
          padding: '14px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Wordmark t={t} compact />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={{
              background: t.accent, color: '#fff', border: 'none', borderRadius: 999,
              padding: '8px 14px', fontSize: 12, fontWeight: 600, fontFamily: 'Karla, sans-serif',
            }}>Agendar</button>
            <div style={{ color: t.ink, padding: 4 }}>{Icon.menu(22, t.ink)}</div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <UtilityStrip t={t} />
      <div style={{
        position: 'sticky', top: 0, zIndex: 30,
        background: 'rgba(245,239,231,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${t.line}`,
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '20px 64px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Wordmark t={t} />
          <nav style={{ display: 'flex', gap: 36 }}>
            {links.map((l, i) => (
              <a key={i} href="#" style={{
                fontFamily: 'Karla, sans-serif', fontSize: 14,
                color: i === 0 ? t.ink : t.inkSoft, fontWeight: i === 0 ? 600 : 500,
                textDecoration: 'none', letterSpacing: '0.01em',
              }}>{l}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Btn t={t} size="sm">Agendar sessão</Btn>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Hero ───
function Hero({ t, compact, heroText }) {
  const [title, sub] = heroText.split('|').map(s => s.trim());
  return (
    <section style={{
      background: t.deep, color: t.onDeep,
      padding: compact ? '56px 22px 64px' : '120px 64px 140px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* warm gradient corner */}
      <div style={{
        position: 'absolute', right: compact ? -100 : -150, top: compact ? -100 : -150,
        width: compact ? 400 : 700, height: compact ? 400 : 700, borderRadius: '50%',
        background: `radial-gradient(circle, ${t.accent}33 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: compact ? '1fr' : '1.1fr 0.9fr',
          gap: compact ? 40 : 80,
          alignItems: 'center',
        }}>
          <div>
            <Eyebrow color="rgba(240,228,208,0.7)" compact={compact}>
              Massoterapia & Fisioterapia · Copacabana
            </Eyebrow>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: compact ? 52 : 96, lineHeight: compact ? 1.0 : 0.98,
              fontWeight: 400, color: t.onDeep, margin: '24px 0 0',
              letterSpacing: compact ? '-0.02em' : '-0.025em',
              textWrap: 'balance',
            }}>
              {title}<span style={{ color: t.accent, fontStyle: 'italic' }}>.</span>
            </h1>
            <p style={{
              fontFamily: 'Karla, sans-serif',
              fontSize: compact ? 16 : 19, lineHeight: 1.55,
              color: 'rgba(240,228,208,0.78)',
              margin: compact ? '20px 0 32px' : '32px 0 44px',
              maxWidth: 480, fontWeight: 400,
            }}>{sub}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Btn t={t} variant="onDeep" size={compact ? 'md' : 'lg'}>
                Agendar sessão {Icon.arrow(16, t.deep)}
              </Btn>
              <Btn t={t} variant="outDeep" size={compact ? 'md' : 'lg'}>
                Ver técnicas
              </Btn>
            </div>
            <div style={{
              marginTop: compact ? 36 : 56,
              display: 'flex', alignItems: 'center', gap: compact ? 16 : 28,
              flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Stars color={t.star} size={compact ? 13 : 15}/>
                <span style={{
                  fontFamily: 'Karla', fontSize: compact ? 13 : 14,
                  color: 'rgba(240,228,208,0.78)',
                }}>4.9 no Google</span>
              </div>
              <div style={{ width: 1, height: 20, background: 'rgba(240,228,208,0.2)' }} />
              <div style={{
                fontFamily: 'Karla', fontSize: compact ? 13 : 14,
                color: 'rgba(240,228,208,0.78)',
              }}>+500 pessoas atendidas</div>
            </div>
          </div>

          {!compact && (
            <div style={{ position: 'relative', paddingLeft: 20 }}>
              <div style={{
                position: 'relative', width: '100%', aspectRatio: '4/5',
                borderRadius: 4, overflow: 'hidden',
                background: `linear-gradient(135deg, ${t.deep}, #2a1f18)`,
                boxShadow: 'inset 0 0 0 1px rgba(240,228,208,0.06)',
              }}>
                <img src="assets/hero-massage.png" alt="Atendimento de massoterapia"
                     style={{
                       width: '100%', height: '100%',
                       objectFit: 'cover', objectPosition: 'center',
                       display: 'block',
                       filter: 'saturate(0.85) brightness(0.92)',
                     }}/>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(180deg, transparent 50%, ${t.deep}aa 100%)`,
                  mixBlendMode: 'multiply',
                }}/>
              </div>
              <div style={{
                position: 'absolute', left: -20, bottom: 40,
                background: t.cream, color: t.deep,
                padding: '18px 22px', borderRadius: 4,
                fontFamily: 'Cormorant Garamond, serif', fontSize: 17, lineHeight: 1.3,
                maxWidth: 240, fontStyle: 'italic',
                boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
              }}>
                &ldquo;Saio de cada sessão como se tivesse dormido três noites.&rdquo;
                <div style={{ marginTop: 10, fontStyle: 'normal', fontFamily: 'Karla, sans-serif', fontSize: 11, color: t.muted, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Mariana C. · Google</div>
              </div>
            </div>
          )}

          {compact && (
            <div style={{ marginTop: 8 }}>
              <div style={{
                width: '100%', aspectRatio: '4/3',
                borderRadius: 4, overflow: 'hidden',
                background: `linear-gradient(135deg, ${t.deep}, #2a1f18)`,
              }}>
                <img src="assets/hero-massage.png" alt="Atendimento de massoterapia"
                     style={{
                       width: '100%', height: '100%',
                       objectFit: 'cover', objectPosition: 'center',
                       display: 'block',
                       filter: 'saturate(0.85) brightness(0.92)',
                     }}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Trust strip ───
function TrustStrip({ t, compact }) {
  const items = [
    { num: '16',    lbl: 'técnicas oferecidas' },
    { num: '8',     lbl: 'anos cuidando do RJ' },
    { num: '4.9 ★', lbl: 'avaliação no Google' },
    { num: '50min', lbl: 'duração de cada sessão' },
  ];
  return (
    <div style={{ background: t.bg, borderBottom: `1px solid ${t.line}` }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: compact ? '28px 22px' : '36px 64px',
        display: 'grid', gridTemplateColumns: compact ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: compact ? 24 : 32,
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', gap: 4,
            borderLeft: compact && i % 2 === 1 ? `1px solid ${t.line}` : 'none',
            paddingLeft: compact && i % 2 === 1 ? 20 : 0,
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: compact ? 30 : 40, color: t.ink, fontWeight: 500,
              lineHeight: 1, letterSpacing: '-0.01em',
            }}>{it.num}</div>
            <div style={{
              fontFamily: 'Karla', fontSize: compact ? 12 : 13.5,
              color: t.muted, letterSpacing: '0.01em',
            }}>{it.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Sobre Nós ───
function Sobre({ t, compact }) {
  return (
    <Section t={t} pad="xl" compact={compact} bg={t.bg}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: compact ? '1fr' : '0.9fr 1.1fr',
        gap: compact ? 40 : 96,
        alignItems: 'center',
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative', width: '100%', aspectRatio: '4/5',
            borderRadius: 4, overflow: 'hidden',
            boxShadow: `inset 0 0 0 1px ${t.line}`,
          }}>
            <img src="assets/services-lead.png" alt="Sessão de massoterapia"
                 style={{
                   width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                   filter: 'saturate(0.7) contrast(0.95)',
                 }}/>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(180deg, ${t.bg}00 30%, ${t.bg}33 100%)`,
              mixBlendMode: 'multiply',
            }}/>
          </div>
          {!compact && (
            <div style={{
              position: 'absolute', right: -40, bottom: -40,
              width: 160, height: 160, borderRadius: '50%',
              background: t.cream,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              border: `1px solid ${t.line}`,
            }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, color: t.accent, lineHeight: 1, fontStyle: 'italic' }}>desde</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 44, color: t.ink, lineHeight: 1, marginTop: 4 }}>2018</div>
            </div>
          )}
        </div>
        <div>
          <Eyebrow color={t.muted} compact={compact}>Sobre nós</Eyebrow>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: compact ? 36 : 56, lineHeight: 1.05, fontWeight: 400,
            color: t.ink, margin: '20px 0 24px',
            letterSpacing: '-0.02em', textWrap: 'balance',
          }}>
            Um espaço que <em style={{ color: t.accent }}>respira</em> com você
          </h2>
          <p style={{
            fontFamily: 'Karla', fontSize: compact ? 16 : 18, lineHeight: 1.65,
            color: t.inkSoft, margin: '0 0 18px', textWrap: 'pretty',
          }}>
            A Ellaine Massoterapia nasceu do desejo de oferecer ao Rio um cuidado que não fosse
            apressado. Um lugar onde o seu corpo pudesse ser escutado antes de ser tocado.
          </p>
          <p style={{
            fontFamily: 'Karla', fontSize: compact ? 16 : 18, lineHeight: 1.65,
            color: t.inkSoft, margin: '0 0 32px', textWrap: 'pretty',
          }}>
            No coração de Copacabana, combinamos técnicas orientais e ocidentais com fisioterapia
            clínica. Mais de 16 modalidades — porque cada corpo merece o toque certo para o seu
            momento.
          </p>
          <div style={{ display: 'flex', gap: compact ? 24 : 40, flexWrap: 'wrap' }}>
            {[
              ['Profissionais', 'certificadas em\nfisioterapia + massoterapia'],
              ['Localização',    'Copacabana, a 6 min\nda estação de metrô'],
              ['Atendimento',    'Personalizado,\nsem fórmula pronta'],
            ].map(([k, v], i) => (
              <div key={i} style={{ minWidth: 0, flex: '1 1 140px' }}>
                <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '0.18em', color: t.muted, textTransform: 'uppercase', marginBottom: 8 }}>{k}</div>
                <div style={{ fontFamily: 'Karla', fontSize: compact ? 13.5 : 14.5, color: t.ink, lineHeight: 1.45, whiteSpace: 'pre-line' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Equipe ───
function Equipe({ t, compact }) {
  const team = [
    { name: 'Ellaine Moreira', role: 'Fisioterapeuta · Massoterapeuta', bio: 'Fundadora. Especialista em técnicas terapêuticas, Deep Tissue e Liberação Miofascial. 12 anos cuidando de corpos.', tone: 'sand' },
    { name: 'Fabiola',          role: 'Massoterapeuta · Terapias orientais', bio: 'Lomi Lomi, Thai Massage, Shiatsu e Reflexologia. Formada no Brasil e com estudos no Havaí e na Tailândia.', tone: 'accent' },
  ];
  return (
    <Section t={t} pad="xl" compact={compact} bg={t.surface}>
      <div style={{ textAlign: 'center', marginBottom: compact ? 48 : 72 }}>
        <Eyebrow color={t.muted} compact={compact}>Quem cuida de você</Eyebrow>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: compact ? 36 : 56, lineHeight: 1.05, fontWeight: 400,
          color: t.ink, margin: '16px 0 0', letterSpacing: '-0.02em',
        }}>Nossa equipe</h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: compact ? '1fr' : 'repeat(2, 1fr)',
        gap: compact ? 36 : 56,
      }}>
        {team.map((p, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <Placeholder label={`retrato · ${p.name.toLowerCase()}`} ratio="4/5" tone={p.tone} kind="orb" t={t} radius={4} compact={compact}/>
            <div style={{ marginTop: 24 }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: compact ? 30 : 38, color: t.ink, lineHeight: 1, fontWeight: 500 }}>{p.name}</div>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10.5, letterSpacing: '0.18em', color: t.muted, textTransform: 'uppercase', margin: '10px 0 14px' }}>{p.role}</div>
              <p style={{ fontFamily: 'Karla', fontSize: compact ? 15 : 16, lineHeight: 1.6, color: t.inkSoft, margin: 0 }}>{p.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { Wordmark, UtilityStrip, Nav, Hero, TrustStrip, Sobre, Equipe });
