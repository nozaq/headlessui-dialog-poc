import test, { expect } from "@playwright/test";

test("show dialog", async ({ page }) => {
    await page.goto("/");

    const dialog = page.getByRole("dialog");

    await page.getByRole("button", { name: "Open" }).click();
    await expect(dialog).toBeVisible();

    await page.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
});