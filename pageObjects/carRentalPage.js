// pageObjects/carRentalPage.js
import { By, until } from "selenium-webdriver";
import { Key } from "selenium-webdriver";
import elements from "../elementIds/carRentalElements.js";

class CarRentalPage {
  constructor(driver) {
    this.driver = driver;
  }

  // Utility function to wait for an element to be present
  async waitForElement(locator, timeout = 10000) {
    try {
      // Wait for the element to be located
      const element = await this.driver.wait(
        until.elementLocated(locator),
        timeout
      );
      // Wait for the element to be visible
      await this.driver.wait(until.elementIsVisible(element), timeout);
      // Wait for the element to be clickable (visible and enabled)
      await this.driver.wait(until.elementIsEnabled(element), timeout);
      return element;
    } catch (error) {
      if (error.name === "TimeoutError") {
        console.error(
          `TimeoutError: Waiting for element ${locator} timed out after ${timeout}ms`
        );
      } else {
        console.error(`Error waiting for element ${locator}: ${error}`);
      }
      throw error; // Re-throw the error after logging it
    }
  }

  async selectCarsProduct() {
    const carRentalMenu = await this.waitForElement(
      By.css(elements.carRentalMenu)
    );
    await carRentalMenu.click();
  }

  async selectWithoutDriverTab() {
    const withoutDriver = await this.waitForElement(
      By.css(elements.withoutDriver)
    );
    await withoutDriver.click();
  }

  async selectPickUpLocation(location) {
    const locationInput = await this.waitForElement(
      By.css(elements.locationInput)
    );

    await locationInput.sendKeys(location);
    await this.driver.sleep(1000);
    const resultData = await this.waitForElement(
      By.css(elements.resultLocation)
    );
    await resultData.click();
  }

  async selectPickUpDateAndTime(date, time) {
    const pickUpDate = await this.waitForElement(
      By.css(elements.datePickerPickup)
    );
    await pickUpDate.click();

    const dateElement = await this.waitForElement(
      By.css(`[data-testid="date-cell-${date}"]`)
    );
    await dateElement.click();

    const pickUpTime = await this.waitForElement(
      By.css(elements.timePickerPickup)
    );

    await pickUpTime.click();
    await this.driver.sleep(1000);
    const [hours, minutes] = time.split(":").map((num) => parseInt(num, 10));

    // Find the hour element by navigating from the "Hour" label
    const hourElement = await this.waitForElement(
      By.xpath(
        `//div[contains(text(), 'Hour')]/following-sibling::div//div[@dir='auto' and contains(text(), '${hours}')][1]`
      )
    );
    await hourElement.click();
    // Find the minute element by navigating from the "Minute" label
    const minuteElement = await this.waitForElement(
      By.xpath(
        `//div[contains(text(), 'Minute')]/following-sibling::div//div[@dir='auto' and contains(text(), '${minutes}')][1]`
      )
    );
    await minuteElement.click();

    const doneButton = await this.waitForElement(
      By.xpath(elements.timePickerDoneButton)
    );
    await doneButton.click();
  }

  async selectDropOffDateAndTime(date, time) {
    const dropOffDate = await this.waitForElement(
      By.css(elements.datePickerDrop)
    );
    await dropOffDate.click();
    const parentElement = await this.waitForElement(
      By.xpath(elements.containerDatePicker)
    );
    const dateElement = await parentElement.findElement(
      By.css(`[data-testid="date-cell-${date}"]`)
    );
    await dateElement.click();

    const dropOffTime = await this.waitForElement(
      By.css(elements.timePickerDrop)
    );
    await dropOffTime.click();
    await this.driver.sleep(1000);

    const [hours, minutes] = time.split(":").map((num) => parseInt(num, 10));
    // Find the hour element by navigating from the "Hour" label
    const hourElement = await this.waitForElement(
      By.xpath(
        `//div[contains(text(), 'Hour')]/following-sibling::div//div[@dir='auto' and contains(text(), '${hours}')][1]`
      )
    );
    await hourElement.click();
    // Find the minute element by navigating from the "Minute" label
    const minuteElement = await this.waitForElement(
      By.xpath(
        `//div[contains(text(), 'Minute')]/following-sibling::div//div[@dir='auto' and contains(text(), '${minutes}')][1]`
      )
    );
    await minuteElement.click();

    const doneButton = await this.waitForElement(
      By.xpath(elements.timePickerDoneButton)
    );
    await doneButton.click();
  }

  async clickSearchCar() {
    const searchButton = await this.waitForElement(
      By.css(elements.searchCarButton)
    );
    await searchButton.click();
  }

  async selectCar() {
    let continueButton = await this.waitForElement(
      By.xpath(elements.selectCarFirstOption)
    );
    // Click the "Continue" button
    await continueButton.click();
  }

  async selectCarProvider() {
    let continueButton = await this.waitForElement(
      By.xpath(elements.selectCarFirstOption)
    );
    // Click the "Continue" button
    await continueButton.click();
  }

  async selectPickUpLocationInRentalOffice() {
    const rentalPickupLocationContainer = await this.waitForElement(
      By.id(elements.rentalPickupContainer)
    );

    const rentalOfficeButton = await rentalPickupLocationContainer.findElement(
      By.xpath(elements.rentalPickupOfficeButton)
    );

    await this.driver.executeScript(
      "arguments[0].scrollIntoView(true);",
      rentalOfficeButton
    );

    await rentalOfficeButton.click();
  }

  async selectLocationPickup() {
    const rentalOfficeDropDown = await this.waitForElement(
      By.xpath(elements.rentalOfficeDropdown)
    );

    await rentalOfficeDropDown.click();
    const officeAddressList = await this.waitForElement(
      By.xpath(elements.officeAddressData)
    );

    await officeAddressList.click();

    // await this.driver.sleep(5000);
  }

  async selectDropOffLocationInOtherLocation() {
    const rentalDropOffLocationContainer = await this.waitForElement(
      By.id(elements.rentalDropOffContainer)
    );

    const otherLocationsRadioButton = await rentalDropOffLocationContainer.findElement(
        By.xpath(elements.otherLocationsRadio)
      );

    await this.driver.executeScript(
      "arguments[0].scrollIntoView(true);",
      otherLocationsRadioButton
    );

    await otherLocationsRadioButton.click();
  }

  async inputPickUpDropOffNotes(notes) {
    const notesTextarea = await this.waitForElement(
      By.css(elements.textAreaNotePickup)
    );
    await notesTextarea.sendKeys(notes);
  }

  async clickBookNow() {
    const bookNowButton = await this.waitForElement(
      By.xpath(elements.bookNowButton)
    );
    await bookNowButton.click();

    await this.driver.sleep(10000);
  }

  async fillContactDetails(contactDetails) {
    const fullNameForm = await this.waitForElement(
      By.xpath(elements.fullNameFormContact)
    );
    await fullNameForm.sendKeys(contactDetails.name);

    const numberForm = await this.waitForElement(
      By.xpath(elements.phoneFormContact)
    );
    await numberForm.sendKeys(contactDetails.no);

    const emailForm = await this.waitForElement(
      By.xpath(elements.emailFormContact)
    );
    await emailForm.sendKeys(contactDetails.email);
  }

  async fillDriverDetails(driverDetails) {
    const parentElement = await this.waitForElement(By.id(elements.driverFormContainer));

    const dropdown = await parentElement.findElement(
      By.xpath(elements.dropdownTitle)
    );

    await this.driver.executeScript(
      "arguments[0].scrollIntoView(true);",
      dropdown
    );

    await dropdown.click();

    const optionMr = await this.waitForElement(
      By.xpath(`//option[@value='${driverDetails.driverTitle}']`)
    );
    await optionMr.click();
    await dropdown.sendKeys(Key.ESCAPE);

    const fullNameForm = await parentElement.findElement(
      By.xpath(elements.fullNameFormDriver)
    );
    await fullNameForm.sendKeys(driverDetails.driverName);

    const numberForm = await parentElement.findElement(
      By.xpath(elements.phoneFormDriver)
    );
    await numberForm.sendKeys(driverDetails.driverNo);
  }

  async clickContinueAfterDetails() {
    const continueButton = await this.waitForElement(
      By.xpath(elements.continueButtonRentalDetail)
    );

    await continueButton.click();
  }

  async addSpecialRequest(notes) {
    const notesTextarea = await this.waitForElement(
      By.css(elements.specialRequestTextArea)
    );
    await this.driver.executeScript(
      "arguments[0].scrollIntoView(true);",
      notesTextarea
    );

    await notesTextarea.sendKeys(notes);
  }

  async checkRentalRequirements() {
    const buttonRequirements = await this.waitForElement(
      By.css(elements.checkRequirementButton)
    );
    await buttonRequirements.click();

    await this.driver.sleep(2000);

    const checkAll = await this.waitForElement(
      By.xpath(elements.checkAll)
    );
    await checkAll.click();

    const saveButton = await this.waitForElement(
      By.xpath(elements.saveButton)
    );
    await saveButton.click();
  }

  async clickContinueAfterRequirements() {
    const continuePaymentButton = await this.waitForElement(
      By.xpath(elements.continuePayment)
    );

    await this.driver.executeScript(
      "arguments[0].scrollIntoView(true);",
      continuePaymentButton
    );

    await continuePaymentButton.click();

    await this.driver.sleep(3000);

    const continueButton = await this.waitForElement(
      By.css(elements.continueConfirmation)
    );
    await continueButton.click();
  }

  async selectPaymentMethodAndProceed() {
    const transferOption = await this.waitForElement(
      By.css(elements.transferMenu)
    );
    await transferOption.click();

    const proceedTransfer = await this.waitForElement(
      By.css(elements.payWithTransferButton)
    );
    await proceedTransfer.click();

    await this.waitForElement(
      By.css(elements.paymentInstructionLabel)
    );

    await this.waitForElement(
      By.css(elements.transferAmountLabel)
    );
  }
}

export default CarRentalPage;
