class SearchPage {
  constructor(page) {
      this.page = page;
      this.searchButton = page.locator('button.algoliaSearchBox-submit-3Vv');
      this.searchInput = page.locator('input.algoliaSearchBox-input-1IL'); // Regular mode locator
  }

  async searchForItem(item) {
      await this.searchInput.click();
      await this.searchInput.fill(item);
      await this.searchButton.click();
      // Click on the first result after the results load
      await this.page.getByRole('link', { name: /Purelements - 2-in-1 Baby/i }).first().click();
  }
}

module.exports = SearchPage;
