

//ul class="browse" li loop then collect href

describe("Home", () => {
    it("Open URL, get href of each directory page & get data", async () => {
        await browser.url("/emc/browse-companies");
        await $('#onetrust-accept-btn-handler').click();

        //onetrust-accept-btn-handler
    
        const urlList = await $$('.browse li a');
        //below works
        //console.log("HERE:", await $('.browse li a').getAttribute('href'));
    

        let hrefs = [];


        // switch to for of look for await
        for (var l of urlList) {
            //hrefs = await l.getAttribute('href');
            hrefs.push(await l.getAttribute('href'));
        }
       //console.log("HERE", hrefs)

        let info = [];

       for (var i = 0; i < hrefs.length; i++) {
        //await browser.pause(5000);
        await browser.url(hrefs[i]);

        const pageList = await $('.col-md-6 ul li a').getAttribute('href');
        console.log("HERE:", pageList)


         //getAttribute('href'));
         //console.log("HERE:", await $('.col-md-6 ingredients ieleft ul:nth-child(2)').getAttribute('href'));
        // get data from 3 sites
        // for (var p = 0; p < pageList.length; p++ ) {
        //     info.push(await pageList.getAttribute('href'));
        //     // console.log("HERE", pageList)
        // }
       

      
        //console.log("HERE", info);
        //.col-md-6 ingredients ieleft ul:nth-child(2)

        //info = await (await $('.col-md-6 ingredients ieleft ul:nth-child(0)')).getAttribute('href');

        //console.log("HERE", info)
        //console.log("HERE:", $('.col-md-6 ingredients ieleft ul:nth-child(2)').getHTML('a'));

        // helps with list of 3 await $('.row .entry:nth-child(0)').$('button*=Add').click()
        //console.log("HERE", hrefs)
       }

    })

})




    //old loop
    //    urlList.forEach(function (link) {
    //     hrefs = link.getAttribute('href');
    //     console.log("HERE", hrefs)
    //    })