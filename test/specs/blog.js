//import { expect as expectChai } from 'chai'
//import { expect as expectWDIO } from '@wdio/globals'

describe('Get list of recent posts, check they are >10 characters & total of 4 posts  ', () => {
    it('Get list of recent posts', async () => {


            await browser.url('/blog/');

            // Get recent Post list elements
            const recentPostList = await $$('#recent-posts-3 ul li');

            // Loop through the list & assert the text length is greater than 10
            for (const item of recentPostList) {
                const text = await item.getText();
                await expect(text.length).toBeGreaterThan(10);
            }

            // Assert the total length of the list is 4
            await expect(recentPostList).toHaveLength(5);

        //TESTING alt solution works
        //await browser.url('/blog/');
       
        // let postList = [];

        // const elems = await $('#recent-posts-3').$("ul").$$("li")

        // await expect(elems).toBeExisting();

        //     // Notes Specific to objects, will not work on strings
        // //NOTES await expect(elems).toBeElementsArrayOfSize({ lte: 5 });

        // for (const elem of elems) {
        //     postList.push(await elem.getText());
        // };

        // await expectChai(postList).to.have.lengthOf(5);

        // const countPostList = await browser.$$('postList')

    

        // for (let i = 0 ; i < postList.length;i++) {
        //     // NOTES Runs 5 times, with values of step 0 through 4.
        
        //     console.log("HERE I AM: ",postList[i]);
        //     expectChai(postList[i]).to.have.lengthOf.at.least(10);
        // }

        //END OF TEST

        // countPostList.forEach( async (blog) => {
        // //   await expectChai(blog).to.have.lengthOf.at.least(1000);
        //     await console.log("HERE: ",postList);
            
        // }); 

        // const countPostList = $$('postList')
        // countPostList.forEach((blog) => {
        //    expectChai(blog).to.have.lengthOf.at.least(10000);
        //     console.log(countPostList);
            
        // }); 


        //await expectChai(postList).to.have.lengthOf.at.least(10);

        // console.log("HERE:", Array.isArray(postList));

        //await expect(postList).toHaveChildren(5);
       
        //check the number of posts in the array of elems - use below 3 lines
        // console.log("HERE:", elems);

        //console.log("OVER HERE", typeof postList);

        //await browser.pause(10000);
        //console.log("HERE:", $$('#recent-posts-3').length);
        // console.log("HERE:", postList.length);
        // console.log("OVER HERE", Array.isArray(postList));

        // await expect(postList).toBeElementsArrayOfSize(5);

        //await expect(postList).toBeElementsArrayOfSize(5);

        // for (const list of recentPosts) {
        //     postList.push(await list.getText());
        // }

     
    });  
    
});