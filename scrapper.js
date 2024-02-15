import "dotenv/config";
import puppeteer from "puppeteer";
import { customCSS } from "./customCSSTag.rules.js";

async function scrapScreener(companyName, format) {
  const browser = await puppeteer.launch();
  const nPage = await browser.newPage();
  nPage.addStyleTag({ content: customCSS });
  await nPage.goto(process.env.URL + companyName);

  if (format == "pdf") {
    await nPage.emulateMediaType("screen");
    const data = await nPage.pdf({
      path: `./PDF/${companyName}.${format}`,
      format: "A4",
      landscape: true,
    });
    await browser.close();
    return data;
  } else if (format == "png") {
    const data = await nPage.screenshot({
      path: `./images/${companyName}.${format}`,
      captureBeyondViewport: true,
      fullPage: true,
      fromSurface: true,
    });
    await browser.close();
    return data;
  }
}

(async (passedValue, passedFormat) => {
  console.log(
    "Generated Data for :  " + passedValue + " in " + passedFormat + " format"
  );
  await scrapScreener(passedValue, passedFormat);
})("ITC", "pdf");
