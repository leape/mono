import { expect, test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { COLORS, TONALITIES } from './fixtures/variants.ts';
// @ts-expect-error - required for playwright
import { setScrollViewport } from './fixtures/viewport.ts';

export const getDefaultScreenshotTest = (component: string) => {
	for (const tonality of TONALITIES) {
		for (const color of COLORS) {
			test(`should match screenshot`, async ({ page }, testInfo) => {
				const isWebkit =
					testInfo.project.name === 'webkit' ||
					testInfo.project.name === 'mobile_safari';
				const showcase = process.env.showcase;
				const isAngular = showcase.startsWith('angular');

				const config: any = {
					fullPage: true
				};

				if (isAngular) {
					config.maxDiffPixels = 1000;
				} else if (isWebkit) {
					config.maxDiffPixels = 6;
				} else {
					config.maxDiffPixels = 1;
				}

				await page.goto(
					`./#/${component}?tonality=${tonality}&color=${color}`,
					{ waitUntil: 'networkidle' }
				);
				await setScrollViewport(page)();
				await expect(page).toHaveScreenshot(
					[tonality, `${color}.png`],
					config
				);
			});
		}
	}
};
