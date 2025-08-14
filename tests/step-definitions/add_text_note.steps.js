const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

Given('the app is launched', async () => {
    await driver.pause(3000);
});

When('I click the Next button', async () => {
    const nextBtn = await driver.elementById("com.socialnmobile.dictapps.notepad.color.note:id/step1_next");
    await nextBtn.click();
});

When('I skip the tool tip', async () => {
    const skipBtn = await driver.elementById("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip");
    if (await skipBtn.isDisplayed()) {
        await skipBtn.click();
    }
});

When('I click the Add button', async () => {
    const addBtn = await driver.elementByAccessibilityId("Add");
    await addBtn.click();
});

When('I select the Note type as Text', async (noteType) => {
    const noteTypeBtn = await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.TextView");
    await noteTypeBtn.click();
});

When('I click on the input field and add my title', async (title) => {
    const titleField = await driver.elementById("com.socialnmobile.dictapps.notepad.color.note:id/edit_title");
    await titleField.setValue(title);
    await titleField.sendKeys("My List1");
});

When('I hit the back button to save the text', async () => {
    await driver.back();
});

When('I hit the back button again to navigate to the main menu', async () => {
    await driver.back();
});

Then('I should see the main menu', async () => {
    const mainMenu = await $('android=new UiSelector().text("Notes")');
    expect(await mainMenu.isDisplayed()).to.be.true;
});
