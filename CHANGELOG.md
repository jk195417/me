# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-10-27

### Changed

- Upgrade Vue 2 to Vue 3, Bootstrap 4 to Bootstrap 5, Font Awesome 5 to Font Awesome 7
- Replace Parcel 1 with Vite, use npm instead of Yarn
- Deploy to GitHub Pages by GitHub Actions instead of the `gh-pages` package
- Require Node.js 22+
- Rewrite every component with `<script setup>` and TypeScript, with types for the YAML data
- Rename components and props to Vue conventions (`AppFooter` instead of `foooter`, camelCase props); the YAML format is unchanged
- Use buttons for the chapter, language and print mode switches instead of `javascript:void(0)` links

### Added

- Tests with Vitest, including a check that every date in `data/*.yml` exists
- Type checking and tests in CI

### Fixed

- Show a bare year such as `2019` as a year instead of 1970/01
- Read YAML dates in UTC so months stay correct in every time zone

### Removed

- Remove jQuery and Popper.js, which were not used
- Remove the deprecated Universal Analytics tracking

## [0.0.3] - 2020-01-18

### Changed

- Update css: don't break inside in `#introduction`, `#skills`, `.education`, `.experience`

- Update dependencies

  - bootstrap: `4.3.1` -> `4.4.1`
  - dayjs: `1.8.16` -> `1.8.19`
  - jquery: `3.3.1` -> `3.4.1`
  - popper.js: `1.14.7` -> `1.16.0`
  - vue: `2.6.10` -> `2.6.11`
  - vue-template-compiler: `2.6.10` -> `2.6.11`
  - gh-pages: `2.1.1` -> `2.2.0`
  - parcel-bundler": `1.12.3` -> `1.12.4`
  - @vue/component-compiler-utils: `3.0.0` -> `3.1.1`

## [0.0.2] - 2019-10-04

### Added

- `README.md` and `CHANGELOG.md`

### Changed

- Moving `src/data/*.yml` to `data/*.yml`
- Add a **Fork This Project** button in footer
- Using **\@media print** to hidden footer

## [0.0.1] - 2019-10-03

### Added

- Resume generator in `src/`
- My personal information `src/data/*.yml` files as example

[unreleased]: https://github.com/jk195417/me/compare/v0.0.3...HEAD

[1.0.0]: https://github.com/jk195417/me/compare/v0.0.3...v1.0.0

[0.0.3]: https://github.com/jk195417/me/compare/v0.0.2...v0.0.3

[0.0.2]: https://github.com/jk195417/me/compare/v0.0.1...v0.0.2

[0.0.1]: https://github.com/jk195417/me/releases/tag/v0.0.1
