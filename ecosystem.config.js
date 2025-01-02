module.exports = {
    apps: [
      {
        name: "app-name",
        script: "server.js",
        env: {
          NODE_ENV: "development",
        },
        env_staging: {
          NODE_ENV: "staging",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  