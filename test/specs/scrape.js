describe("Company details", () => {
    it("get company, name contact details & logo", async () => {
        browser.url("https://www.medicines.org.uk/emc/company/13");
        await $("#onetrust-accept-btn-handler").click();

        ///********** to use
        // asigns element to variable then logs text
        //const title = await $('h1');
        // below needs to be pushed to company array when all details are ready
       //console.log("Here:" , await title.getText());

        //const Company = [];
        const contactHeadings = await $$('.gfdCompanyDetailsTitle');
        const headingText = [];
        const companyDetails = await $$('.gfdCompanyDetailsCol p');
        const companyInformation = [];
        let contactMap = new Map();
        //console.log("HERE:", companyDetails);
        
         //********** to use
        //loops & pushes the titles to new variable 
        for (var contact of contactHeadings ) {
            headingText.push(await contact.getText());
        }

        //console.log("HERE:", headingText);

        //********** to use
         //loops & pushes the company info to new variable 
        for (var company of companyDetails ) {
            companyInformation.push(await company.getText());
        }

        for (var h = 0; h < headingText.length; h ++ ) {
            contactMap.set(headingText[h], companyInformation[h]);
        }
        console.log("HERE:", contactMap);

        //console.log("HERE:", companyInformation);
    

    })
})
