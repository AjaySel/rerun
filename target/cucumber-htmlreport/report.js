$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('org\testingworld\auatomation\assertion\loginTestCase.feature');
formatter.feature({
  "line": 1,
  "name": "Facebook Login funtionality",
  "description": "",
  "id": "facebook-login-funtionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.User_is_on_login_Page()"
});
formatter.result({
  "duration": 1740023364,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: C:\\Users\\ajjaiswa\\AppData\\Local\\Mozilla Firefox\\firefox.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:444)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:46)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:138)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:219)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:204)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:108)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:104)\r\n\tat org.testingworld.automation.base.CreateDriverinstance.getDriverInstancein(CreateDriverinstance.java:19)\r\n\tat org.testingworld.automation.testcase.Steps.User_is_on_login_Page(Steps.java:28)\r\n\tat ✽.Given User is on login Page(org\\testingworld\\auatomation\\assertion\\loginTestCase.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with Valid credentials",
  "description": "",
  "id": "facebook-login-funtionality;login-with-valid-credentials;wor-cmfd-s--;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters \"ajay0427@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"ididit\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ajay0427@gmail.com",
      "offset": 13
    }
  ],
  "location": "Steps.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ididit",
      "offset": 13
    }
  ],
  "location": "Steps.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.User_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.User_is_on_login_Page()"
});
formatter.result({
  "duration": 1582956,
  "error_message": "java.lang.IllegalStateException: Specified firefox binary location does not exist or is not a real file: C:\\Users\\ajjaiswa\\AppData\\Local\\Mozilla Firefox\\firefox.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:444)\r\n\tat org.openqa.selenium.firefox.internal.Executable.\u003cinit\u003e(Executable.java:46)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:138)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinaryOrNull(FirefoxOptions.java:219)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:204)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:108)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:104)\r\n\tat org.testingworld.automation.base.CreateDriverinstance.getDriverInstancein(CreateDriverinstance.java:19)\r\n\tat org.testingworld.automation.testcase.Steps.User_is_on_login_Page(Steps.java:28)\r\n\tat ✽.Given User is on login Page(org\\testingworld\\auatomation\\assertion\\loginTestCase.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Login with Valid credentials",
  "description": "",
  "id": "facebook-login-funtionality;login-with-valid-credentials;wor-cmfd-s--;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters \"jaiswalajay0427@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"password2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "jaiswalajay0427@gmail.com",
      "offset": 13
    }
  ],
  "location": "Steps.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password2",
      "offset": 13
    }
  ],
  "location": "Steps.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.User_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
});