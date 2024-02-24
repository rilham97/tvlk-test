// pageObjects/carRentalPage.js
import { By, until } from "selenium-webdriver";
import elements from "../elementIds/carRentalElements.js";

class CarRentalPage {
  constructor(driver) {
    this.driver = driver;
  }

  // Utility function to wait for an element to be present
  async waitForElement(locator, timeout = 10000) {
    await this.driver.wait(until.elementLocated(locator), timeout);
    return this.driver.findElement(locator);
  }

  async selectCarsProduct() {
    const carRentalMenu = await this.waitForElement(
      By.css('[data-id="IcProductDuotoneCarRentalFill"]')
    );
    await carRentalMenu.click();
  }

  async selectWithoutDriverTab() {
    const carRentalMenu = await this.waitForElement(
      By.css('[data-id="IcTransportPickUpDriver"]')
    );
    await carRentalMenu.click();
  }

  async selectPickUpLocation(location) {
    const locationInput = await this.waitForElement(
      By.css('[data-testid="rental-search-form-location-input"]')
    );
    await locationInput.sendKeys(location);
    const resultData = await this.waitForElement(
      By.css('[data-testid="rental-search-form-location-item"]')
    );
    await resultData.click();
  }

  async selectPickUpDateAndTime(date, time) {
    const pickUpDate = await this.waitForElement(
      By.css('[data-testid="rental-search-form-date-input-start"]')
    );
    await pickUpDate.click();

    const dateElement = await this.waitForElement(
      By.css(`[data-testid="date-cell-${date}"]`)
    );
    await dateElement.click();

    const pickUpTime = await this.waitForElement(
        By.css('[data-testid="rental-search-form-time-input-start"]')
      );
      await pickUpTime.click();

    const [hours, minutes] = time.split(":").map((num) => parseInt(num, 10));

    const hourElement = await this.waitForElement(
      By.css(`div[data-testid="hour-${hours}"]`)
    );
    await hourElement.click();

    const minuteElement = await this.waitForElement(
      By.css(`div[data-testid="minute-${minutes}"]`)
    );
    await minuteElement.click();
  }

  async selectDropOffDateAndTime(date, time) {

    const dropOffDate = await this.waitForElement(
      By.css('[data-testid="rental-search-form-date-input-end"]')
    );
    await dropOffDate.click();

    const dateElement = await this.waitForElement(
      By.css(`[data-testid="date-cell-${date}"] > div`)
    );
    await dateElement.click();

    const dropOffTime = await this.waitForElement(
        By.css('[data-testid="rental-search-form-time-input-end"]')
      );
      await dropOffTime.click();

    const [hours, minutes] = time.split(":").map((num) => parseInt(num, 10));

    const hourElement = await this.waitForElement(
      By.css(`div[data-testid="hour-${hours}"]`)
    );
    await hourElement.click();

    const minuteElement = await this.waitForElement(
      By.css(`div[data-testid="minute-${minutes}"]`)
    );
    await minuteElement.click();
  }

  async clickSearchCar() {
    const searchButton = await this.waitForElement(
      By.css('[data-testid="rental-search-form-cta"]')
    );
    await searchButton.click();
  }

  async selectCar() {
    const potentialButtons = await this.driver.findElements(By.xpath('//div[@role="button"]'));
  
    for (const button of potentialButtons) {
      const text = await button.getText(); 
      if (text.trim() === "Continue") {
        await button.click(); 
        break; // Exit the loop after clicking the first "Continue" button
      }
    }
  }

  async selectCarProvider() {
    const potentialButtons = await this.driver.findElements(By.xpath('//div[@role="button"]'));
  
    for (const button of potentialButtons) {
      const text = await button.getText(); 
      if (text.trim() === "Continue") {
        await button.click(); 
        break; // Exit the loop after clicking the first "Continue" button
      }
    }
  }

  async selectPickUpLocationInRentalOffice() {
    const rentalPickupLocation = await this.waitForElement(
      By.id('RENTAL_PICKUP_LOCATION')
    );
  
    const rentalOfficeButton = await rentalPickupLocation.findElement(
      By.xpath(".//div[contains(text(), 'Rental Office')]")
    );
  
    await rentalOfficeButton.click();
  }
}

export default CarRentalPage;
