// FAQ, Blog, Contato/Mapa, CTA final, Footer, WhatsApp float

// ─── FAQ accordion ───
function FAQ({ t, compact }) {
  const [open, setOpen] = React.useState(0);
  const faqs = window.MRJ_FAQS;
  return (
    <Section id="faq" t={t} pad="xl" compact={compact} bg={t.surface}>
      <div style={{
        display: 'grid', gridTemplateColumns: compact ? '1fr' : '0.7fr 1.3fr',
        gap: compact ? 32 : 96,
      }}>
        <div>
          <Eyebrow color={t.muted} compact={compact}>Perguntas frequentes</Eyebrow>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: compact ? 32 : 48, lineHeight: 1.05, fontWeight: 400,
            color: t.ink, margin: '16px 0 24px', letterSpacing: '-0.02em',
          }}>
            Antes da sua primeira vez
          </h2>
          <p style={{
            fontFamily: 'Karla', fontSize: compact ? 15 : 16, lineHeight: 1.6,
            color: t.inkSoft, margin: 0,
          }}>
            É natural ter dúvidas antes de uma primeira sessão. Aqui ficam as perguntas que mais
            chegam — se a sua não está aqui, mande no WhatsApp.
          </p>
        </div>
        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                borderTop: i === 0 ? `1px solid ${t.line}` : 'none',
                borderBottom: `1px solid ${t.line}`,
              }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', textAlign: 'left',
                  padding: compact ? '18px 0' : '22px 0',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: compact ? 19 : 24, color: t.ink, fontWeight: 500, lineHeight: 1.25,
                  }}>{f.q}</span>
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: isOpen ? t.accent : t.cream,
                    color: isOpen ? '#fff' : t.ink,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, transition: 'all 200ms',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                  }}>{Icon.plus(14, isOpen ? '#fff' : t.ink)}</span>
                </button>
                {isOpen && (
                  <div style={{
                    paddingBottom: compact ? 20 : 26, paddingRight: compact ? 0 : 48,
                    fontFamily: 'Karla', fontSize: compact ? 15 : 16, lineHeight: 1.65,
                    color: t.inkSoft,
                  }}>{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ─── Blog ───
function Blog({ t, compact, cardStyle }) {
  const posts = window.MRJ_POSTS;
  return (
    <Section id="blog" t={t} pad="xl" compact={compact} bg={t.bg}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        flexDirection: compact ? 'column' : 'row',
        alignItems: compact ? 'flex-start' : 'flex-end',
        gap: 20, marginBottom: compact ? 32 : 56,
      }}>
        <div>
          <Eyebrow color={t.muted} compact={compact}>Diário</Eyebrow>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: compact ? 36 : 56, lineHeight: 1.05, fontWeight: 400,
            color: t.ink, margin: '16px 0 0', letterSpacing: '-0.02em',
          }}>
            Leituras para se cuidar
          </h2>
        </div>
        <a href="#" style={{
          fontFamily: 'Karla', fontSize: 14, color: t.ink, fontWeight: 600,
          textDecoration: 'none', borderBottom: `1px solid ${t.ink}`, paddingBottom: 3,
        }}>Todos os artigos →</a>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: compact ? '1fr' : 'repeat(3, 1fr)',
        gap: compact ? 20 : 28,
      }}>
        {posts.map((p, i) => (
          <article key={i} style={{
            ...cardSurface(cardStyle, t),
            overflow: 'hidden', cursor: 'pointer',
          }}>
            <div style={{
              position: 'relative', width: '100%', aspectRatio: '3/2',
              background: t.cream, overflow: 'hidden',
            }}>
              <img src={p.img} alt={p.title}
                   style={{
                     width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                     filter: 'saturate(0.85)',
                   }}/>
            </div>
            <div style={{ padding: compact ? 18 : 24 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '0.18em',
                color: t.muted, textTransform: 'uppercase', marginBottom: 14,
              }}>
                <span>{p.tag}</span><span>·</span><span>{p.date}</span><span>·</span><span>{p.read}</span>
              </div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif', fontWeight: 500,
                fontSize: compact ? 21 : 24, color: t.ink, margin: 0, lineHeight: 1.25,
                textWrap: 'balance',
              }}>{p.title}</h3>
              <div style={{
                marginTop: 20, fontFamily: 'Karla', fontSize: 13, fontWeight: 600,
                color: t.accent, display: 'flex', alignItems: 'center', gap: 6,
              }}>Ler artigo {Icon.arrow(13, t.accent)}</div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

// ─── Mapa + Contato ───
function MapaContato({ t, compact }) {
  return (
    <Section id="contato" t={t} pad="xl" compact={compact} bg={t.surface}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: compact ? '1fr' : '1fr 1fr',
        gap: compact ? 32 : 56,
        alignItems: 'stretch',
      }}>
        {/* Map */}
        <div style={{
          position: 'relative',
          borderRadius: 4, overflow: 'hidden',
          minHeight: compact ? 280 : 460,
          border: `1px solid ${t.line}`,
          background: t.cream,
        }}>
          {/* Stylized map — abstract pattern */}
          <svg width="100%" height="100%" viewBox="0 0 400 460" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
            <rect width="400" height="460" fill={t.cream}/>
            {/* roads */}
            <g stroke={t.line} strokeWidth="1.5" fill="none" opacity="0.9">
              <path d="M0 90 L400 60"/>
              <path d="M0 200 L400 180"/>
              <path d="M0 310 L400 290"/>
              <path d="M0 410 L400 400"/>
              <path d="M70 0 L100 460"/>
              <path d="M200 0 L240 460"/>
              <path d="M330 0 L360 460"/>
            </g>
            <g stroke={t.line} strokeWidth="0.6" fill="none" opacity="0.7">
              <path d="M0 140 L400 120"/><path d="M0 250 L400 235"/>
              <path d="M0 360 L400 345"/>
              <path d="M140 0 L165 460"/><path d="M270 0 L300 460"/>
            </g>
            {/* beach */}
            <path d="M0 380 Q200 410 400 360 L400 460 L0 460 Z" fill={t.accent} opacity="0.15"/>
            <path d="M0 380 Q200 410 400 360" stroke={t.accent} strokeWidth="1.2" fill="none" opacity="0.5"/>
            {/* blocks */}
            <g fill={t.line} opacity="0.4">
              <rect x="105" y="65" width="90" height="120" rx="2"/>
              <rect x="245" y="60" width="80" height="125" rx="2"/>
              <rect x="105" y="195" width="90" height="110" rx="2"/>
              <rect x="245" y="190" width="80" height="105" rx="2"/>
            </g>
            {/* pin */}
            <g transform="translate(195, 175)">
              <circle cx="0" cy="0" r="22" fill={t.accent} opacity="0.18"/>
              <circle cx="0" cy="0" r="12" fill={t.accent} opacity="0.35"/>
              <circle cx="0" cy="0" r="6" fill={t.accent}/>
              <circle cx="0" cy="0" r="2.5" fill="#fff"/>
            </g>
          </svg>
          <div style={{
            position: 'absolute', left: 16, top: 16,
            background: t.bg, padding: '8px 12px', borderRadius: 4,
            border: `1px solid ${t.line}`,
            fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '0.15em',
            color: t.muted, textTransform: 'uppercase',
          }}>Google Maps</div>
          <div style={{
            position: 'absolute', left: 16, bottom: 16, right: 16,
            background: t.bg, padding: compact ? '14px 16px' : '18px 20px', borderRadius: 4,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }}>
            <div>
              <div style={{ fontFamily: 'Karla', fontSize: 12, color: t.muted, marginBottom: 2 }}>Endereço único e oficial</div>
              <div style={{ fontFamily: 'Karla', fontSize: compact ? 13 : 14, color: t.ink, fontWeight: 600 }}>
                Av. Princesa Isabel, 323 / 1007
              </div>
            </div>
            <a href="#" style={{
              fontFamily: 'Karla', fontSize: 12, color: t.accent, fontWeight: 600,
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}>Ver no Maps →</a>
          </div>
        </div>

        {/* Contato */}
        <div>
          <Eyebrow color={t.muted} compact={compact}>Visite ou agende</Eyebrow>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: compact ? 32 : 48, lineHeight: 1.05, fontWeight: 400,
            color: t.ink, margin: '16px 0 28px', letterSpacing: '-0.02em',
          }}>Onde nos encontrar</h2>

          {/* Featured address card */}
          <div style={{
            background: t.deep, color: t.onDeep,
            borderRadius: 6, padding: compact ? '22px 22px 20px' : '28px 30px 24px',
            position: 'relative', overflow: 'hidden',
            marginBottom: 18,
          }}>
            <div style={{
              position: 'absolute', right: -60, top: -60,
              width: 220, height: 220, borderRadius: '50%',
              background: `radial-gradient(circle, ${t.accent}40 0%, transparent 65%)`,
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                fontFamily: 'ui-monospace, monospace', fontSize: 10,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: t.accent, marginBottom: 14, fontWeight: 500,
              }}>
                {Icon.pin(13, t.accent)} Endereço único e oficial
              </div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: compact ? 28 : 38, lineHeight: 1.1,
                fontWeight: 500, color: t.onDeep,
                letterSpacing: '-0.015em',
              }}>
                Av. Princesa Isabel, 323
              </div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: compact ? 19 : 24, fontStyle: 'italic',
                color: t.accent, marginTop: 4, lineHeight: 1.2,
              }}>
                sala 1007 · Copacabana, Rio de Janeiro — RJ
              </div>
              <div style={{
                marginTop: 18, paddingTop: 16,
                borderTop: '1px solid rgba(240,228,208,0.15)',
                display: 'flex', gap: compact ? 16 : 24,
                fontFamily: 'Karla', fontSize: compact ? 12.5 : 13.5,
                color: 'rgba(240,228,208,0.75)', flexWrap: 'wrap',
              }}>
                <span>6 min do metrô Cardeal Arcoverde</span>
                <span style={{ color: 'rgba(240,228,208,0.3)' }}>•</span>
                <span>3 estacionamentos próximos</span>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
                <a href="https://www.google.com/maps/search/?api=1&query=Av.+Princesa+Isabel+323+Copacabana+Rio+de+Janeiro" target="_blank" rel="noopener" style={{
                  background: t.cream, color: t.deep, textDecoration: 'none',
                  padding: '10px 18px', borderRadius: 999,
                  fontFamily: 'Karla', fontSize: 13, fontWeight: 600,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>Abrir no Google Maps {Icon.arrow(13, t.deep)}</a>
                <a href="#" style={{
                  border: '1px solid rgba(240,228,208,0.4)', color: t.onDeep, textDecoration: 'none',
                  padding: '10px 18px', borderRadius: 999,
                  fontFamily: 'Karla', fontSize: 13, fontWeight: 500,
                }}>Copiar endereço</a>
              </div>
            </div>
          </div>

          {/* Hours + phone */}
          {[
            { ic: Icon.clock(16, t.accent), lbl: 'Horários', v1: 'Segunda a sexta · 08h às 20h', v2: 'Sábado e domingo · 09h às 17h' },
            { ic: Icon.phone(16, t.accent), lbl: 'Telefone', v1: window.MRJ_CONTACT.phoneLabel,  v2: 'WhatsApp e ligação', href: window.MRJ_CONTACT.phoneTel },
          ].map((it, i) => (
            <div key={i} style={{
              display: 'flex', gap: 16, alignItems: 'flex-start',
              padding: '16px 0', borderTop: i === 0 ? `1px solid ${t.line}` : 'none',
              borderBottom: `1px solid ${t.line}`,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: t.cream, display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>{it.ic}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '0.18em', color: t.muted, textTransform: 'uppercase', marginBottom: 4 }}>{it.lbl}</div>
                <div style={{ fontFamily: 'Karla', fontSize: compact ? 14 : 15, color: t.ink, lineHeight: 1.5 }}>
                  {it.href ? <a href={it.href} style={{ color: 'inherit', textDecoration: 'none' }}>{it.v1}</a> : it.v1}
                </div>
                <div style={{ fontFamily: 'Karla', fontSize: compact ? 13 : 14, color: t.inkSoft, lineHeight: 1.5 }}>{it.v2}</div>
              </div>
            </div>
          ))}

          {/* Email row */}
          <div style={{
            display: 'flex', gap: 16, alignItems: 'flex-start',
            padding: '16px 0', borderBottom: `1px solid ${t.line}`,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: t.cream, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>
                <polyline points="22,8 12,15 2,8"/>
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '0.18em', color: t.muted, textTransform: 'uppercase', marginBottom: 4 }}>E-mail</div>
              <a href={`mailto:${window.MRJ_CONTACT.email}`} style={{
                fontFamily: 'Karla', fontSize: compact ? 13.5 : 15, color: t.ink, lineHeight: 1.5,
                textDecoration: 'none', wordBreak: 'break-all',
              }}>{window.MRJ_CONTACT.email}</a>
              <div style={{ fontFamily: 'Karla', fontSize: compact ? 13 : 14, color: t.inkSoft, lineHeight: 1.5 }}>Respondemos em até 1 dia útil</div>
            </div>
          </div>

          {/* Social media row */}
          <div style={{
            display: 'flex', gap: 16, alignItems: 'center',
            padding: '16px 0', borderBottom: `1px solid ${t.line}`,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: t.cream, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>{Icon.instagram(16, t.accent)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '0.18em', color: t.muted, textTransform: 'uppercase', marginBottom: 8 }}>Acompanhe</div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <a href={window.MRJ_CONTACT.instagram} target="_blank" rel="noopener" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '8px 14px', borderRadius: 999,
                  border: `1px solid ${t.line}`, background: t.bg,
                  fontFamily: 'Karla', fontSize: 13, color: t.ink, fontWeight: 500,
                  textDecoration: 'none',
                }}>
                  {Icon.instagram(14, t.ink)} Instagram
                </a>
                <a href={window.MRJ_CONTACT.facebook} target="_blank" rel="noopener" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '8px 14px', borderRadius: 999,
                  border: `1px solid ${t.line}`, background: t.bg,
                  fontFamily: 'Karla', fontSize: 13, color: t.ink, fontWeight: 500,
                  textDecoration: 'none',
                }}>
                  {Icon.facebook(14, t.ink)} Facebook
                </a>
                <span style={{ fontFamily: 'Karla', fontSize: 12.5, color: t.muted, marginLeft: 4 }}>{window.MRJ_CONTACT.instagramHandle}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <a href={window.MRJ_CONTACT.scheduleUrl} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              <Btn t={t} size={compact ? 'md' : 'lg'}>
                Agendar agora {Icon.arrow(16, '#fff')}
              </Btn>
            </a>
            <a href={window.MRJ_CONTACT.whatsapp} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              <Btn t={t} variant="ghost" size={compact ? 'md' : 'lg'}>
                WhatsApp
              </Btn>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Final CTA ───
function FinalCTA({ t, compact }) {
  return (
    <section style={{
      background: t.deep, color: t.onDeep,
      padding: compact ? '64px 22px' : '120px 64px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: compact ? 500 : 1000, height: compact ? 500 : 1000, borderRadius: '50%',
        background: `radial-gradient(circle, ${t.accent}22 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />
      <div style={{
        maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative',
      }}>
        <Eyebrow color="rgba(240,228,208,0.65)" compact={compact}>Sua próxima sessão</Eyebrow>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: compact ? 40 : 80, lineHeight: 1.0, fontWeight: 400,
          color: t.onDeep, margin: '24px 0 28px',
          letterSpacing: '-0.025em', textWrap: 'balance',
        }}>
          Seu corpo<br/>
          <em style={{ color: t.accent }}>merece cuidado</em>.
        </h2>
        <p style={{
          fontFamily: 'Karla', fontSize: compact ? 16 : 19, lineHeight: 1.55,
          color: 'rgba(240,228,208,0.75)', maxWidth: 540, margin: '0 auto 36px',
        }}>
          Agende sua sessão em Copacabana e sinta a diferença desde a primeira visita.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Btn t={t} variant="onDeep" size={compact ? 'md' : 'lg'}>
            Agendar online {Icon.arrow(16, t.deep)}
          </Btn>
          <Btn t={t} variant="outDeep" size={compact ? 'md' : 'lg'}>
            Ligar agora
          </Btn>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───
function Footer({ t, compact }) {
  return (
    <footer style={{
      background: t.bg, borderTop: `1px solid ${t.line}`,
      padding: compact ? '40px 22px 28px' : '64px 64px 36px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: compact ? '1fr' : '1.3fr 1fr 1fr 1fr',
          gap: compact ? 32 : 56, paddingBottom: compact ? 32 : 56,
        }}>
          <div>
            <Wordmark t={t} compact={compact} />
            <p style={{
              fontFamily: 'Karla', fontSize: compact ? 13.5 : 14, lineHeight: 1.6,
              color: t.inkSoft, marginTop: 18, maxWidth: 280,
            }}>
              Massoterapia e fisioterapia em Copacabana. Cuidado real, sessão a sessão.
            </p>
          </div>
          {[
            ['Navegação', ['Início', 'Profissionais', 'Serviços', 'Agendamento', 'Blog']],
            ['Contato',   [window.MRJ_CONTACT.phoneLabel, window.MRJ_CONTACT.email, 'Copacabana, Rio de Janeiro']],
            ['Horários',  ['Seg–Sex · 08h às 20h', 'Sáb–Dom · 09h às 17h']],
          ].map(([title, items], i) => (
            <div key={i}>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10.5, letterSpacing: '0.2em', color: t.muted, textTransform: 'uppercase', marginBottom: 16 }}>{title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map((x, j) => (
                  <div key={j} style={{ fontFamily: 'Karla', fontSize: 14, color: t.inkSoft, lineHeight: 1.5, wordBreak: 'break-word' }}>{x}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          paddingTop: 24, borderTop: `1px solid ${t.line}`,
          display: 'flex', flexDirection: compact ? 'column' : 'row',
          justifyContent: 'space-between', alignItems: compact ? 'flex-start' : 'center',
          gap: 16,
        }}>
          <div style={{ fontFamily: 'Karla', fontSize: 12, color: t.muted }}>
            © 2026 Ellaine Massoterapia · CNPJ 00.000.000/0001-00 · Todos os direitos reservados
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <a href={window.MRJ_CONTACT.instagram} target="_blank" rel="noopener" aria-label="Instagram da Massoterapia RJ" style={{
              width: 38, height: 38, borderRadius: '50%',
              border: `1px solid ${t.line}`, background: t.surface,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: t.inkSoft, textDecoration: 'none',
              transition: 'all 150ms ease',
            }}>
              {Icon.instagram(17, t.inkSoft)}
            </a>
            <a href={window.MRJ_CONTACT.facebook} target="_blank" rel="noopener" aria-label="Facebook da Massoterapia RJ" style={{
              width: 38, height: 38, borderRadius: '50%',
              border: `1px solid ${t.line}`, background: t.surface,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: t.inkSoft, textDecoration: 'none',
              transition: 'all 150ms ease',
            }}>
              {Icon.facebook(17, t.inkSoft)}
            </a>
            <a href={window.MRJ_CONTACT.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp" style={{
              width: 38, height: 38, borderRadius: '50%',
              border: `1px solid ${t.line}`, background: t.surface,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: t.inkSoft, textDecoration: 'none',
              transition: 'all 150ms ease',
            }}>
              {Icon.whatsapp(15, t.inkSoft)}
            </a>
            <span style={{ fontFamily: 'Karla', fontSize: 12, color: t.muted, marginLeft: 6 }}>
              {window.MRJ_CONTACT.instagramHandle}
            </span>
          </div>
        </div>

        {/* Discreet credit line — site by IA Guru */}
        <div style={{
          marginTop: compact ? 18 : 24, paddingTop: compact ? 16 : 18,
          borderTop: `1px solid ${t.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          fontFamily: 'Karla', fontSize: compact ? 10.5 : 11, color: t.muted,
          letterSpacing: '0.04em', opacity: 0.85, flexWrap: 'wrap',
          textAlign: 'center',
        }}>
          <span>Site desenvolvido e mantido por</span>
          <a href="#" style={{
            color: t.inkSoft, textDecoration: 'none', fontWeight: 600,
            letterSpacing: '0.08em', display: 'inline-flex', alignItems: 'center', gap: 5,
          }}>
            <span style={{
              width: 14, height: 14, borderRadius: 3, background: t.ink,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: t.bg, fontFamily: 'ui-monospace, monospace', fontSize: 9, fontWeight: 700,
            }}>ia</span>
            IA Guru
          </a>
          {!compact && (
            <span style={{ color: t.muted, opacity: 0.7 }}>· hospedagem inteligente + automação de marketing</span>
          )}
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp float ───
function WhatsAppFloat({ t, compact }) {
  return (
    <a href={window.MRJ_CONTACT.whatsapp} target="_blank" rel="noopener" style={{
      position: 'absolute',
      right: compact ? 16 : 24, bottom: compact ? 16 : 24,
      zIndex: 40, textDecoration: 'none',
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      {!compact && (
        <div style={{
          background: '#fff', padding: '10px 14px', borderRadius: 999,
          fontFamily: 'Karla', fontSize: 13, color: t.ink, fontWeight: 500,
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        }}>Fale com a gente</div>
      )}
      <div style={{
        width: compact ? 52 : 60, height: compact ? 52 : 60, borderRadius: '50%',
        background: '#25D366',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.2)',
        cursor: 'pointer',
      }}>
        {Icon.whatsapp(compact ? 26 : 30, '#fff')}
      </div>
    </a>
  );
}

Object.assign(window, { FAQ, Blog, MapaContato, FinalCTA, Footer, WhatsAppFloat });
