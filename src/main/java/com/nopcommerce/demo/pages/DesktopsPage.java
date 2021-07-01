package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

import java.util.ArrayList;
import java.util.List;

public class DesktopsPage extends Utility {

    private static final Logger log = LogManager.getLogger(DesktopsPage.class.getName());

    @FindBy(xpath = "//select[@id='products-orderby']")
    WebElement sortByFilter;

    @FindBy(xpath = "(//button[@class='button-2 product-box-add-to-cart-button'])[1]")
    WebElement buildYourOwnComputer;

    @FindBys({@FindBy(xpath = "//div[@class='product-grid']//h2")})
    List<WebElement> productList;

    public void setSortByFilter(String visibleText) {

        selectByVisibleTextFromDropDown(sortByFilter,visibleText);
    }

    public List<String> verifyProductSortedByZToAFilter() throws InterruptedException {


        List<String> productNameList = new ArrayList<>();

        for (WebElement name : productList) {
            Thread.sleep(1000);
            productNameList.add(name.getText());
        }
        return productNameList;
    }



    public void addProductToCart() {

        mouseHoverToElementAndClick(buildYourOwnComputer);
        log.info("Click on add to cart button "+buildYourOwnComputer.toString());
    }
}
