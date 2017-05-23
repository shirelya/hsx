package com.hsx.CTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * Hello world!
 *
 */
@RunWith(Cucumber.class)  
@CucumberOptions(  
        features = {"src/main/resources/feature/"},  
        plugin= {"pretty", "html:target/cucumber", "json:target/cucumber.json"},  
        glue = {"com.hsx.CTest"},
        tags = {"@run"}
) 
public class Run 
{
}
