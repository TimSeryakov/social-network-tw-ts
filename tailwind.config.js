const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html',
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        "theme-bg-primary": "#20252c", // bg main
        "theme-bg-secondary": "#262b32", // bg secondary
        "theme-bg-third": "#1d2229", // bg third
        "theme-text": "#7b828b", // text
        "theme-border": "#161a20", // borders
        "theme-accent": "#bd93f9", // accent
        "theme-accent-alternative": "#4e4ad8", // accent
        "theme-placeholder": "#1b1f25", // placeholder
        "theme-badge": "#2b3037", // BETA badge
        "theme-white": "#ffffff", // bugfix?
      },
    },
    fontFamily: {
      sans: ["Play", ...defaultTheme.fontFamily.sans],
      "ubuntu": ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    /*  require("tailwindcss-pixel-dimensions")({
        width: {
          total: 500, // 900 is the default
        },
        height: {
          total: 900, // 900 is the default
        },
      }),*/
    function ({addComponents}) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "95%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen md": {
            maxWidth: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen lg": {
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen xl": {
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
      });
    },
  ],
};
