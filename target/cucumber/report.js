$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Logon.feature");
formatter.feature({
  "line": 2,
  "name": "Test Login",
  "description": "",
  "id": "test-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Success and Failure",
  "description": "",
  "id": "test-login;login-success-and-failure",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the mock application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I try to login with username \"\u003cusername\u003e\" password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see that I logged in \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "test logon",
  "description": "",
  "id": "test-login;login-success-and-failure;test-logon",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "status"
      ],
      "line": 10,
      "id": "test-login;login-success-and-failure;test-logon;1"
    },
    {
      "cells": [
        "SAP0014",
        "Welcome3",
        "successfully"
      ],
      "line": 11,
      "id": "test-login;login-success-and-failure;test-logon;2"
    },
    {
      "cells": [
        "test1",
        "password1",
        "fail"
      ],
      "line": 12,
      "id": "test-login;login-success-and-failure;test-logon;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login Success and Failure",
  "description": "",
  "id": "test-login;login-success-and-failure;test-logon;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to the mock application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I try to login with username \"SAP0014\" password \"Welcome3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see that I logged in \"successfully\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsImp.given_I_navigate_to_the_mock_application()"
});
formatter.result({
  "duration": 18661122577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SAP0014",
      "offset": 30
    },
    {
      "val": "Welcome3",
      "offset": 49
    }
  ],
  "location": "StepsImp.when_I_try_to_login(String,String)"
});
formatter.result({
  "duration": 462843557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 31
    }
  ],
  "location": "StepsImp.then_I_login(String)"
});
formatter.result({
  "duration": 1695231106,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login Success and Failure",
  "description": "",
  "id": "test-login;login-success-and-failure;test-logon;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to the mock application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I try to login with username \"test1\" password \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see that I logged in \"fail\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsImp.given_I_navigate_to_the_mock_application()"
});
formatter.result({
  "duration": 16177666027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 30
    },
    {
      "val": "password1",
      "offset": 47
    }
  ],
  "location": "StepsImp.when_I_try_to_login(String,String)"
});
formatter.result({
  "duration": 324915285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fail",
      "offset": 31
    }
  ],
  "location": "StepsImp.then_I_login(String)"
});
formatter.result({
  "duration": 1261316876,
  "status": "passed"
});
});