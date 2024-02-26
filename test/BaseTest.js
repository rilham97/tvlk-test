import { Builder } from "selenium-webdriver";
import fs from "fs-extra";
import config from "../config.json" assert { type: "json" };

export async function setupDriver(testContext) {
  await fs.emptyDir("output");
  await fs.mkdirp("output");
  testContext.timeout(config.timeout);
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.manage().window().maximize();
  await driver.get(config.baseUrl);
  return driver;
}

export async function baseAfterEach(driver, testContext) {
  console.log("Starting afterEach");
  const projectDir = process.cwd();
  console.log("Project Directory:", projectDir);
  const screenshot = await driver.takeScreenshot();
  console.log("Screenshot taken");
  const filePath = `${projectDir}/output/screenshot-${testContext.currentTest.title}.png`;
  console.log("File Path:", filePath);
  fs.writeFileSync(filePath, screenshot, "base64");
  console.log("Screenshot saved");
}

export async function teardownDriver(driver) {
  await driver.quit();
}
