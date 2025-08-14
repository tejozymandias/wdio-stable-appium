const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

Given('the app is launched', async () => {
    // Wait for the app to load
    await driver.pause(3000);
});

When('I click the Next button', async () => {
    const nextBtn = await driver.$("com.socialnmobile.dictapps.notepad.color.note:id/step1_next");
    await nextBtn.click();
});

Then('the session should be active', async () => {
    expect(await driver.getSession()).to.exist;
});
