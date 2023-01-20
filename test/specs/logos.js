describe("Company details", () => {
    it("get company, name contact details & logo", async () => {
        browser.url("https://www.medicines.org.uk/emc/company/13");
        await $("#onetrust-accept-btn-handler").click();

       const logos = await $('.img-responsive').getAttribute('src');
       console.log("HERE:", logos);
    

    })
})
