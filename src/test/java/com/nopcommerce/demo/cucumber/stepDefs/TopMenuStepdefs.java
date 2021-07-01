package com.nopcommerce.demo.cucumber.stepDefs;

import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.omg.PortableInterceptor.HOLDING;

public class TopMenuStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on \"([^\"]*)\" from top tabs$")
    public void iClickOnFromTopTabs(String topTab) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().selectMenu(topTab);
    }

    @Then("^I should be able to navigate to the \"([^\"]*)\" and verify the page title$")
    public void iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String expectedPageTitle) throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals(expectedPageTitle,new HomePage().getActualText());
    }


}
