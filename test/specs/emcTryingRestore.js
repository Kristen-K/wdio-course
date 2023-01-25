//const fs = require('fs');

//helper function (time 5.50)
// function jsonReader(filePath, cb) {
//     fs.readFile(filePath, 'utf-8', (err, fileData) => {
//         if (err) {
//             return cb && cb(err);
//         } try {
//             const object = JSON.parse(fileData);
//             return cb & cb(null, object);
//         } catch (err) {
//             return cb & cb(err);
//         }
//     })
// }

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
        // final array of comoany data
        const companyList = [];
        let anObject = {};
        let companyObject = {};
       
        //console.log("Over here:", direct);

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
        const title = await $('h1');
        companyList.push(await title.getText());

        ///// heading keys
        const contactHeadings = await $$('.gfdCompanyDetailsTitle');
        const headingText = [];

        // company details - values
        const companyDetails = await $$('.gfdCompanyDetailsCol p');
        const companyInformation = [];
        //let contactMap = new Map();
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

      for (var h = 0; h < headingText.length; h ++ ) {
        anObject =  Object.assign(...headingText.map((k, i) => ({ [k]: companyInformation[i]}) ))
       

      }
      
      let objectArray = Object.entries(anObject);
      // delete before run
      for (var k = 0; k < companyList.length; k++) {
        objectArray['Company name:'] = companyList[k];
       }

       console.log("HERE:", objectArray);
      
        

       }


       //console.log("here:", companyList);
       //console.log("here:", companyObject);

    //    jsonReader('./test/data/companies.json', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //       data.name = companyList;
    //         anObject;
    //         fs.appendFile('./test/data/companies.json', JSON.stringify(data, null, 2), err => {  
    //             if (err) {
    //                 console.log(err);
    //             }
    //          })
    //      }
    // });

    })

})

    
