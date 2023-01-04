describe('Fill in Contact input fields, submit form & assert success message', () => {
    it('fill in name, email, phone & message', async () => {
        await browser.url('/contact/');
        //add Name
        await $('#evf-277-field_ys0GeZISRs-1').addValue('Jason');
        // add Email address
        await $('#evf-277-field_LbH5NxasXM-2').addValue('test@testy.co.uk');
        // add phone number
        await $('#evf-277-field_66FR384cge-3').addValue('00000000000');
        // add message
        await $('#evf-277-field_yhGx3FOwr2-4').addValue('Hello');

        // add.Value add value
        // set.Value add clears the input first then addds value
          
    });

    it('submit contact deatils', async () => {

        await $('#evf-submit-277').click();
        
    });

    it('Assert success message', async () => {
        // assert Thanks for contacting us! We will be in touch with you shortly
        const alertMessage = $('[role="alert"]');
    
        await expect(alertMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly');

       


        
    });
    
});