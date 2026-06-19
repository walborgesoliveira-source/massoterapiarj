# Registro de atualizacao de escala - 19/06/2026

## Alteracao publicada

- Amanda: disponibilidade em 19/06/2026, das 11:00 as 20:30.
- Diana: disponibilidade em 20/06/2026, das 09:00 as 19:00.

## Regras alteradas

- Bloqueio 143 removido: Amanda, 19/06/2026, das 17:00 as 20:30.
- Bloqueio 114 removido: Diana, 20/06/2026, das 09:00 as 19:00.
- Regra 144 criada: disponibilidade ampliada de Amanda.
- Regra 145 criada: disponibilidade confirmada de Diana.

## Validacao

A resposta central de horarios foi validada pelas rotas usadas no site publico e
no painel administrativo. O formulario publico tambem foi conferido e permanece
consumindo o mesmo endpoint central.

Os agendamentos existentes de Fabíola em 19/06/2026 foram preservados. Nos
periodos sobrepostos, Amanda aparece como profissional livre. Nao havia
agendamentos registrados para Diana em 20/06/2026.

O formulario continua aplicando a antecedencia minima configurada. Por isso,
horarios do dia que ja passaram ou estejam muito proximos nao sao oferecidos ao
cliente, mesmo quando fazem parte da escala publicada.

## Reversao

Para reverter, remover as regras 144 e 145 e recriar os bloqueios 143 e 114 com
os mesmos periodos descritos acima. A reversao deve ser feita de forma atomica e
validada novamente nas rotas publica e administrativa.
