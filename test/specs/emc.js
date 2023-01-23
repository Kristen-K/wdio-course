// const path = require('path');

//const fs = require('fs');

// helper function (time 5.50)
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
        let companyObject = [];
        // titles
        let companyList = [];
        //console.log("Over here:", direct);

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
        let companyInfo = {}

        companyInfo["Company Name"] = await $("h1").getText()

        console.log(companyInfo)
       

        for (var t = 0; t < title.length; t ++ ) {
            // creates key value pairs
           
            name.push(await title.getText());
            nameMap.set("Name", name[t]);
            console.log("HERE:", name[t]);
            console.log("HERE:", nameMap[t]);
            
            companyList.push(await nameMap[t]);
    }

        /////
        const contactHeadings = await $$('.gfdCompanyDetailsTitle');
        const headingText = [];
        const companyDetails = await $$('.gfdCompanyDetailsCol p');
        const companyInformation = [];

    //     // object
    //     //const companyInformation = {};
    //     let contactMap = new Map();
    //     //console.log("HERE:", companyDetails);
        
    //      //********** to use
        //loops & pushes the titles to new variable 
        for (var contact of contactHeadings ) {
            headingText.push(await contact.getText());
           
        }

    //      //loops & pushes the company info to new variable 
    //      for (var company of companyDetails ) {
    //       companyInformation.push(await company.getText());
    //   }
         

    //       for (var h = 0; h < headingText.length; h ++ ) {
    //            // creates key value pairs
    //             //works but format not right?
    //            contactMap.set(headingText[h], companyInformation[h]);
      }

        //  companyList.push(contactMap);
        //  // do these need to move up? should be ok
        // companyObject = Object.assign(companyList);

       //}
       // console.log("HERE:", companyObject);
        // console.log("HERE:", name);
        // console.log("HERE:", nameMap);

    })

})



// works with title, need to update latter]
// jsonReader('./test/data/companies.json', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//        data.name = companyList,
//         fs.writeFile('./test/data/companies.json', JSON.stringify(data, null, 2), err => {
//             if (err) {
//                 console.log(err);
//             }
//          })
//      }
// })