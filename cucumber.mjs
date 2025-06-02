export default {
  require: ["src/tests/**/*.ts"],
  requireModule: ["ts-node/register"],
  format: ["allure-cucumberjs/reporter"],
  formatOptions: {
    resultsDir: "allure-results",
  },
  paths: ["src/tests/gui/features/contactUs.feature"],
};
