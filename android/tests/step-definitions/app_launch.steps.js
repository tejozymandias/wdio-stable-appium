const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

Given('the app is launched', async () => {
    // Wait for the app to load
    await driver.pause(3000);
});

When('I click the Next button', async () => {
    const nextButton = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/step1_next');
    await nextButton.waitForDisplayed({ timeout: 30000 });
    await nextButton.click();
});

When('I skip the tool tip', async () => {
    const skipBtn = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip');
    await skipBtn.waitForDisplayed({ timeout: 30000 });
    await skipBtn.click();
});

Then('the session should be active', async () => {
    expect(await driver.getSession()).to.exist;
});
