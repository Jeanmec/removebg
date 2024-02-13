module.exports = {
  apps: [
    {
      name: "remove-my-background-front",
      port: "4444",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
