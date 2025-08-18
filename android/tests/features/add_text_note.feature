Feature: Add Text Note
Background:
  Given the app is launched
  When I click the Next button
  When I skip the tool tip
Scenario: Add a new text note in ColorNote
  And I click the Add button to start adding a note
  And I select the Note type as Text
  And I click on the input field and add my title for the text note
  And I hit the back button to remove the keypad
  And I hit the back button again to save the changes
  And I hit the back button again to navigate to the main menu
  Then I should verify the text note title
