const expect = require("chai").expect;
const { Given, When, Then } = require('cucumber');

  Given(/^I go to the website "([^"]*)"$/, (url) => {
    browser.url(url);
  });

  Then(/^I expect the title of the page to be "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
  });

  Then('I should see the header logo', () => {
    expect(browser.isVisible(".header-logostyled__HeaderLogo-qhih6t-0.jicFDR"));
  });

  Then(/^I should see the header text "([^"]*)"$/, (text) => {
    expect(
      browser.getText(
        ".hp-spotlight-main-titlestyled__HPSpotlightMainTitle-s1clh8vh-0.hUktO"
      )
    ).to.be.eql(text);
  });

  Then('I should see the search bar', () => {
    expect(browser.isVisible("#lbi-autocomplete"));
  });
