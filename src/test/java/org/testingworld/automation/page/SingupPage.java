/**
 * 
 */
package org.testingworld.automation.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testingworld.automation.base.CreateDriverinstance;

/**
 * @author ajay
 *
 */
public class SingupPage extends CreateDriverinstance {

	   public SingupPage(final WebDriver driver) {
	        super(driver);
	        PageFactory.initElements(driver, this);
	    }

	   @FindBy(xpath="//*[@id='first_name']")
		WebElement firstName;
		
	   @FindBy(xpath="//*[@id='last_name']")
		WebElement LastName;
	   
	   @FindBy(xpath="//*[@id='company']")
		WebElement companyName;
	   
	   @FindBy(xpath="//*[@id='email']")
		WebElement emailName;
	   @FindBy(xpath="//*[@id='postal_code']")
		WebElement postalCode;
	   
	   @FindBy(xpath="//*[@id='username']")
		WebElement username;
	   
	   @FindBy(xpath="//*[@id='eula']")
		WebElement eula;
	 
/*	   @FindBy(xpath="//div[@class='rc-anchor-logo-portrait']")
		WebElement recaptchacheckbox;
	   */
	   @FindBy(xpath="//input[@id='submit_btn']")
		WebElement submit;
	   
		public void formFillup( String eMail)
		{
			firstName.sendKeys("Test");
			LastName.sendKeys("Testing");
			postalCode.sendKeys("e14 8gg");
			companyName.sendKeys("sharklaserscom");
			emailName.sendKeys(eMail);
			username.sendKeys(eMail);
		
			eula.click();
			//recaptchacheckbox.click();
		
		
			try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			submit.click();
		}
	   
}
