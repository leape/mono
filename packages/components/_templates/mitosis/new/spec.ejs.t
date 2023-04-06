---
to: src/components/<%= name %>/<%= name %>.spec.tsx
---
import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DB<%= h.changeCase.pascal(name) %> } from "./index";

const comp = <DB<%= h.changeCase.pascal(name) %>>Test</DB<%= h.changeCase.pascal(name) %>>;

const testComponent = () =>{
	test('DB<%= h.changeCase.pascal(name) %> should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('DB<%= h.changeCase.pascal(name) %> should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
}

test.describe('DB<%= h.changeCase.pascal(name) %> component on desktop', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });
	testComponent();
});

test.describe('DB<%= h.changeCase.pascal(name) %> component on mobile', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });
	testComponent();
});

test.describe('DB<%= h.changeCase.pascal(name) %> component A11y', () => {
	test('DB<%= h.changeCase.pascal(name) %> should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-<%= name %>')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

});