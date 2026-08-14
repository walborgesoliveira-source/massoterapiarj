// Services featured grid, full price table, testimonials

// ─── Featured services grid ───
function FeaturedServices({ t, compact, cardStyle }) {
  const featured = window.MRJ_SERVICES.slice(0, 6).map((s, i) => ({
    ...s,
    kind: ['rays', 'orb', 'stripes', 'orb', 'rays', 'stripes'][i],
    tone: ['sand', 'accent', 'sand', 'sand', 'accent', 'sand'][i],
  }));
  return (
    <Section id="servicos" t={t} pad="xl" compact={compact} bg={t.bg}>
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        flexDirection: compact ? 'column' : 'row',
        alignItems: compact ? 'flex-start' : 'flex-end',
        gap: compact ? 16 : 40, marginBottom: compact ? 36 : 64,
      }}>
        <div>
          <Eyebrow color={t.muted} compact={compact}>Técnicas em destaque</Eyebrow>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: compact ? 36 : 56, lineHeight: 1.05, fontWeight: 400,
            color: t.ink, margin: '16px 0 0', letterSpacing: '-0.02em',
            maxWidth: 620, textWrap: 'balance',
          }}>
            16 técnicas. Uma <em style={{ color: t.accent }}>certa</em> para o seu corpo hoje.
          </h2>
        </div>
        {!compact && (
          <p style={{
            fontFamily: 'Karla', fontSize: 16, lineHeight: 1.6,
            color: t.inkSoft, maxWidth: 320, margin: 0,
          }}>
            Da Lomi Lomi havaiana ao Deep Tissue clínico. Conversamos antes de começar para encontrar
            o toque ideal para o seu momento.
          </p>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: compact ? '1fr' : 'repeat(3, 1fr)',
        gap: compact ? 16 : 24,
      }}>
        {featured.map((s, i) => {
          const [hovered, setHovered] = React.useState(false);
          return (
          <div key={i}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              ...cardSurface(cardStyle, t),
              padding: compact ? 18 : 22,
              display: 'flex', flexDirection: 'column', gap: compact ? 14 : 18,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hovered ? '0 8px 32px rgba(42,37,32,0.10)' : 'none',
            }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: 3, overflow: 'hidden' }}>
              <img src={s.img} alt={s.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(0.85) brightness(0.95)', transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontWeight: 500,
                  fontSize: compact ? 22 : 26, color: t.ink, margin: 0, lineHeight: 1.1,
                }}>{s.name}</h3>
                <div style={{ fontFamily: 'Karla', fontSize: compact ? 14 : 15, color: t.accent, fontWeight: 600, whiteSpace: 'nowrap' }}>
                  R$ {s.price}
                </div>
              </div>
              <p style={{
                fontFamily: 'Karla', fontSize: compact ? 13.5 : 14.5,
                lineHeight: 1.55, color: t.inkSoft, margin: 0,
              }}>{s.desc}</p>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, marginTop: 4,
                fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '0.15em',
                color: t.muted, textTransform: 'uppercase',
              }}>
                <span>{s.tag}</span>
                <span>·</span>
                <span>{s.dur} min</span>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      <div style={{
        marginTop: compact ? 32 : 56, display: 'flex', justifyContent: 'center',
      }}>
        <a href="#tabela" style={{
          fontFamily: 'Karla', fontSize: 14, color: t.ink, fontWeight: 600,
          textDecoration: 'none', borderBottom: `1px solid ${t.ink}`, paddingBottom: 4,
          display: 'inline-flex', alignItems: 'center', gap: 8,
          letterSpacing: '0.02em',
        }}>
          Ver todas as 16 técnicas e preços {Icon.arrow(14, t.ink)}
        </a>
      </div>
      <WhatsAppCTA t={t} compact={compact} />
    </Section>
  );
}

// ─── Full price table ───
function PriceTable({ t, compact }) {
  const services = window.MRJ_SERVICES;
  const standardServices = services.filter((service) => service.dur === 50);
  const specialSessions = services.filter((service) => service.dur > 50);
  return (
    <Section t={t} pad="xl" compact={compact} bg={t.surface} style={{ scrollMarginTop: 80 }}>
      <div id="tabela" style={{ textAlign: 'center', marginBottom: compact ? 36 : 56 }}>
        <Eyebrow color={t.muted} compact={compact}>Tabela completa</Eyebrow>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: compact ? 32 : 48, lineHeight: 1.05, fontWeight: 400,
          color: t.ink, margin: '16px 0 8px', letterSpacing: '-0.02em',
        }}>Todas as técnicas e preços</h2>
        <p style={{ fontFamily: 'Karla', fontSize: compact ? 14 : 16, color: t.inkSoft, margin: 0 }}>
          Sessões de 50 minutos. Aceitamos PIX, cartão e dinheiro.
        </p>
      </div>

      <div style={{
        maxWidth: 820, margin: '0 auto',
        background: t.bg, borderRadius: 4,
        border: `1px solid ${t.line}`,
        overflow: 'hidden',
      }}>
        {/* header */}
        {!compact && (
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 100px 110px',
            padding: '16px 28px', borderBottom: `1px solid ${t.line}`,
            background: t.cream,
            fontFamily: 'ui-monospace, monospace', fontSize: 10.5,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: t.muted,
          }}>
            <div>Técnica</div>
            <div style={{ textAlign: 'center' }}>Duração</div>
            <div style={{ textAlign: 'right' }}>Valor</div>
          </div>
        )}
        {standardServices.map((s, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: compact ? '1fr auto' : '1fr 100px 110px',
            padding: compact ? '16px 18px' : '18px 28px',
            borderBottom: i < standardServices.length - 1 ? `1px solid ${t.line}` : 'none',
            alignItems: 'center',
            gap: compact ? 12 : 0,
          }}>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: compact ? 18 : 20, color: t.ink, fontWeight: 500, lineHeight: 1.2 }}>
                {s.name}
              </div>
              <div style={{
                fontFamily: 'ui-monospace, monospace', fontSize: 9.5,
                letterSpacing: '0.16em', color: t.muted, textTransform: 'uppercase',
                marginTop: 4,
              }}>
                {s.tag}{compact ? ` · ${s.dur} min` : ''}
              </div>
            </div>
            {!compact && (
              <div style={{
                textAlign: 'center', fontFamily: 'Karla', fontSize: 14,
                color: t.inkSoft,
              }}>{s.dur} min</div>
            )}
            <div style={{
              textAlign: 'right', fontFamily: 'Karla', fontSize: compact ? 15 : 16,
              fontWeight: 600, color: t.ink,
            }}>R$ {s.price}</div>
          </div>
        ))}
      </div>

      <section aria-labelledby="sessoes-especiais-titulo" style={{
        maxWidth: 820, margin: compact ? '64px auto 0' : '96px auto 0',
      }}>
        <div style={{ textAlign: 'center', marginBottom: compact ? 28 : 40 }}>
          <Eyebrow color={t.muted} compact={compact}>Mais tempo para você</Eyebrow>
          <h2 id="sessoes-especiais-titulo" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: compact ? 32 : 48, lineHeight: 1.05, fontWeight: 400,
            color: t.ink, margin: '16px 0 0', letterSpacing: '-0.02em',
          }}>Sessões especiais</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: compact ? '1fr' : 'repeat(2, 1fr)',
          gap: compact ? 16 : 24,
        }}>
          {specialSessions.map((session) => (
            <article key={session.name} style={{
              background: t.bg, borderRadius: 6, border: `1px solid ${t.line}`,
              padding: compact ? 22 : 28,
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
            }}>
              <div style={{
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                gap: 16, width: '100%',
              }}>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontWeight: 500,
                  fontSize: compact ? 24 : 28, color: t.ink, margin: 0, lineHeight: 1.1,
                }}>{session.name}</h3>
                <div style={{
                  fontFamily: 'Karla', fontSize: compact ? 15 : 16,
                  color: t.accent, fontWeight: 600, whiteSpace: 'nowrap',
                }}>R$ {session.price}</div>
              </div>
              <p style={{
                fontFamily: 'Karla', fontSize: compact ? 14 : 15,
                lineHeight: 1.55, color: t.inkSoft, margin: '16px 0 0',
              }}>{session.desc}</p>
              <div style={{
                fontFamily: 'ui-monospace, monospace', fontSize: 10,
                letterSpacing: '0.15em', color: t.muted, textTransform: 'uppercase',
                margin: '14px 0 24px',
              }}>{session.dur} min</div>
              <a href={window.MRJ_CONTACT.scheduleUrl} target="_blank" rel="noopener" style={{
                textDecoration: 'none', marginTop: 'auto',
              }}>
                <Btn t={t} size="sm">Agendar sessão {Icon.arrow(14, '#fff')}</Btn>
              </a>
            </article>
          ))}
        </div>
      </section>
      <WhatsAppCTA t={t} compact={compact} />
    </Section>
  );
}

// ─── Testimonials ───
function Depoimentos({ t, compact, cardStyle }) {
  const reviews = window.MRJ_TESTIMONIALS;
  return (
    <Section id="depoimentos" t={t} pad="xl" compact={compact} bg={t.bg}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        flexDirection: compact ? 'column' : 'row',
        alignItems: compact ? 'flex-start' : 'flex-end',
        gap: 24, marginBottom: compact ? 36 : 56,
      }}>
        <div>
          <Eyebrow color={t.muted} compact={compact}>Depoimentos</Eyebrow>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: compact ? 36 : 56, lineHeight: 1.05, fontWeight: 400,
            color: t.ink, margin: '16px 0 0', letterSpacing: '-0.02em',
            maxWidth: 620,
          }}>
            O que dizem quem já passou por aqui
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: compact ? 'flex-start' : 'flex-end', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Stars color={t.star} size={18}/>
            <div style={{ fontFamily: 'Karla', fontSize: 14, color: t.inkSoft }}>
              <strong style={{ color: t.ink }}>5</strong> de 5 no Google
            </div>
          </div>
          <a href={window.MRJ_CONTACT.googleReviews} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'Karla', fontSize: 13, color: t.accent,
            textDecoration: 'none', borderBottom: `1px solid ${t.accent}55`,
            paddingBottom: 1, lineHeight: 1,
          }}>Ver todas as avaliações →</a>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: compact ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: compact ? 16 : 24,
      }}>
        {reviews.map((r, i) => (
          <div key={i} style={{
            ...cardSurface(cardStyle, t),
            padding: compact ? 22 : 28,
            display: 'flex', flexDirection: 'column', gap: 16,
            minHeight: compact ? 'auto' : 220,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Stars color={t.star} size={14}/>
              {r.badge && (
                <span style={{
                  fontFamily: 'Karla', fontSize: 11, color: t.accentDk,
                  background: `${t.accent}18`, borderRadius: 20,
                  padding: '2px 8px', letterSpacing: '0.02em',
                }}>{r.badge}</span>
              )}
            </div>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: compact ? 19 : 22, lineHeight: 1.4, fontWeight: 400,
              color: t.ink, margin: 0, flex: 1, fontStyle: 'italic',
            }}>&ldquo;{r.text}&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: `linear-gradient(135deg, ${t.cream}, ${t.accent}55)`,
                border: `1px solid ${t.line}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Cormorant Garamond, serif', fontSize: 18, color: t.accentDk, fontStyle: 'italic',
              }}>{r.name[0]}</div>
              <div>
                <div style={{ fontFamily: 'Karla', fontSize: 14, color: t.ink, fontWeight: 600 }}>{r.name}</div>
                <div style={{ fontFamily: 'Karla', fontSize: 12, color: t.muted, marginTop: 2 }}>
                  Google · {r.when}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <WhatsAppCTA t={t} compact={compact} />
    </Section>
  );
}

Object.assign(window, { FeaturedServices, PriceTable, Depoimentos });
