$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "\r\nAs a user I want to shop computer products successfully",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11310791500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to arrange products in \"Name: Z to A\" alphabetical order",
  "description": "",
  "id": "computer-test;user-should-able-to-arrange-products-in-\"name:-z-to-a\"-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on computer top tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select sort by position \"Name: Z to A\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be able to verify the product arranged in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 999988100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepdefs.iMouseHoverOnComputerTopTab()"
});
formatter.result({
  "duration": 339186200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 28
    }
  ],
  "location": "ComputerStepdefs.iMouseHoverAndClickOn(String)"
});
formatter.result({
  "duration": 3075905801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: Z to A",
      "offset": 27
    }
  ],
  "location": "ComputerStepdefs.iSelectSortByPosition(String)"
});
formatter.result({
  "duration": 1305874799,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepdefs.iShouldBeAbleToVerifyTheProductArrangedInDescendingOrder()"
});
formatter.result({
  "duration": 4155976400,
  "status": "passed"
});
formatter.after({
  "duration": 1611433200,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/topmenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "\r\nAs a user I want to click on top menu tabs and verify page navigation on nopcommerce website",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to click top menu tab and navigate to \"\u003ctopMenuTab\u003e\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"\u003ctopMenuTab\u003e\" from top tabs",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"\u003ctopMenuTab\u003e\" and verify the page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;",
  "rows": [
    {
      "cells": [
        "topMenuTab"
      ],
      "line": 15,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;1"
    },
    {
      "cells": [
        "Computers"
      ],
      "line": 16,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;2"
    },
    {
      "cells": [
        "Electronics"
      ],
      "line": 17,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;3"
    },
    {
      "cells": [
        "Apparel"
      ],
      "line": 18,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;4"
    },
    {
      "cells": [
        "Digital downloads"
      ],
      "line": 19,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;5"
    },
    {
      "cells": [
        "Books"
      ],
      "line": 20,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;6"
    },
    {
      "cells": [
        "Jewelry"
      ],
      "line": 21,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;7"
    },
    {
      "cells": [
        "Gift Cards"
      ],
      "line": 22,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4395764500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to click top menu tab and navigate to \"Computers\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Computers\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Computers\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 60900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 2619903200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1122728199,
  "status": "passed"
});
formatter.after({
  "duration": 1285339099,
  "status": "passed"
});
formatter.before({
  "duration": 4480151400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should be able to click top menu tab and navigate to \"Electronics\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Electronics\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Electronics\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 2714195800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1090094901,
  "status": "passed"
});
formatter.after({
  "duration": 1269708500,
  "status": "passed"
});
formatter.before({
  "duration": 4940449400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should be able to click top menu tab and navigate to \"Apparel\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Apparel\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Apparel\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 70500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 2749347401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1105556700,
  "status": "passed"
});
formatter.after({
  "duration": 1313409300,
  "status": "passed"
});
formatter.before({
  "duration": 4993452500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to click top menu tab and navigate to \"Digital downloads\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Digital downloads\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Digital downloads\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 130699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 2689924000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1104542200,
  "status": "passed"
});
formatter.after({
  "duration": 1299082899,
  "status": "passed"
});
formatter.before({
  "duration": 4801353601,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to click top menu tab and navigate to \"Books\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Books\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Books\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 57600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 2673224799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1100251099,
  "status": "passed"
});
formatter.after({
  "duration": 1282370599,
  "status": "passed"
});
formatter.before({
  "duration": 4014518899,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to click top menu tab and navigate to \"Jewelry\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Jewelry\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Jewelry\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 117500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 2688748000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1095104300,
  "status": "passed"
});
formatter.after({
  "duration": 1241551000,
  "status": "passed"
});
formatter.before({
  "duration": 4702875200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to click top menu tab and navigate to \"Gift Cards\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Gift Cards\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Gift Cards\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 56500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 2792523801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1091167699,
  "status": "passed"
});
formatter.after({
  "duration": 1273364900,
  "status": "passed"
});
});