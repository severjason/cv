# Proposal

## Why

The CV uses a hardcoded print height for each locale. Content edits can leave excess whitespace below the CV or push content onto another page until the heights are adjusted manually.

## What Changes

- Size the page automatically when the user invokes the browser's native Print command, including Ctrl+P and Cmd+P.
- Keep the 1280 px print width and fit the page height to the visible print layout of the current CV.
- Verify in Chrome's Save as PDF that English, German, and Ukrainian each produce exactly one page, with visible content fully captured and the page ending at the content apart from pixel rounding.
- Verify that adding or removing an entry changes the PDF height automatically.

## Capabilities

### New Capabilities

- `cv-printing` — Content-sized, single-page output through the browser's native Print command.

### Modified Capabilities

## Impact

The change affects the shared print stylesheet and CV layout. The print lifecycle must account for layout changes such as revealing the email and hiding the footer before measuring the content.
