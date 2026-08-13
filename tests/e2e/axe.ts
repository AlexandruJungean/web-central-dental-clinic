import AxeBuilder from "@axe-core/playwright";
import { expect, type Page } from "@playwright/test";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

async function waitForAxeReady(page: Page): Promise<void> {
  await page.evaluate(async () => {
    await document.fonts.ready;

    const finiteAnimations = document.getAnimations().filter((animation) => {
      const timing = animation.effect?.getComputedTiming();
      return timing?.duration !== Infinity && timing?.iterations !== Infinity;
    });

    await Promise.all(
      finiteAnimations.map((animation) => animation.finished.catch(() => undefined)),
    );
  });
}

export async function expectNoAxeViolations(page: Page): Promise<void> {
  await waitForAxeReady(page);
  const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
  expect(
    results.violations,
    results.violations
      .map(
        (violation) =>
          `${violation.id} (${violation.impact}): ${violation.help}\n${violation.nodes
            .map((node) => `  - ${node.target.join(" ")}`)
            .join("\n")}`,
      )
      .join("\n\n"),
  ).toEqual([]);
}
