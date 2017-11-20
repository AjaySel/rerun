$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Automation.feature");
formatter.feature({
  "line": 1,
  "name": "Signup for an Salesforce Developer Account",
  "description": "",
  "id": "signup-for-an-salesforce-developer-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Register with a temporary email address",
  "description": "",
  "id": "signup-for-an-salesforce-developer-account;register-with-a-temporary-email-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I register for a Salesforce Developer account",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I confirm my account email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I complete the registration process by setting a password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be on the Salesforce Developer instance homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_register_for_a_Salesforce_Developer_account()"
});
formatter.result({
  "duration": 101579199152,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_confirm_my_account_email()"
});
formatter.result({
  "duration": 8377010542,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //a[contains(text(),\u0027Verify Account\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027RASH\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\ajay\\AppData\\Local\\Temp\\rust_mozprofile.1LO72LJ5jJMJ, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d57.0, platformVersion\u003d10.0, moz:processID\u003d4160.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt, moz:webdriverClick\u003dfalse}]\nSession ID: 1c020fcc-b541-4ad5-b301-1e75e8649297\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Verify Account\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat org.testingworld.automation.page.EmailConfirmation.mailVerification(EmailConfirmation.java:57)\r\n\tat org.testingworld.automation.testcase.Steps.i_confirm_my_account_email(Steps.java:46)\r\n\tat ✽.When I confirm my account email(Automation.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.i_complete_the_registration_process_by_setting_a_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_should_be_on_the_Salesforce_Developer_instance_homepage()"
});
formatter.result({
  "status": "skipped"
});
});