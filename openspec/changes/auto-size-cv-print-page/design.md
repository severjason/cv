# Design

## Context

`PrintStyles` injects a zero-margin page rule with a 1280 px width and a locale-specific height. The shared `Layout` owns the CV wrapper. Print styles change spacing and hide the footer, while print events currently update React state for contact details and the language switcher.

## Goals

Keep sizing local to the shared CV layout, use the same rendered markup for measurement and output, and retain the native browser print flow.

## Decisions

- Give `PrintStyles` access to the shared wrapper through a ref. Measure the wrapper at the 1280 px print width with print spacing and visibility applied. In print, let the wrapper take its natural height so its screen minimum height cannot feed back into the page height.
- Make print-specific visibility deterministic at measurement time. Use shared CSS rules for the print variants of the email, location, and language control wherever possible, while preserving the normal screen interactions. Use the active print media when available and use a temporary measurement state that applies the same layout rules if native print events arrive before print CSS takes effect.
- Update a single page rule synchronously during print preparation using the rounded-up height. Clear temporary measurement styles and restore print preparation state after printing or cancellation. If the wrapper has no valid measurement, leave pagination to the browser. The native Print command makes an app-controlled export step unsuitable for this flow.

## Risks / Trade-offs

- Chrome may resolve page size before a rule updated in `beforeprint` takes effect. Verify the first native print from a fresh page early. If needed, prepare the page rule once the loaded layout settles and refresh it when the rendered content changes.
- Font loading, responsive wrapping, and delayed state commits can change the measured height. Check a narrow browser window, each locale, and repeated native prints. Test on the loaded CV, with its fonts and images available.
