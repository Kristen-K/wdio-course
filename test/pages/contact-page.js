class ContactPage {
    open() {
        return browser.url('/contact/');
    }

    get inputName() {
        return $('#evf-277-field_ys0GeZISRs-1');
    }

    get inputEmail() {
        return $('#evf-277-field_LbH5NxasXM-2');
    }

    get inputPhoneNumber() {
        return $('#evf-277-field_66FR384cge-3');
    }

    get txtAreaMessage() {
        return $('#evf-277-field_yhGx3FOwr2-4');
    }

    get btnSubmit() {
        return $('#evf-submit-277');
    }

    get alertRole() {
        return $('[role="alert"]');
    }

    async submitForm(name, email, phone, message) {
        await this.inputName.addValue(name);
        await this.inputEmail.addValue(email);
        await this.inputPhoneNumber.addValue(phone);
        await this.txtAreaMessage.addValue(message);
        await this.btnSubmit.click();  
    }
}

export default new ContactPage();
