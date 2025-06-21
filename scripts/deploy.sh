#!/bin/bash

set -e

# Répertoire de développement
deploy_dir="/var/www/myquizz"

# Mettre à jour le code
cd $deploy_dir
git pull origin main

# Installation des dépendances
npm install

# Rdeploi avec pm2

pm2 reload ecosystem.config.js 
pm2 save