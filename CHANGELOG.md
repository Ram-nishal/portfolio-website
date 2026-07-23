# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by Keep a Changelog, and the project follows Semantic Versioning.

---

## [v1.3.0-theme-system] - 2026-07-17

### Added

- Added centralized application state management (`appState.js`).
- Added shared runtime state for portfolio data.
- Added loading state management.
- Added current theme state management.
- Added navigation state management.
- Added portfolio getter and setter functions.
- Implemented dynamic theme initialization.
- Implemented theme persistence using Local Storage.
- Added dynamic Light/Dark theme switching.
- Added reusable DOM-based Theme Toggle component.
- Added CSS variable based theme system.
- Added modular theme architecture.

### Changed

- Refactored application initialization to populate the shared application state.
- Refactored Theme Toggle into a reusable DOM component.
- Improved project architecture by separating application state from UI modules.

### Fixed

- Fixed portfolio initialization workflow.
- Fixed JSON loading order before UI initialization.
- Fixed theme synchronization during application startup.

### Status

✅ Theme Infrastructure Completed

### Progress

```
Project Foundation      ████████████████████ 100%
Core Engine             ████████████████████ 100%
Rendering Engine        ████████████████████ 100%
Theme System            ████████████████████ 100%

Overall Progress        ████████░░░░░░░░░░░░ 40%
```

### Next Milestone

**v1.4.0-navigation-system**

Planned Features

- Dynamic Navigation Bar
- Glass Morphism Navigation
- Active Section Indicator
- Smooth Section Navigation
- Responsive Navigation
- Animated Hover Effects
- Integrated Theme Toggle
- Scroll Progress Integration

---

## [v1.2.0-rendering-engine] - 2026-07-16

### Added

- Implemented the core application bootstrap process.
- Added centralized application state management.
- Added JSON-based portfolio data loading.
- Implemented a reusable section rendering engine.
- Added dynamic rendering for existing HTML sections.
- Established HTML-first rendering architecture.
- Added reusable section header and content injection system.
- Introduced modular UI rendering workflow.

### Changed

- Refactored rendering logic to populate predefined HTML sections instead of dynamically creating page sections.
- Improved project modularity by separating rendering logic from data loading.

### Fixed

- Fixed portfolio JSON loading path issues.
- Fixed rendering workflow to match the static HTML page structure.

### Status

✅ Core Engine Completed

### Next Milestone

**v1.3.0-theme-system**

- Dynamic Light/Dark Theme
- Circular Theme Transition Animation
- Theme Persistence
- Animated Sun/Moon Toggle
- Theme Manager

### Fixed

- Fixed application state initialization during startup.
- Fixed navbar initialization using shared application state.
- Fixed portfolio data access through `appState`.
- Fixed dynamic navigation rendering workflow.
- Fixed theme initialization order.

---

## [v1.4.0-navigation-system] - 2026-07-17

### Added

- Implemented a fully dynamic navigation bar generated from `portfolio.json`.
- Added centralized navigation rendering.
- Added integrated theme toggle within the navigation bar.
- Added smooth scrolling between portfolio sections.
- Added active navigation link highlighting.
- Added navbar scroll state detection.
- Added floating glassmorphism navigation layout.
- Added reusable navigation component architecture.
- Established responsive navigation foundation.

### Changed

- Refactored the navigation to be fully component-driven.
- Moved theme toggle creation into the navbar component.
- Improved application initialization order.
- Improved navigation spacing and layout consistency.

### Fixed

- Fixed application state integration with the navigation system.
- Fixed navbar initialization using shared application state.
- Fixed dynamic portfolio data retrieval.
- Fixed missing theme toggle initialization.
- Fixed rendering order during application startup.

### Status

🟡 Navigation System Feature Complete

Responsive layout refinement pending before milestone tagging.

### Next Milestone

**v1.5.0-hero-section**

- Dynamic Hero Section
- Animated Background
- Typing Animation
- CTA Buttons
- Social Links
- Scroll Indicator

---

## [v1.4.0-navigation-system] - 2026-07-23

### Added

- Implemented a fully dynamic navigation bar rendered from `portfolio.json`.
- Added reusable navigation component architecture.
- Added integrated theme toggle within the navigation bar.
- Added smooth scrolling between all portfolio sections.
- Added active navigation link highlighting.
- Added floating glassmorphism navigation layout.
- Added responsive navigation foundation.
- Added navbar scroll state detection.

### Changed

- Refactored navigation into a modular component.
- Moved theme toggle creation into the navigation component.
- Improved navigation spacing and layout.
- Improved application startup sequence.

### Fixed

- Fixed application state integration with navigation.
- Fixed navbar initialization using shared application state.
- Fixed dynamic portfolio data retrieval.
- Fixed theme toggle rendering.
- Fixed responsive navigation overflow on smaller screen widths.
- Fixed flex layout behaviour during browser resizing.

### Status

✅ Navigation System Completed

### Next Milestone

**v1.5.0-hero-section**

- Dynamic Hero Section
- Animated Background
- Hero Layout
- Typing Animation
- CTA Buttons
- Social Links
- Scroll Indicator
- Hero Entrance Animations