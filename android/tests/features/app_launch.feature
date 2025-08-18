@TCID_TC-3195 @launch @smoke
Feature: App Launch
  Scenario: Launch the ColorNote app
    Given the app is launched
    When I click the Next button
    Then the session should be active
