const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');


When('I click the Add button to start adding a note', async () => {
    const addBtn = await $('~Add');
    await addBtn.waitForDisplayed({ timeout: 30000 });
    await addBtn.click();
});

When('I select the Note type as Text', async () => {
    const noteTypeBtn = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.TextView');
    await noteTypeBtn.waitForDisplayed({ timeout: 30000 });
    await noteTypeBtn.click();
});

When('I click on the input field and add my title for the text note', async () => {
    const titleField = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_title');
    await titleField.waitForDisplayed({ timeout: 30000 });
    await titleField.click();
    await titleField.sendKeys(["My List1"]);
});


Then('I should verify the text note title', async () => {
    const mainMenu = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/title');
    await mainMenu.waitForDisplayed({ timeout: 50000 });
    const text = await mainMenu.getText();
    expect(text).to.equal('My List1');
    // expect(await mainMenu.isDisplayed()).to.be.true;
});
