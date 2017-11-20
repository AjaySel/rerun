package org.testingworld.automation.testcase;

import java.util.List;

import junit.framework.Assert;

import org.openqa.selenium.WebDriver;
import org.testingworld.auatomation.assertion.Compare;
import org.testingworld.automation.base.CreateDriverinstance;
import org.testingworld.automation.page.EmailConfirmation;
import org.testingworld.automation.page.LoginPage;
import org.testingworld.automation.page.SingupPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	
	
	WebDriver driver;
	LoginPage Login ;
	SingupPage Singup;
	EmailConfirmation MailConfirmation;
	CreateDriverinstance driverInstance = new CreateDriverinstance(driver);

	

@Given("^I register for a Salesforce Developer account$")
public void i_register_for_a_Salesforce_Developer_account() throws Throwable {
    	
	driver = driverInstance.getDriverInstancein();
	MailConfirmation = new EmailConfirmation(driver);
	driverInstance.launchURL("https://www.guerrillamail.com/");
	String email = MailConfirmation.fetchEmail();
	driverInstance.launchURL("https://developer.salesforce.com/signup");
	Singup = new SingupPage(driver);
	Singup.formFillup(email);
   
}

@When("^I confirm my account email$")
public void i_confirm_my_account_email() throws Throwable {
	driverInstance.launchURL("https://www.guerrillamail.com/");
	MailConfirmation.mailVerification();
}

@When("^I complete the registration process by setting a password$")
public void i_complete_the_registration_process_by_setting_a_password() throws Throwable {
    
	MailConfirmation.resetPassword();
   
}

@Then("^I should be on the Salesforce Developer instance homepage$")
public void i_should_be_on_the_Salesforce_Developer_instance_homepage() throws Throwable {
    
   
}




/*@Given("^User is on login Page$")
public void User_is_on_login_Page()  {
    // Express the Regexp above with the code you wish you had
	CreateDriverinstance driverInstance = new CreateDriverinstance(driver);
	driver = driverInstance.getDriverInstancein();
	Login = new LoginPage(driver);
    
}

@When("^user enters username$")
public void user_enters_username() throws Throwable {
	
	Login.enterUsername(driver);
    // Express the Regexp above with the code you wish you had
    
}
public void user_enters_username(DataTable table) throws Throwable {
	List<List< String>>  data= table.raw();
	System.out.println(data.get(0).get(0));
    // Express the Regexp above with the code you wish you had
    
}

// Outline Example
///@When("^user enters <username>$")
@When("^user enters \"([^\"]*)\"$")
public void user_enters_username(String username) throws Throwable {
    // Express the Regexp above with the code you wish you had
	Login.enterUsername(username);
}

@When("^user enters <password>$")
public void user_enters_password(String Password) throws Throwable {
    // Express the Regexp above with the code you wish you had
	Login.enterPassword(Password);
}


@When("^user enters password$")
public void user_enters_password() throws Throwable {
    // Express the Regexp above with the code you wish you had
	Login.enterPassword();
}

@When("^user clicks on sign in button$")
public void user_clicks_on_sign_in_button() throws Throwable {
    // Express the Regexp above with the code you wish you had
    Login.btnLogin();
}

@Then("^User logged in successfully$")
public void User_logged_in_successfully() throws Throwable {
    // Express the Regexp above with the code you wish you had
	Compare validate = new Compare();
	
	Assert.assertTrue(validate.validateURL(driver, "ds"));
	
    
}
@Then("^User got errorpage$")
public void User_got_errorpage() throws Throwable {
    
}*/

}
