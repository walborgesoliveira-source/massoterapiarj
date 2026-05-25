# Massoterapia RJ

Site institucional em Nginx, isolado via Docker, para publicação na VPS.

## Estrutura

- `app/`: arquivos públicos do site.
- `nginx/default.conf`: configuração do servidor web.
- `scripts/deploy.sh`: atualiza o repositório e reinicia o container.
- `docker-compose.yml`: ambiente Docker local, exposto apenas em `127.0.0.1:8092`.

## Executar

```bash
docker compose up -d
```

Validar:

```bash
curl -I http://127.0.0.1:8092
```

## Dominios

- Producao: `https://www.massoterapiarj.com.br`
- Raiz: `https://massoterapiarj.com.br`
- Fallback legado: `https://massoterapiarj.iaguru.com.br`

## Proxy

No Nginx Proxy Manager, manter um Proxy Host para:

- `www.massoterapiarj.com.br`
- `massoterapiarj.com.br`

Apontando para:

- Forward Hostname/IP: `127.0.0.1`
- Forward Port: `8092`
- SSL: Let's Encrypt
- Force HTTPS: ativo

O dominio legado `massoterapiarj.iaguru.com.br` permanece ativo apenas como fallback.

## Deploy

```bash
./scripts/deploy.sh
```
