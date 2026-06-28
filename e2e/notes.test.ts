 import { test, expect } from '@playwright/test'

test('homepage load hoti hai', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Next/)
})

test('page mein heading exist karti hai', async ({ page }) => {
  await page.goto('/')
  
  const heading = page.locator('h1')
  await expect(heading).toBeVisible()
})

test('page ka title empty nahi hai', async ({ page }) => {
  await page.goto('/')
  
  const title = await page.title()
  expect(title.length).toBeGreaterThan(0)
})
