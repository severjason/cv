## Purpose

Let users save the current CV as a single, content-sized PDF through the browser's native Print command.

## ADDED Requirements

### Requirement: Single-page CV output from native Print

The CV SHALL use a 1280 CSS px print width and fit its page height to the visible print content when saved as PDF through Chrome's native Print command, allowing up to one CSS pixel for rounding.

#### Scenario: Print each supported locale

- **GIVEN** the CV is loaded in English, German, or Ukrainian
- **WHEN** the user invokes native Print through the browser menu, Ctrl+P, or Cmd+P and saves as PDF
- **THEN** the PDF contains exactly one page with all visible print content and no trailing blank area beyond rounding
- **AND** the email is visible when present and the footer is hidden

### Requirement: Recalculate height after data changes

The CV SHALL derive the print page height from the content rendered for the current print request.

#### Scenario: Print again after adding or removing content

- **GIVEN** the user has previously printed the CV
- **WHEN** the user loads CV data with an entry added or removed and prints again
- **THEN** the single-page PDF height reflects the new content without a manual height adjustment
