class RegisterPage {
  constructor(page) {
      this.page = page;
      this.signUpButton = page.locator('text=Sign up');
      this.firstNameInput = page.getByLabel('First Name');
      this.lastNameInput = page.getByLabel('Last Name');
      this.emailInput = page.getByPlaceholder('john.doe@address.com');
      this.passwordInput = page.getByLabel('Password');
      this.registerButton = page.getByRole('button', { name: 'Register' });
  }

  async registerUser(firstName, lastName, email, password) {
      await this.signUpButton.click();
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.registerButton.click();
  }
}

module.exports = RegisterPage;
