describe("Home", () => {
  it("Open URL, get href of each directory page & get data", async () => {
    await browser.url("/emc/company/3309");
    await $("#onetrust-accept-btn-handler").click();

    let companyDetails = {}

    companyDetails["Company Name"] = await $("h1").getText()

    console.log("HERE: ", companyDetails)


  });
});
