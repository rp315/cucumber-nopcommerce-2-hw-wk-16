package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

import java.util.List;

public class HomePage extends Utility {

    public static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBys({@FindBy(xpath = "//div[@class='header-menu']/ul[1]/li/a")})
    List<WebElement> menuList;
    @FindBy(xpath = "//div[@class='page-title']")
    WebElement titleText;
    @FindBy(xpath = "(//a[@href='/computers'])[1]")
    WebElement computerTab;

    @FindBys(@FindBy(xpath = "(//ul[@class='sublist first-level'])[1]//li"))
    List<WebElement> computerSubMenuList;


    public String selectMenu(String menu) {

        String expectedText = null;
        for (WebElement element : menuList) {
            if (element.getText().equalsIgnoreCase(menu)) {
                expectedText = element.getText();
                clickOnElement(element);
                log.info("Clicking on element "+element.toString());
                break;
            }
        }
        return expectedText;
    }

    public String getActualText() {
        log.info("Getting text from element "+titleText.toString());
        return titleText.getText();
    }

    public void mouseHoverOnComputerTab() {
        mouseHoverToElement(computerTab);
        log.info("Mouse hover on computer tab element " + computerTab.toString());
    }

    public void selectFromComputerSubMenu(String product) throws InterruptedException {

        for (WebElement element : computerSubMenuList) {
            log.info("Getting text from computer sub product element " + element.toString());
            if (element.getText().equalsIgnoreCase(product)) {
                Thread.sleep(1000);
                mouseHoverToElementAndClick(element);
                log.info("Clicking computer sub menu product element " + element.toString());
                break;

            }

        }
    }
}
