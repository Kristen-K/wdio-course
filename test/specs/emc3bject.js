
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
        let companyInfo = {};
  
        companyInfo["Company Name"] = await $("h1").getText();
        const companyContactDetailTitles = await $$('.gfdCompanyDetailsTitle');

         //title text & key value pair
         let name = [];
         let nameMap = new Map();
  
        for (var t = 0; t < title.length; t ++ ) {
                        // creates key value pairs
                       
                        name.push(await title.getText());
                        nameMap.set("Name", name[t]);
                        console.log("HERE:", name[t]);
                        console.log("HERE:", nameMap[t]);
                        
                        //companyList.push(await nameMap[t]);
               }
            
                    /////
                    const contactHeadings = await $$('.gfdCompanyDetailsTitle');
                    const headingText = [];
                    const companyDetails = await $$('.gfdCompanyDetailsCol p');
                    const companyInformation = [];
                    // object
                    //const companyInformation = {};
                    let contactMap = new Map();
                    //console.log("HERE:", companyDetails);
                    
                     //********** to use
                    //loops & pushes the titles to new variable 
                    for (var contact of contactHeadings ) {
                        headingText.push(await contact.getText());
                       
                    }
            
                     //loops & pushes the company info to new variable 
                     for (var company of companyDetails ) {
                      companyInformation.push(await company.getText());
                  }
                     
    
  
      
        
  
          console.log("Here:", companyInfo);
          
  
      
  
      }
    });
  });
  
 