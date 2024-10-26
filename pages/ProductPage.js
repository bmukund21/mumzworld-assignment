class ProductPage {
  constructor(page) {
      this.page = page;
      this.addToBagButton = page.locator('button.productFullDetail-addToCart-2cW');
      this.viewBagButton = page.locator('a.feedbackPopup-addToCart-3w_');
  }

  async addToBag() {
      await this.addToBagButton.click();
      await this.page.waitForTimeout(1000); // Adjust as needed
      await this.viewBagButton.click();
      await this.page.waitForTimeout(1000); // Adjust as needed
  }
}

module.exports = ProductPage;
