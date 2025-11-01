# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Install dependencies:**
  `npm install`

- **Lint:**
  `npm run lint`

- **Build:**
  `npm run build`
  _(runs gulp build, output in the configured build directory)_

- **Build and Install:**
  `npm run gulp install`
  _(or use `npm run gulp build` for just the build)_

- **Watch (auto rebuild):**
  `npm run watch`
  _(rebuilds on changes)_

- **Local web server (to serve the configuration to SurfingKeys):**
  `npm run gulp serve-simple`
  _(see README for full instructions and security implications)_

- **Full Distribution:**
  `npm run gulp dist`
  _(runs both docs and install/build tasks)_

- **No automated tests currently configured.**
  The `"test"` script is a placeholder.

## Codebase Architecture

- The repository configures [SurfingKeys](https://github.com/brookhong/Surfingkeys), a browser extension.
- Its core logic is centered on:
  - **Custom key mappings:** Per-site and global actions, declared within source configuration files.
  - **Omnibar search integrations:** 58+ search engines and knowledge sources.
  - **Gulp build pipeline:**
    - Entry point (`src` directory, main configuration source files).
    - Build outputs to generated configuration file for use by SurfingKeys.
    - The build process relies heavily on tasks defined in `gulpfile.js`.
      - Key tasks: `build`, `install`, `docs`, `dist`, `favicons`, `watch-*`, and `serve-*`.
  - **Private API keys:**
    - Some search integrations require private API keys.
    - Keys are configured in `src/conf.priv.js` (never committed, based on `conf.priv.example.js`).

- **Site configuration and mappings**
  - Extensive key mappings and integrations for common and specialized sites.
  - Configuration supports academic DOI resolution.

- **Local Web Server**
  - Optional local server (`gulp serve-simple` or `gulp serve`) that can be used to dynamically serve configuration and additional API endpoints (including features for search engines requiring localhost access).

- **Dependencies:**
  - Core dependencies: dompurify, github-reserved-names, uhtml.
  - Build/dev: gulp, webpack, express, ESLint (Airbnb base config).

## Security and Sensitive Config

- Never commit private keys (`conf.priv.js`).
- Users should generate their own API keys and copy `src/conf.priv.example.js` to `src/conf.priv.js` as needed.

## Reference: Key Source Files

- `gulpfile.js` — Build, install, serve, and documentation task automation.
- `package.json` — Dependency and script control.
- `src/conf.priv.example.js` — Template for required private key configuration.
