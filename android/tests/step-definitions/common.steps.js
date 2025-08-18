const { When } = require('@wdio/cucumber-framework');

When('I hit the back button to remove the keypad', async () => {
    await driver.pause(3000);
    await driver.back();
});

When('I hit the back button again to save the changes', async () => {
    await driver.pause(3000);
    await driver.back();
});

When('I hit the back button again to navigate to the main menu', async () => {
    await driver.pause(3000);
    await driver.back();
});
