class CartPage {
  constructor(page) {
    this.page = page;
    this.quantityInput = page.locator('//div[contains(@class, "product-detailsRight-2ix")]//input[@aria-label="Item Quantity" and @name="quantity"]');
    this.checkoutButton = page.locator('span.proceedToCheckoutBtn-content-1kx');
  }

  async updateItemQuantity(quantity) {
    // Log the count of elements found for debugging
    console.log(await this.quantityInput.count());
    
    // Wait for the quantity input to be visible
    await this.quantityInput.waitFor({ state: 'visible' });
    await this.quantityInput.fill(quantity.toString());
    await this.page.waitForTimeout(500); // Adjust as needed
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
    await this.page.waitForTimeout(500); // Adjust as needed
  }
}

module.exports = CartPage;
