const commonStyles = `
  body {
    font-size: 12pt;
    color: var(--theme-text);
  }
  #sk_omnibar {
    background-color: var(--theme-base) !important;
    color: var(--theme-subtext1) !important;
    box-shadow: 0px 3px 15px -6px rgba(var(--theme-crust-rgb, 53,13,81), 0.7) !important;
    border: 1px solid var(--theme-blue) !important;
  }
  #sk_omnibar .prompt {
    color: var(--theme-overlay1) !important;
  }
  #sk_omnibar .separator {
    color: var(--theme-mauve) !important;
    padding-left: 8px !important;
  }
  #sk_omnibar input {
    color: var(--theme-text) !important;
  }
  #sk_omnibarSearchResult {
    border-top: 1px solid var(--theme-surface1) !important;
    margin: 0 !important;
  }
  #sk_omnibar li {
    background: none !important;
    padding: 0.35rem 0.5rem !important;
  }
  #sk_omnibar li.focused {
    background-color: var(--theme-surface0) !important;
  }
  #sk_omnibarSearchResult > ul:nth-child(1) {
    margin-bottom: 0px !important;
    padding: 0 !important;
    padding-bottom: 10px !important;
  }
  #sk_keystroke kbd {
    font-size: 10pt;
    color: var(--theme-text);
    background: var(--theme-crust);
  }
  #sk_keystroke .annotation {
    color: var(--theme-text);
  }
  #sk_keystroke kbd .candidates {
    color: var(--theme-red);
  }
  #sk_banner,
  #sk_keystroke {
    border: 1px solid var(--theme-mauve);
    background: var(--theme-surface2);
  }
  .sk_theme {
    background: var(--theme-base);
    color: var(--theme-text);
  }
  .sk_theme input {
    color: var(--theme-text);
    background: var(--theme-base);
  }
  #sk_hints .begin {
    color: var(--theme-mauve) !important;
  }
  #sk_tabs .sk_tab {
    background: var(--theme-surface0);
    border: 1px solid var(--theme-mauve);
  }
  #sk_tabs .sk_tab_title {
    color: var(--theme-text);
  }
  #sk_tabs .sk_tab_url {
    color: var(--theme-blue);
  }
  #sk_tabs .sk_tab_hint {
    background: var(--theme-base);
    border: 1px solid var(--theme-mauve);
    color: var(--theme-mauve);
  }
  .sk_theme #sk_frame {
    background: var(--theme-surface2);
    opacity: 0.2;
    color: var(--theme-mauve);
  }
  .sk_theme .title {
    color: var(--theme-mauve);
  }
  .sk_theme .url {
    color: var(--theme-blue);
  }
  .sk_theme .omnibar_highlight {
    color: var(--theme-mauve);
  }
  .sk_theme .annotation,
  .sk_theme .omnibar_timestamp,
  .sk_theme .omnibar_visitcount {
    color: var(--theme-mauve);
  }
  #sk_banner {
    background: var(--theme-base);
    border-color: var(--theme-mauve);
    color: var(--theme-text);
    opacity: 0.9;
  }
  #sk_bubble {
    background-color: var(--theme-base) !important;
    color: var(--theme-text) !important;
    border-color: var(--theme-mauve) !important;
  }
  #sk_bubble * {
    color: var(--theme-text) !important;
  }
  .sk_theme kbd {
    background: var(--theme-surface0);
    border-color: var(--theme-mauve);
    box-shadow: none;
    color: var(--theme-text);
  }
  .sk_theme .feature_name span {
    color: var(--theme-blue);
  }
  #sk_editor, .ace-chrome .ace_print-margin, .ace_gutter, .ace_gutter-cell, .ace_dialog {
    background: var(--theme-editor-bg) !important;
  }
  .ace-chrome, .ace_gutter, .ace_dialog, .ace_cursor {
    color: var(--theme-text) !important;
  }
  .normal-mode .ace_cursor {
    background-color: var(--theme-text) !important;
    border: var(--theme-text) !important;
    opacity: 0.7 !important;
  }
  .ace_marker-layer .ace_selection {
    background: var(--theme-surface1) !important;
  }
`;

const lightTheme = `
  @import url('https://cdn.jsdelivr.net/npm/@catppuccin/palette/css/catppuccin.css');
  :root {
    --theme-text: var(--ctp-latte-text);
    --theme-base: var(--ctp-latte-base);
    --theme-subtext1: var(--ctp-latte-subtext1);
    --theme-overlay1: var(--ctp-latte-overlay1);
    --theme-mauve: var(--ctp-latte-mauve);
    --theme-crust: var(--ctp-latte-crust);
    --theme-crust-rgb: 53,13,81; /* fallback, adjust to --ctp-latte-crust-rgb if provided */
    --theme-surface0: var(--ctp-latte-surface0);
    --theme-surface1: var(--ctp-latte-surface1);
    --theme-surface2: var(--ctp-latte-surface2);
    --theme-red: var(--ctp-latte-red);
    --theme-blue: var(--ctp-latte-blue);
    --theme-editor-bg: var(--ctp-latte-surface2);
  }
`;


const darkTheme = `
  @import url('https://cdn.jsdelivr.net/npm/@catppuccin/palette/css/catppuccin.css');
  :root {
    --theme-text: var(--ctp-mocha-text);
    --theme-base: var(--ctp-mocha-base);
    --theme-subtext1: var(--ctp-mocha-subtext1);
    --theme-overlay1: var(--ctp-mocha-rosewater);
    --theme-mauve: var(--ctp-mocha-mauve);
    --theme-crust: var(--ctp-mocha-crust);
    --theme-crust-rgb: 26,23,42; /* fallback, adjust to --ctp-mocha-crust-rgb if provided */
    --theme-surface0: var(--ctp-mocha-crust);
    --theme-surface1: var(--ctp-mocha-surface1);
    --theme-surface2: var(--ctp-mocha-mantle);
    --theme-red: var(--ctp-mocha-pink);
    --theme-blue: var(--ctp-mocha-blue);
    --theme-editor-bg: var(--ctp-mocha-mantle);
  }
`;


const isDarkMode = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export default (isDarkMode ? darkTheme : lightTheme) + commonStyles;

