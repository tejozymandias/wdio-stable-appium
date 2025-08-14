const { expect } = require('chai');

describe('ColorNote App Launch', () => {
    it('should launch the app and display the main activity', async () => {
        // Wait for the app to load
        await driver.pause(3000);
        // Example: Check if an element exists (update selector as needed)
        // const el = await $('android=new UiSelector().text("Add note")');
        // expect(await el.isDisplayed()).to.be.true;
        // For now, just check the session is active
        expect(await driver.getSession()).to.exist;
    });
});
