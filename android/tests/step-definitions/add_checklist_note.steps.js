const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

When('I click the Add button to start adding a checklist', async () => {
    const addBtn = await $('~Add');
    await addBtn.waitForDisplayed({ timeout: 30000 });
    await addBtn.click();
});

When('I select the Note type as Checklist', async () => {
    const checklistTypeBtn = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[2]/android.widget.TextView");
    await checklistTypeBtn.waitForDisplayed({ timeout: 30000 });
    await checklistTypeBtn.click();
});

When('I click on the input field and add my title for the checklist note', async () => {
    const titleField = await $("id=com.socialnmobile.dictapps.notepad.color.note:id/edit_title");
    await titleField.waitForDisplayed({ timeout: 30000 });
    await titleField.click();
    await titleField.sendKeys(["My Checklist"]);
});

When('I click on the Add item', async () => {
    const addItem = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.TextView");
    await addItem.waitForDisplayed({ timeout: 30000 });
    await addItem.click();
});

When('I add my Items', async () => {
    const itemOne = await $("id=com.socialnmobile.dictapps.notepad.color.note:id/edit");
    await itemOne.waitForDisplayed({ timeout: 30000 });
    await itemOne.click();
    await itemOne.sendKeys(["Item 1"]);
});

When('I click the next button', async () => {
    const nxtButton = await $("id=android:id/button3");
    await nxtButton.waitForDisplayed({ timeout: 30000 });
    await nxtButton.click();
});

When('I add my second item and click ok', async () => {
    const itemTwo = await $("id=com.socialnmobile.dictapps.notepad.color.note:id/edit");
    await itemTwo.waitForDisplayed({ timeout: 30000 });
    await itemTwo.click();
    await itemTwo.sendKeys(["Item 2"]);
    const okButton = await $("id=android:id/button1");
    await okButton.waitForDisplayed({ timeout: 30000 });
    await okButton.click();
});

Then('I should verify the checklist name', async () => {
    const mainMenu = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/title');
    await mainMenu.waitForDisplayed({ timeout: 50000 });
    const text = await mainMenu.getText();
    expect(text).to.equal('My Checklist');
    // expect(await mainMenu.isDisplayed()).to.be.true;
});
