package com.nopcommerce.demo.cucumber.stepDefs;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ComputerStepdefs {
    @When("^I mouse hover on computer top tab$")
    public void iMouseHoverOnComputerTopTab() {
        new HomePage().mouseHoverOnComputerTab();
    }

    @And("^I mouse hover and click on \"([^\"]*)\"$")
    public void iMouseHoverAndClickOn(String computerSubMenu) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().selectFromComputerSubMenu(computerSubMenu);
    }

    @And("^I select sort by position \"([^\"]*)\"$")
    public void iSelectSortByPosition(String sortBy) throws InterruptedException {
        Thread.sleep(1000);
        new DesktopsPage().setSortByFilter(sortBy);
    }

    @Then("^I should be able to verify the product arranged in descending order$")
    public void iShouldBeAbleToVerifyTheProductArrangedInDescendingOrder() throws InterruptedException {
        Thread.sleep(1000);
        List<String> actualProductNameList = new DesktopsPage().verifyProductSortedByZToAFilter();
        List<String> sortedProductNameList = new ArrayList<>(actualProductNameList);
        Collections.sort(sortedProductNameList,Collections.<String>reverseOrder());
        Assert.assertEquals(actualProductNameList,sortedProductNameList);
    }

    @And("^I add build your own computer to cart$")
    public void iAddBuildYourOwnComputerToCart() throws InterruptedException {
        Thread.sleep(1000);
        new DesktopsPage().addProductToCart();
    }

    @Then("^I should be able to verify \"([^\"]*)\" page title text$")
    public void iShouldBeAbleToVerifyPageTitleText(String expectedPageTitle) throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals(expectedPageTitle,new BuildYourOwnComputerPage().actualBuildYourOwnComputerText());
    }

    @When("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processorName) throws InterruptedException {
        Thread.sleep(1000);
        new BuildYourOwnComputerPage().selectIntelPentiumProcessor(processorName);
    }

    @And("^I select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ram) throws InterruptedException {
        Thread.sleep(1000);
        new BuildYourOwnComputerPage().select8BGRAM(ram);
    }


    @And("^I click radio button to select HDD$")
    public void iClickRadioButtonToSelectHDD() throws InterruptedException {
        Thread.sleep(1000);
        new BuildYourOwnComputerPage().clickOn400GBRadioButton();
    }

    @And("^I click radio button to select OS$")
    public void iClickRadioButtonToSelectOS() throws InterruptedException {
        Thread.sleep(1000);
        new BuildYourOwnComputerPage().clickOnVistaPremiumRadioButton();
    }

    @And("^I click check box to select Software$")
    public void iClickCheckBoxToSelectSoftware() {
    }

    @Then("^I should be able to verify total price of \"([^\"]*)\"$")
    public void iShouldBeAbleToVerifyTotalPriceOf(String expectedTotalPrice) throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals(expectedTotalPrice,new BuildYourOwnComputerPage().actualTotalPrice());
    }

    @And("^I should be able to add the computer product to cart$")
    public void iShouldBeAbleToAddTheComputerProductToCart() throws InterruptedException {
        Thread.sleep(1000);
        new BuildYourOwnComputerPage().clickToAddBuildProductToCart();
    }

    @And("^I should be able to see green bar message \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeGreenBarMessage(String expectedGreenBarMessage) throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals(expectedGreenBarMessage,new BuildYourOwnComputerPage().actualTopGreenBarText());
    }
}
