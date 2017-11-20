package org.testingworld.automation.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class CreateDriverinstance {
	
	WebDriver Driver;
	public CreateDriverinstance(WebDriver driver) {
		// TODO Auto-generated constructor stub
	}

	public WebDriver getDriverInstancein()
	{
		
		System.setProperty("webdriver.gecko.driver","E:/munna/Driver/geckodriver.exe");
		System.setProperty("webdriver.firefox.bin",
                "C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe");
		 Driver = new FirefoxDriver();
		//Driver.get(URL);
		return Driver;
	}
	
	public WebDriver launchURL(String URL)
	{
		Driver.get(URL);
		return Driver;
	}
	

}
