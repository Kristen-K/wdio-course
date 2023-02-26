describe("Company details", () => {
  it("get company, name contact details & logo", async () => {
    browser.url("https://www.medicines.org.uk/emc/company/13");
    await $("#onetrust-accept-btn-handler").click();

    let title = await $("h1").getText();
    console.log(title);

    let path = `test/data/logos/${title}.png`;
    const logos = await $(".img-responsive");
    await logos.saveScreenshot(path);
  });
});
