describe("Home", () => {
  it("Open URL & get href of a-z directory page", async () => {
    browser.url("https://www.medicines.org.uk/emc/browse-companies/W");
    await $("#onetrust-accept-btn-handler").click();
    //const k = await $('.col-md-6 ul li a').getAttribute('href');
    //console.log(k);

    let companyHrefs = [];
    let threePages = [];
    const direct = await $$(".col-md-6 ul li a");

    // const loop = async function () {
    //   for (var i = 0; i < direct.length; i++) {
    //     if (i === 0) {
    //       threePages.push(await direct[0]).getAttribute("href");
    //     }
    //   }
    //   console.log("HERE:", threePages);
    //   // for (var d of direct) {
    //   //     //hrefs = await l.getAttribute('href');
    //   //     companyHrefs.push(await d.getAttribute('href'));
    //   //     //threePages.push(companyHrefs[0])
    //   // }
    //   
    // };
    // loop();

    for (var i = 0; i < direct.length; i++) {
      if (i === 0) {
        // const companyOne = await $(direct[0]).getAttribute("href")
        // console.log(companyOne)
        // threePages.push(await $(direct[0])).getAttribute("href");
        threePages.push(await $(direct[0]).getAttribute("href"))
      } else if (i === 2) {
        threePages.push(await $(direct[2]).getAttribute("href"))
      } else if (i === direct.length -1) {
        console.log(direct.length-1);
        threePages.push(await $(direct[direct.length -1]).getAttribute("href"))
      }
    }

    console.log(threePages);
  });
});
