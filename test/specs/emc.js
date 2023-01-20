// const fs = require('fs');
// const path = require('path');

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
        //console.log("Over here:", direct);

       for (var i = 0; i < hrefs.length; i++) {
        await browser.url(hrefs[i]);
         direct = await $$(".col-md-6 ul li a");

        for (var d = 0; d < direct.length; d++) {
            if (d === 0) {
             //this works console.log("Here:", direct[0]);
              threePages.push(await direct[0].getAttribute('href'))
            
            } else if (d === 2) {
              threePages.push(await $(direct[2]).getAttribute("href"))
            } else if (d === direct.length -1) {
              threePages.push(await $(direct[direct.length -1]).getAttribute("href"))
            }
          }
        
       }

       console.log("HERE:", threePages);

    })

})

// list of hrefs to use
// ] HERE: [
//     [0-0]   '/emc/company/644',  '/emc/company/4084', '/emc/company/4221',
//     [0-0]   '/emc/company/2442', '/emc/company/13',   '/emc/company/4017',
//     [0-0]   '/emc/company/3873', '/emc/company/2683', '/emc/company/1055',
//     [0-0]   '/emc/company/115',  '/emc/company/2739', '/emc/company/3279',
//     [0-0]   '/emc/company/44',   '/emc/company/3290', '/emc/company/48',
//     [0-0]   '/emc/company/2628', '/emc/company/50',   '/emc/company/2745',
//     [0-0]   '/emc/company/4204', '/emc/company/669',  '/emc/company/3063',
//     [0-0]   '/emc/company/2175', '/emc/company/4163', '/emc/company/1072',
//     [0-0]   '/emc/company/3917', '/emc/company/4145', '/emc/company/68',
//     [0-0]   '/emc/company/69',   '/emc/company/1812', '/emc/company/3982',
//     [0-0]   '/emc/company/3186', '/emc/company/427',  '/emc/company/3678',
//     [0-0]   '/emc/company/4220', '/emc/company/4130', '/emc/company/4173',
//     [0-0]   '/emc/company/2380', '/emc/company/3338', '/emc/company/88',
//     [0-0]   '/emc/company/4137', '/emc/company/564',  '/emc/company/1561',
//     [0-0]   '/emc/company/3396', '/emc/company/789',  '/emc/company/4231',
//     [0-0]   '/emc/company/3333', '/emc/company/3306', '/emc/company/3212',
//     [0-0]   '/emc/company/2272', '/emc/company/111',  '/emc/company/3382',
//     [0-0]   '/emc/company/2502', '/emc/company/4201', '/emc/company/783',
//     [0-0]   '/emc/company/130',  '/emc/company/4076', '/emc/company/2387',
//     [0-0]   '/emc/company/133',  '/emc/company/4132', '/emc/company/3309',
//     [0-0]   '/emc/company/3258', '/emc/company/3906', '/emc/company/3204',
//     [0-0]   '/emc/company/35',   '/emc/company/902',  '/emc/company/4162'
//     [0-0] ]