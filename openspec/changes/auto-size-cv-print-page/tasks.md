# Tasks

## 1. Prepare and size the print layout

- [x] 1.1 Make the shared CV wrapper measurable at 1280 CSS px and let it take its natural print height. Verify that the wrapper includes the visible header and content and excludes the hidden footer in print.
- [ ] 1.2 Make the email, location, and language control render their print variants by measurement time. Verify the email is visible in preview when present and normal screen behavior is restored after canceling.
- [ ] 1.3 Replace the locale height table with a synchronously updated page rule based on the measured wrapper. Verify the first Chrome native print from a fresh page uses the calculated size. If Chrome resolves the page size earlier, prepare it from the settled print layout and refresh it on content changes. Check that canceling and reopening print leaves no temporary layout state behind.

## 2. Verify native PDF output

- [ ] 2.1 Use Chrome's native Print menu and Ctrl+P or Cmd+P on the applicable platform to save the English, German, and Ukrainian CVs as PDFs. Verify one page per locale, full content, and no trailing whitespace beyond rounding. Repeat from a narrow browser window.
- [x] 2.2 Add an entry and remove an entry in local CV data, then print each variant. Verify the PDF page height expands and contracts while the output remains one page.
- [x] 2.3 Run the repository's type and lint checks with `npm run tscheck` and `npm run lint`.

## Verification notes

Chrome's PDF engine produced one 1280 CSS px-wide page for each locale at 1440 px and 480 px viewport widths. The PDF height followed added and removed fixture content, and the measurement state was cleared after printing. Chrome's native Cmd+P preview also showed one page for the English CV. The remaining manual checks cover cancel and reopen behavior and the full native UI locale matrix.
