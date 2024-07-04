Feature: Contact

  Scenario: fill out contact with empty name
    Given I navigate to spinmatic homepage
    When I select Contact menu
    And I fill out name with ""
    And I fill out email with "samanta@gmail.com"
    When I press send mensage
    Then the input name is mark as invalid

  Scenario: email invalid format
    Given I navigate to spinmatic homepage
    When I select Contact menu
    And I fill out name with "Samanta"
    And I fill out email with "FDSghjksASjjjDDDJJK"
    When I press send mensage
    Then the input email is mark as invalid
