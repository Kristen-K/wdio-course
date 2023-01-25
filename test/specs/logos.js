describe("Company details", () => {
    it("get company, name contact details & logo", async () => {
        browser.url("https://www.medicines.org.uk/emc/company/13");
        await $("#onetrust-accept-btn-handler").click();

        let title = await $('h1').getText();
        console.log(title);


        // set path as a variable? how
        let path = `test/data/logos/${title}.png`;
       const logos = await $('.img-responsive')
       await logos.saveScreenshot(path);
    
       //console.log("HERE:", logos);
    

    })
})




 // to try out wrong - need to add path of where to save not href on logos 
 // create direct then save each file name as title
//  const logos = await $('.img-responsive').getAttribute('src');
//  await logos.saveScreenshot('test/data/logos/name.png');

 // try something like thsi ${title} test/data/logos/${title}
    
