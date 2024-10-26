// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    viewport: null, // Set viewport to null for full screen
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }, // Fullscreen mode
    },
  ],
});
