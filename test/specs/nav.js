import HomePage from '../pages/home-page';

describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them', async () => {
        await HomePage.open();

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
            const homeText = await HomePage.NavComponent.firstNavMenu.getText(); //Home
            return homeText === "Home"; // true | false
        }, {
            timeout: 5000,
            timeoutMsg: 'Could not verify the Home text from #primary-menu li'
        });

        // wait until Home text is displayed on the navigation menu
       // await $('#primary-menu li').waitForDisplayed();

        // wait until Home link to be clickable in the navigation menu
        //await $('#primary-menu li').waitForClickable()

        //Verify if Home element is disabled
       // await $('#primary-menu li').waitForEnabled({reverse: true, timeoutMsg: 'Could not verify #primary-menu li is disabled'})


        // alt if want to change  const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        const navLinks = await HomePage.NavComponent.linksNavMenu;

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks);


       
    })
});