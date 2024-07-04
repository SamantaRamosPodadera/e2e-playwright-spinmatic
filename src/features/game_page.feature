Feature: Game

  Scenario: enter Game
    Given I navigate to spinmatic homepage
    When I select Game menu
    Then I should see the title Game

    Scenario: play game 
    Given I navigate to spinmatic homepage
    When I select Game menu
    When I press Plata o Plomo Deluxe
    When I press PLAY NOW
    Then I should see "Are you over 18?This game requires you to be 18 years or older to playYesNo"
    Then I press "NO"