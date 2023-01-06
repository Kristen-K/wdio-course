import ContactPage from '../pages/contact-page';

describe('Fill in Contact input fields, submit form & assert success message', () => {
    it('fill in name, email, phone & message', async () => {
        await ContactPage.open();

        await ContactPage.submitForm('Test Name','test@testy.co.uk', '00000000000','Hello');

        // add.Value add value
        // set.Value add clears the input first then addds value
          
    });

    it('Assert success message', async () => {
        // assert Thanks for contacting us! We will be in touch with you shortly
        //const alertMessage = $('[role="alert"]');
    
        await expect(ContactPage.alertRole).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
        
    });
    
});