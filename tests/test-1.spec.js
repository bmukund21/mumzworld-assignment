import { test } from '@playwright/test';
import SearchPage from '../pages/SearchPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import RegisterPage from '../pages/RegisterPage';

test.describe('Mumzworld Webstore Flow', () => {
    test('Search, Add to Bag, Checkout, Register New User', async ({ page }) => {
        const searchPage = new SearchPage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);
        const registerPage = new RegisterPage(page);

        // Open Mumzworld webstore
        await page.goto('https://www.mumzworld.com/');

        //Search for a product ("shampoo")
        await searchPage.searchForItem('shampoo');

        //Add the product to the bag
        await productPage.addToBag();

        //Go to the shopping bag and increase the quantity to 5
        await cartPage.updateItemQuantity(5);

        //Click Proceed to Checkout
        await cartPage.proceedToCheckout();

        //Register a new user
        await registerPage.registerUser(
            'Bal',                 // First Name
            'Mukund',                  // Last Name
            'mukund.b@example.com', // Email
            'Aa@1234567'            // Password
        );
    });
});