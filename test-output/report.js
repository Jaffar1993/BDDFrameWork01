$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want a login page so that only authentic",
  "description": "users will be able to login",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#\tScenario Outline: Valid users should be able to login"
    },
    {
      "line": 6,
      "value": "#\tGiven I am on TechFios site"
    },
    {
      "line": 7,
      "value": "#\tWhen I enter \u003c\"username\"\u003e and \u003c\"password\"\u003e"
    },
    {
      "line": 8,
      "value": "#\tAnd I click on signin button"
    },
    {
      "line": 9,
      "value": "#\tThen Dashboard page should display"
    },
    {
      "line": 10,
      "value": "#"
    }
  ],
  "line": 12,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on TechFios site",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 20,
      "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3817453200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on TechFios site",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_am_on_TechFios_site()"
});
formatter.result({
  "duration": 93567200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 9
    },
    {
      "val": "abc123",
      "offset": 33
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 227785300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_signin_button()"
});
formatter.result({
  "duration": 1527407200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.dashboard_page_should_display()"
});
formatter.result({
  "duration": 245472200,
  "status": "passed"
});
});