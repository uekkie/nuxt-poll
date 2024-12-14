import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:3000');
})

test('has title', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('投票画面');
});

test('poll', async ({page}) => {
  await page.locator('.item button').first().click();
  await expect(page.locator('.poll-point').first()).toHaveText('1')
  await expect(page.locator('.remain-point').first()).toHaveText('9')
})

test('poll out', async ({ page }) => {
  const btn = page.locator('.item button').first()
  let repeat = 10
  while (repeat--) {
    await btn.click();
  }
  await expect(page.locator('.poll-point').first()).toHaveText('10')
  await expect(page.locator('.remain-point').first()).toHaveText('0')
  await expect(btn).toBeDisabled()
})
