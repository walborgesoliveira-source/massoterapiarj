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

## Proxy

No Nginx Proxy Manager, criar um Proxy Host para o domínio final apontando para:

- Forward Hostname/IP: `127.0.0.1`
- Forward Port: `8092`
- SSL: Let's Encrypt
- Force HTTPS: ativo

## Deploy

```bash
./scripts/deploy.sh
```
