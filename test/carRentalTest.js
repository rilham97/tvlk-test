import CarRentalPage from '../pageObjects/carRentalPage.js';
import { describe, it, before, after } from 'mocha';

import { setupDriver, teardownDriver, baseAfterEach } from './BaseTest.js';


describe('Car Rental Scenario', function() {
    let driver;
    let carRentalPage;

    before(async function() {
        driver = await setupDriver(this);
        carRentalPage = new CarRentalPage(driver);
    });

    afterEach(async function() {
        await baseAfterEach(driver, this);
    });

    after(async function() {
        await teardownDriver(driver);
    });

    it('1. Select Cars Product', async function() {
        await carRentalPage.selectCarsProduct();
    });

    it('2. Select tab Without Driver', async function() {
        await carRentalPage.selectWithoutDriverTab();
    });

    it('3. Select Pick-up Location', async function() {
        await carRentalPage.selectPickUpLocation('Gambir Station');
    });

    it('4. Select Pick-up Date & Time', async function() {
        await carRentalPage.selectPickUpDateAndTime('28-2-2024', '10:30');
    });

    it('5. Select Drop-off Date & Time', async function() {
        await carRentalPage.selectDropOffDateAndTime('1-3-2024', '11:00');
    });

    it('6. Click button Search Car', async function() {
        await carRentalPage.clickSearchCar();
    });

    it('7. Select Car', async function() {
        await carRentalPage.selectCar();
    });

    it('8. Select Car Provider', async function() {
        await carRentalPage.selectCarProvider();
    });

    it('9. Select Pick-up Location in “Rental Office”', async function() {
        await carRentalPage.selectPickUpLocationInRentalOffice();
    });

    it('10. Select Location Pickup', async function() {
        await carRentalPage.selectLocationPickup();
    });
    

    it('11. Select Drop-off Location in “Other Location”', async function() {
        await carRentalPage.selectDropOffLocationInOtherLocation();
    });

    it('12. Input Pick-up or Drop-off notes (optional)', async function() {
        await carRentalPage.inputPickUpDropOffNotes('Good Morning Traveloka');
    });

    it('13. Click button Book Now', async function() {
        await carRentalPage.clickBookNow();
    });

    it('14. Fill Contact Details', async function() {
        await carRentalPage.fillContactDetails({
            name: 'Ilham Ramadhan',
            no: '88888888',
            email: 'test@example.com'
        });
    });

    it('15. Fill Driver Details', async function() {
        await carRentalPage.fillDriverDetails({
            driverTitle: 'MR',
            driverName: 'Ilham Ramadhan',
            driverNo: '999999999',
        });
    });

    it('16. Click Continue after filling details', async function() {
        await carRentalPage.clickContinueAfterDetails();
    });

    it('17. Add a special request (optional)', async function() {
        await carRentalPage.addSpecialRequest('Pengen mobilnya yang bagus ya');
    });

    it('18. Check all rental requirements', async function() {
        await carRentalPage.checkRentalRequirements();
    });

    it('19. Click Continue after checking requirements', async function() {
        await carRentalPage.clickContinueAfterRequirements();
    });

    it('20. Select payment method and proceed to payment', async function() {
        await carRentalPage.selectPaymentMethodAndProceed();
    });
});

