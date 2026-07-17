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