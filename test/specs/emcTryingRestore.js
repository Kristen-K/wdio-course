const fs = require("fs");

describe("Home", () => {
  it("Open URL, get href of each directory page & get data", async () => {
    await browser.url("/emc/browse-companies");
    await $("#onetrust-accept-btn-handler").click();

    const urlList = await $$(".browse li a");
    let hrefs = [];

    for (var l of urlList) {
      hrefs.push(await l.getAttribute("href"));
    }

    let threePages = [];
    let direct = [];
    // final array of comoany data
    let anObject = {};
    let objectArray = {};
    let companiesArray = [];

    for (var i = 0; i < hrefs.length; i++) {
      await browser.url(hrefs[i]);
      direct = await $$(".col-md-6 ul li a");

      for (var d = 0; d < direct.length; d++) {
        if (d === 0) {
          threePages.push(await direct[0].getAttribute("href"));
        } else if (d === 2) {
          threePages.push(await $(direct[2]).getAttribute("href"));
        } else if (d === direct.length - 1) {
          threePages.push(
            await $(direct[direct.length - 1]).getAttribute("href")
          );
        }
      }
    }

    for (var p = 0; p < threePages.length; p++) {
      await browser.url(threePages[p]);
      // main h1 company title
      let title = await $("h1").getText();

      ///// heading keys
      const contactHeadings = await $$(".gfdCompanyDetailsTitle");
      const headingText = [];

      // company details
      const companyDetails = await $$(".gfdCompanyDetailsCol p");
      const companyInformation = [];

      //loops & pushes the titles to new variable
      for (var contact of contactHeadings) {
        headingText.push(await contact.getText());
      }

      //loops & pushes the company info to new variable
      for (var company of companyDetails) {
        companyInformation.push(await company.getText());
      }

      for (var h = 0; h < headingText.length; h++) {
        anObject = Object.assign(
          ...headingText.map((k, i) => ({ [k]: companyInformation[i] }))
        );
      }

      objectArray = Object.entries(anObject);

      for (var k = 0; k < title.length; k++) {
      
        objectArray = { "Company name:": title, ...anObject };
      

        let path = `test/data/logos/${title}.png`;
        const logos = await $('.img-responsive')
        await logos.saveScreenshot(path);
      }
      companiesArray.push(objectArray);
    }
    
    fs.writeFileSync(
      "./test/data/companies.json",
      JSON.stringify(companiesArray, null, 2),
      { flag: "a+" },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File successfully written!");
        }
      }
    );
  });
});
