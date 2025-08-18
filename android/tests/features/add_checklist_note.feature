@TCID_TC-3194 @checklist @smoke
Feature: Add Checklist Note
Background:
  Given the app is launched
  When I click the Next button
  When I skip the tool tip
Scenario: Add a new checklist note in ColorNote
  And I click the Add button to start adding a checklist
  And I select the Note type as Checklist
  And I click on the input field and add my title for the checklist note
  And I click on the Add item
  And I add my Items
  And I click the next button
  And I add my second item and click ok
#   And I hit the back button to remove the keypad
  And I hit the back button again to save the changes
  And I hit the back button again to navigate to the main menu
  Then I should verify the checklist name
