const { When } = require('@wdio/cucumber-framework');

When('I hit the back button to remove the keypad', async () => {
    // com.socialnmobile.dictapps.notepad.color.note:id/viewlist
    //com.socialnmobile.dictapps.notepad.color.note:id/viewlist resource-id
    await driver.pause(3000);
    await driver.back();
});

When('I hit the back button again to save the changes', async () => {
    await driver.pause(3000);
    // const viewList = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/viewlist');
    // await viewList.waitForDisplayed({ timeout: 30000 });
    await driver.back();
});

When('I hit the back button again to navigate to the main menu', async () => {
    // com.socialnmobile.dictapps.notepad.color.note:id/note_list
    //com.socialnmobile.dictapps.notepad.color.note:id/note_list resource-id
    await driver.pause(3000);
    // const noteList = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/note_list');
    // await noteList.waitForDisplayed({ timeout: 30000 });
    await driver.back();
});
