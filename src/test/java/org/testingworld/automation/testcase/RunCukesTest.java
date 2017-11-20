package org.testingworld.automation.testcase;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/org/testingworld/auatomation/assertion"},
plugin = { "json:target/cucumber-report-composite.json", "pretty",
        "html:target/cucumber/" }, 
		dryRun = false,
		monochrome = true)

public class RunCukesTest {

}
