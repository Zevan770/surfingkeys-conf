const commonStyles = `
  @import url('https://cdn.jsdelivr.net/npm/@catppuccin/palette/css/catppuccin.css');
  body {
    font-size: 12pt;
  }

  #sk_keystroke kbd {
    font-size: 10pt;
  }

  #sk_omnibarSearchArea {
    margin: 0 !important;
    padding: 0.5rem 1rem !important;
    border-bottom: none !important;
  }

  #sk_omnibarSearchResult {
    margin: 0 !important;
  }

  #sk_omnibar li {
    background: none !important;
    padding: 0.35rem 0.5rem !important;
  }

  #sk_omnibarSearchResult > ul:nth-child(1) {
    margin-bottom: 0px !important;
    padding: 0 !important;
    padding-bottom: 10px !important;
  }

  #sk_omnibar .separator {
    padding-left: 8px !important;
  }

  /* Disable RichHints CSS animation */
  .expandRichHints {
    animation: none;
  }
  .collapseRichHints {
    animation: none;
  }
`;

const lightTheme = `
  body {
    color: var(--ctp-latte-text);
  }

  #sk_omnibar {
    background-color: var(--ctp-latte-base) !important;
    color: var(--ctp-latte-subtext1) !important;
    box-shadow: 0px 3px 15px -6px rgba(var(--ctp-latte-crust-rgb, 53,13,81), 0.7) !important;
  }

  #sk_omnibar .prompt {
    color: var(--ctp-latte-overlay1) !important;
  }

  #sk_omnibar .separator {
    color: var(--ctp-latte-mauve) !important;
  }

  #sk_omnibar input {
    color: var(--ctp-latte-crust) !important;
  }

  #sk_omnibarSearchResult {
    border-top: 1px solid var(--ctp-latte-surface1) !important;
  }

  #sk_omnibar li.focused {
    background-color: var(--ctp-latte-surface0) !important;
    color: var(--ctp-latte-crust) !important;
  }

  #sk_banner,
  #sk_keystroke {
    border: 1px solid var(--ctp-latte-mauve);
    background: var(--ctp-latte-surface2);
  }

  #sk_keystroke .annotation {
    color: var(--ctp-latte-text);
  }

  #sk_keystroke kbd {
    color: var(--ctp-latte-base);
    background: var(--ctp-latte-text);
  }

  #sk_keystroke kbd .candidates {
    color: var(--ctp-latte-red);
  }
`;

const darkTheme = `
  body {
    color: var(--ctp-mocha-mauve);
  }

  #sk_omnibar {
    background-color: var(--ctp-mocha-base);
    color: var(--ctp-mocha-text);
  }

  #sk_omnibar .prompt {
    color: var(--ctp-mocha-rosewater) !important;
  }

  #sk_omnibar .separator {
    color: var(--ctp-mocha-sapphire) !important;
    padding-left: 8px !important;
  }

  #sk_omnibar input {
    color: var(--ctp-mocha-text) !important;
  }

  #sk_omnibarSearchResult {
    border-top: 1px solid var(--ctp-mocha-surface1) !important;
  }

  #sk_omnibar li.focused {
    background: var(--ctp-mocha-crust) !important;
    color: var(--ctp-mocha-rosewater) !important;
  }

  #sk_banner,
  #sk_keystroke {
    border: 1px solid var(--ctp-mocha-mauve);
    background: var(--ctp-mocha-mauve);
  }

  #sk_keystroke .annotation {
    color: var(--ctp-mocha-mauve);
  }

  #sk_keystroke kbd {
    color: var(--ctp-mocha-text);
    background: var(--ctp-mocha-mauve);
    border: 1px solid var(--ctp-mocha-crust);
    box-shadow: none;
  }

  #sk_keystroke kbd .candidates {
    color: var(--ctp-mocha-pink);
  }
`;

const isDarkMode = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export default commonStyles + (isDarkMode ? darkTheme : lightTheme);

