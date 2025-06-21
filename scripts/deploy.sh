#!/bin/bash

set -e

# Répertoire de développement
deploy_dir="/var/www/myquizz"

# Mettre à jour le code
cd $deploy_dir
git pull origin main

# Installation des dépendances
npm ci --only=production

# Rdeploi avec pm2

pm2 reload ecosystem.config.js --env production
pm2 save