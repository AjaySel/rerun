/**
 * 
 */
package org.testingworld.automation.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testingworld.automation.base.CreateDriverinstance;

/**
 * @author ajay
 *
 */
public class EmailConfirmation extends CreateDriverinstance{

	/**
	 * @param args
	 */
	   public EmailConfirmation(final WebDriver driver) {
	        super(driver);
	        PageFactory.initElements(driver, this);
	    }


	   @FindBy(xpath="//input[@id='newpassword']")
			WebElement newPassword;
	   
	   @FindBy(xpath="//input[@id='confirmpassword']")
		WebElement confirmPassword;
	   @FindBy(xpath="//select[@id='question']")
			WebElement question;
	  
	   @FindBy(xpath="//input[@id='answer']")
		WebElement answer;
 
	   
	   
	   @FindBy(xpath="//a[contains(text(),'Welcome to Salesforce: Verify your account')]")
			WebElement mail;
		      
	   @FindBy(xpath="//a[contains(text(),'Verify Account')]")
		WebElement verifyAccount;
	
	   @FindBy(xpath="//*[contains(text(),'Scramble Address')]")
			WebElement ScrambleAddress;
	   @FindBy(xpath="//span[@id='email-widget']")
		WebElement emailwidget;
	 
		 
	   
	   public void mailVerification()
	   {
		   mail.click();
		   verifyAccount.click();
	   }
	   
	   public void resetPassword()
	   {
		   newPassword.sendKeys("test1234");
		   confirmPassword.sendKeys("test1234");
		   Select sel = new Select(question);
		   sel.selectByIndex(1);
		   answer.sendKeys("test");
	   }
	
	   public String fetchEmail()
	   {
		   String email = null;
		   
		   ScrambleAddress.click();
		   email = emailwidget.getText();
		   System.out.println(email);
		   return email;
		   
	   }


}
