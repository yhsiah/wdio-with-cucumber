Feature: Go to Culture Trip homepage
    I should be able to go the the homepage
    And check the header loads correctly

Scenario: Go the the home page and check
    Given I go to the website "https://www.theculturetrip.com"
    Then I expect the title of the page to be "Local Inspiration From Around The World | Culture Trip"
    And I should see the header logo
    And I should see the header text "Find your inspiration"
    And I should see the search bar