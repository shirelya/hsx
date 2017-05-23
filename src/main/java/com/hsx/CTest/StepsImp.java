package com.hsx.CTest;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepsImp {
	private static String url="https://my325092.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/client.html";
	private WebDriver driver;
	private static final Logger LOGGER = Logger.getLogger(StepsImp.class.getName());
    
    @Given("^I navigate to the mock application$")
    public void given_I_navigate_to_the_mock_application(){
        //LOGGER.info("Entering: I navigate to the mock application");
        System.setProperty("webdriver.chrome.driver", "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chromedriver.exe");
        /*profile = webdriver.FirefoxProfile()
        profile.default_preferences["webdriver_assume_untrusted_issuer"]= 'false'
        profile.update_preferences()*/
		driver = new ChromeDriver();
		driver.manage().window().maximize();  
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);  
        driver.get(url);
    }
     
    @When("^I try to login with username \"([^\"]*)\" password \"([^\"]*)\"$")
    public void when_I_try_to_login(String username, String password){
    	//LOGGER.info("Logging in with username:"+username+" password:"+password);
    	driver.findElement(By.id("__control0-user")).sendKeys(username);
		driver.findElement(By.id("__control0-pass")).sendKeys(password);
		driver.findElement(By.id("__control0-logonBtn")).click();
		//LOGGER.info("Login submitted");
    }
     
    @Then("^I should see that I logged in \"([^\"]*)\"$")
    public void then_I_login(String outcome){
        LOGGER.info("Entering: I should see that I logged in " + outcome);
        driver.quit();
    }
}
