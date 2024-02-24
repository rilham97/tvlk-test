import { Builder, By } from 'selenium-webdriver';
import CarRentalPage from '../pageObjects/carRentalPage.js';
import config from '../config.json' assert { type: 'json' };
import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';

describe('Car Rental Scenario', function() {
    this.timeout(config.timeout);
    let driver;
    let carRentalPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        carRentalPage = new CarRentalPage(driver);
        await driver.get(config.baseUrl);
    });

    it('Select Cars Product', async function() {
        await carRentalPage.selectCarsProduct();
    });

    it('Select tab Without Driver', async function() {
        await carRentalPage.selectWithoutDriverTab();
    });

    it('Select Pick-up Location', async function() {
        await carRentalPage.selectPickUpLocation('Gambir Station');
    });

    it('Select Pick-up Date & Time', async function() {
        await carRentalPage.selectPickUpDateAndTime('27-2-2024', '09:00');
    });

    it('Select Drop-off Date & Time', async function() {
        await carRentalPage.selectDropOffDateAndTime('29-2-2024', '11:00');
    });

    it('Click button Search Car', async function() {
        await carRentalPage.clickSearchCar();
    });

    it('Select Car', async function() {
        await carRentalPage.selectCar();
    });

    it('Select Car Provider', async function() {
        await carRentalPage.selectCarProvider();
    });

    // it('Click button Continue in Product Detail', async function() {
    //     await carRentalPage.clickContinueInProductDetail();
    // });

    it('Select Pick-up Location in “Rental Office”', async function() {
        await carRentalPage.selectPickUpLocationInRentalOffice();
    });

    it('Select Drop-off Location in “Other Location”', async function() {
        await carRentalPage.selectDropOffLocationInOtherLocation();
    });

    it('Input Pick-up/Drop-off notes (optional)', async function() {
        await carRentalPage.inputPickUpDropOffNotes();
    });

    it('Click button Book Now', async function() {
        await carRentalPage.clickBookNow();
    });

    it('Fill Contact Details', async function() {
        await carRentalPage.fillContactDetails();
    });

    it('Fill Driver Details', async function() {
        await carRentalPage.fillDriverDetails();
    });

    it('Click Continue after filling details', async function() {
        await carRentalPage.clickContinueAfterDetails();
    });

    it('Add a special request (optional)', async function() {
        await carRentalPage.addSpecialRequest();
    });

    it('Check all rental requirements', async function() {
        await carRentalPage.checkRentalRequirements();
    });

    it('Click Continue after checking requirements', async function() {
        await carRentalPage.clickContinueAfterRequirements();
    });

    it('Select payment method and proceed to payment', async function() {
        await carRentalPage.selectPaymentMethodAndProceed();
    });

    after(async function() {
        await driver.quit();
    });
});