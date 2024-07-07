import test, { expect } from "@playwright/test";

// Test case 1
test("show dialog w/ transition", async ({ page }) => {
    await page.goto("/");

    const dialog = page.getByRole("dialog");

    await page.getByRole("button", { name: "Open w/ Transition" }).click();
    await expect(dialog).toBeVisible();

    await page.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
});

// Test case 2
test("show dialog w/ transition, wait for opacity to be 1", async ({ page }) => {
    await page.goto("/");

    const dialog = page.getByRole("dialog");

    await page.getByRole("button", { name: "Open w/ Transition" }).click();
    await expect(dialog).toHaveCSS("opacity", "1")

    await page.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
});

// Test case 3
test("show dialog w/o transition", async ({ page }) => {
    await page.goto("/");

    const dialog = page.getByRole("dialog");

    await page.getByRole("button", { name: "Open w/o transition" }).click();
    await expect(dialog).toBeVisible();

    await page.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
});