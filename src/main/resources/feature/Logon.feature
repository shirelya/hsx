@run
Feature: Test Login
 
Scenario Outline: Login Success and Failure
    Given I navigate to the mock application
    When I try to login with username "<username>" password "<password>"
    Then I should see that I logged in "<status>"
     
Examples: test logon
    | username   | password     | status         |  
    | SAP0014    | Welcome3     | successfully   |  
    | test1      | password1    | fail           | 