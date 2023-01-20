describe("Company details", () => {
    it("get company, name contact details & logo", async () => {
        browser.url("https://www.medicines.org.uk/emc/company/13");
        await $("#onetrust-accept-btn-handler").click();
        // asigns element to variable then logs text
        //const title = await $('h1');
       //console.log("Here:" , await title.getText());


       //can use $$ to get array but can't .get text of more than 1 at the moment 
        const contactHeadings = await $$('.gfdCompanyDetailsTitle');
        const headingText = [];
        const companyDetails = await $$('.gfdCompanyDetailsCol p');
        const companyInformation = [];
        console.log("HERE:", companyDetails);
        
         //********** to use
        //loops & pushes the titles to new variable 
        // for (var contact of contactHeadings ) {
        //     headingText.push(await contact.getText());
        // }

        //console.log("HERE:", headingText);

        //********** to use
         //loops & pushes the company info to new variable 
        for (var company of companyDetails ) {
            companyInformation.push(await company.getText());
        }

        console.log("HERE:", companyInformation);
    })
})
