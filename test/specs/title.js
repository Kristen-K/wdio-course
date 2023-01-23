
describe("Home", () => {
    it("Open URL, get href of each directory page & get data", async () => {
        await browser.url("/emc/browse-companies");
        await $('#onetrust-accept-btn-handler').click();
    
        const urlList = await $$('.browse li a');
        let hrefs = [];

        for (var l of urlList) {
    
            hrefs.push(await l.getAttribute('href'));
        }
    
        let threePages = [];
        let direct = [];

        //title text & key value pair
        let name = [];
        let nameMap = new Map();

       for (var i = 0; i < hrefs.length; i++) {
        await browser.url(hrefs[i]);
         direct = await $$(".col-md-6 ul li a");

        for (var d = 0; d < direct.length; d++) {
            if (d === 0) {
              threePages.push(await direct[0].getAttribute('href'))
            } else if (d === 2) {
              threePages.push(await $(direct[2]).getAttribute("href"))
            } else if (d === direct.length -1) {
              threePages.push(await $(direct[direct.length -1]).getAttribute("href"))
            }
          }
        
       }

       /// merging new things created
       for (var p = 0; p < threePages.length; p++) {
        await browser.url(threePages[p]);
        // asigns element to variable then logs text - will need to give name to each object so will keep variable 
        // title element
        const title = await $('h1');
        name.push(title.getText());

        title.forEach(t => {
            nameMap.set("Name", name[t]);

        })

        
       
       

  
   
          
      } 
      
      console.log("HERE:", nameMap);
       } 
          )

})

// for (var t = 0; t < title.length; t ++ ) {
//     // creates key value pairs
   
//     name.push(await title.getText());
//     nameMap.set("Name", name[t]);
//     console.log("HERE:", name[t]);
//     console.log("HERE:", nameMap[t]);
    
//     //companyList.push(await nameMap[t]);
// }

