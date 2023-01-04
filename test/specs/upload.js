const exp = require('constants');
const path = require('path');

describe('Upload Tests', () =>  {
    it('Upload on a hidden input field', async () => {
        //Open URL
        await browser.url('/cart/');

        //store test file path
        const filePath = path.join(__dirname, '../data/grey.png');

        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        //remove hidden class
        await browser.execute("document.querySelector('#upfile_1').className = ''");

        // set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click(); // click the submit button

        // assertion expect($)
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully')
        
       
        
    });

})