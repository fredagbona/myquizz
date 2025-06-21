module.exports = {
  apps: [
    {
      name: "myquizz-api",
      script: "src/app.js",
      cwd: '/var/www/myquizz',
      exec_mode: 'cluster',
      instances: max,
      autorestart: true,
      max_memory_restart: "500M",
      env_production: {
        NODE_ENV: "production",
        PORT: 30001
      },
      error_file: '/var/log/myquizz/error.log' 
    }
  ]
};
