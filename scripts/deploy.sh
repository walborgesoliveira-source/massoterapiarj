#!/bin/bash
set -euo pipefail

cd /root/massoterapiarj

git pull --ff-only
docker compose up -d
