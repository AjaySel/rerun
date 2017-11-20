Feature: Signup for an Salesforce Developer Account
Scenario: Register with a temporary email address

Given I register for a Salesforce Developer account

When I confirm my account email

And I complete the registration process by setting a password
Then I should be on the Salesforce Developer instance homepage
