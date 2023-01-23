// const fs = require('fs');

// //helper function (time 5.50)
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

    
      // for (var c = 0; 0 < companyContactDetailTitles.length; c++) {
      //   // companyInfo["Company contact title"] = 
      //   await $('.gfdCompanyDetailsTitle').getText();
      //   // companyInfo["Company contact details"] = await $$('.gfdCompanyDetailsTitle p').getText();
      // }

      for (var c of companyContactDetailTitles) {
        let titleKey = await c.getText();
        console.log(titleKey);
        //companyInfo.titleKey = titleKey;
        // companyInfo.push(titleKey);
        //console.log(titleKey);
        //Object.assign(companyInfo, await companyContactDetailTitles.getText(c));
        //companyInfo.push(await c.getText());
      }
      

        console.log("Here:", companyInfo);
        

    //   jsonReader('./test/data/companies.json', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //        //data.name = companyInfo,
    //        data = {companyInfo}
    //         fs.appendFile('./test/data/companies.json', JSON.stringify(data, null, 2), err => {  
    //             if (err) {
    //                 console.log(err);
    //             }
    //          })
    //      }
    // });

    }
  });
});

// Update jsonReader function to create object with key that is the name of the company, example below:
// {
//   "Zogenix International Limited": {
//   }
// }
// Update jsonReader function so it does not overwrite the file but instead adds a new object for each company
// add code to get title of each piece of contact information and its actual information, this is most likely a child of the title element
// wite this info to the company object 
