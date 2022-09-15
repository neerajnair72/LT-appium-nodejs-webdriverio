exports.config = {
  user: process.env.LT_USERNAME || "neerajn",
  key: process.env.LT_ACCESS_KEY || "J3zIzXZfnxcFZDjaG5SmRb9cIUjoRtjzcX5fPsQcWxVkxBX3Lf",

  updateJob: false,
  specs: ["specs/android-test.js"],
  exclude: [],

  capabilities: [
    {
      build: "NodeJS WebDriverIO Android",
      name: "Sample Test - WebDriverIO",
      isRealMobile: true,
      platformName: "Android",
      deviceName: "Galaxy S9",
      platformVersion: "10",
      app: "lt://APP10160551841661881100530126", //Set your APP URL
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
