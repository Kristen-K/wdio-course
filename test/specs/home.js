import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';

describe("Home", () => {

  before(async () => {
    console.log('THIS CAN BE USED FOR TEST SETUP')
  })

  beforeEach(async () => {
    console.log('THIS RUNS BEFORE EACH TEST');
    await HomePage.open();
  })

  after(async () => {
    console.log('THIS CAN BE USED FOR TEST CLEANUP')
  })

  afterEach(async () => {
    console.log('THIS RUNS AFTER EACH TEST');
  })
  it("Open URL & assert test", async () => {
    allureReporter.addSeverity("minor");
    //Assert title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("Open About page & assert test", async () => {
    await browser.url("https://practice.automationbro.com/about/");

    //Assert url
    await expect(browser).toHaveUrl(
      "https://practice.automationbro.com/about/"
    );
  });

  it("Click get started button & assert URL contains get-started text", async () => {
    // Click Get Started button
    await HomePage.btnGetStarted.click();

    //Assert url contains get-started text
    await expect(browser).toHaveUrlContaining("get-started");
  });

  //img.custom-logo
  it("Click on logo button & assert URL does not contain get-started text", async () => {
    allureReporter.addFeature("Logo verification");
    // Click Logo 
    await HomePage.imageLogo.click();

    //Assert url doesn't contain get-started text
    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  it("Find heading element & assert the text", async () => {
    // find heading element
    const headingEl = await HomePage.txtHeading;

    // get the test
    // alt long way
    //const headingText = await headingEl.getText();

    //Assert the text
    await expect(headingEl).toHaveText('Think different. Make different.');

    // alt long way
    //await expect(headingText).toEqual('Think different. Make different.');
  });
});
