describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them', async () => {
        await browser.url('/');

        const expectedLinks = [
            "Home", 
            "About", 
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        const actualLinks = [];

        // wait until Home text is displayed on the navigation menu
        await browser.waitUntil(async function () {
            const homeText = await $('#primary-menu li').getText(); //Home
            return homeText === "Home"; // true | false
        }, {
            timeout: 5000,
            timeoutMsg: 'Could not verify the Home text from #primary-menu li'
        }
        )


        // alt fi want to change  const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        const navLinks = await $$('#primary-menu li[id*=menu]');

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks);


       
    })
});