Feature: Contact


  Scenario: fill out contact
  Given I navigate to spinmatic homepage
  And I select Contact menu
  And I open Contact
  Then I can fill out Contact
  And I can leave the name field blank
  And I can see message "Please fill in this field"
