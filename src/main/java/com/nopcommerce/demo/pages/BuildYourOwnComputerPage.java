package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BuildYourOwnComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')]")
    WebElement buildYourOwnComputerText;

    @FindBy(xpath = "//dd[@id='product_attribute_input_1']/select[@id='product_attribute_1']")
    WebElement processor;

    @FindBy(xpath = "//dd[@id='product_attribute_input_2']/select[@id='product_attribute_2']")
    WebElement rAM;

    @FindBy(xpath = "//ul[@class='option-list']/li[@data-attr-value='7']/input[@id='product_attribute_3_7']")
    WebElement radio400GB;

    @FindBy(xpath = "//li[@data-attr-value='9']/input[@id='product_attribute_4_9']")
    WebElement radioVistaPremium;

    @FindBy(xpath = "//input[@id='product_attribute_5_12']")
    WebElement totalCommander;

    @FindBy(xpath = "//div[@class='product-price']/span[@id='price-value-1']")
    WebElement totalPrice;

    @FindBy(xpath = "//div[@class='add-to-cart-panel']/button[@id='add-to-cart-button-1']")
    WebElement addToCart;

    @FindBy(xpath = "//body/div[@id='bar-notification']/div[1]/p[1]")
    WebElement topGreenBarText;


    public String actualBuildYourOwnComputerText() {
        log.info("Getting build computer text" + buildYourOwnComputerText.toString());
        return buildYourOwnComputerText.getText();
    }

    public void selectIntelPentiumProcessor(String visibleText) {
        selectByVisibleTextFromDropDown(processor,visibleText);
        log.info("Select processor option " + processor.toString());
    }

    public void select8BGRAM(String visibleText) {
        selectByVisibleTextFromDropDown(rAM,visibleText);
        log.info("Select RAM option " + rAM.toString());
    }

    public void clickOn400GBRadioButton() {
        clickOnElement(radio400GB);
        log.info("Click on radio button " + radio400GB.toString());
    }

    public void clickOnVistaPremiumRadioButton() {
        clickOnElement(radioVistaPremium);
        log.info("Click on radio button " + radioVistaPremium.toString());
    }

    public void checkBoxTotalCommander() {
        clickOnElement(totalCommander);
        log.info("Click on check box " + totalCommander.toString());
    }

    public String actualTotalPrice() {
        log.info("Getting total price from element " + totalPrice.toString());
        return totalPrice.getText();
    }

    public void clickToAddBuildProductToCart() {
        clickOnElement(addToCart);
        log.info("Click on add to cart button " + addToCart.toString());
    }

    public String actualTopGreenBarText() {
        log.info("Getting green bar message " + topGreenBarText.toString());
        return topGreenBarText.getText();
    }

}
