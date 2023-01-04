//Practice E-Commerce Site – Automation Bro
//https://practice.automationbro.com/

describe("Home", () => {
  it("Open URL & assert test", async () => {
    //Open URL
    await browser.url("https://practice.automationbro.com/");

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
    // Open Home Page
    await browser.url("https://practice.automationbro.com/");

    // Click Get Started button
    await $("#get-started").click();

    //Assert url contains get-started text
    await expect(browser).toHaveUrlContaining("get-started");
  });

  //img.custom-logo
  it("Click on logo button & assert URL contains does not contain get-started text", async () => {
    // Open Home Page
    await browser.url("https://practice.automationbro.com/");

    // Click Logo button
    await $('//img[@alt="Practice E-Commerce Site"]').click();

    //Assert url doesn't contain get-started text
    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  it("Find heading element & assert the text", async () => {
    // Open Home Page
    await browser.url("https://practice.automationbro.com/");

    // find heading element
    const headingEl = await $(".elementor-widget-container h1");

    // get the test
    // alt long way
    //const headingText = await headingEl.getText();

    //Assert the text
    await expect(headingEl).toHaveText('Think different. Make different.');

    // alt long way
    //await expect(headingText).toEqual('Think different. Make different.');
  });
});
