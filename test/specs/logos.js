describe("Company details", () => {
    it("get company, name contact details & logo", async () => {
        browser.url("https://www.medicines.org.uk/emc/company/13");
        await $("#onetrust-accept-btn-handler").click();


        // to try out
       const logos = await $('.img-responsive').getAttribute('src');
    
       console.log("HERE:", logos);
    

    })
})




 // to try out wrong - need to add path of where to save not href on logos 
 // create direct then save each file name as title
 const logos = await $('.img-responsive').getAttribute('src');
 await logos.saveScreenshot('test/data/logos/name.png');

 // try something like thsi ${title} test/data/logos/${title}
    
