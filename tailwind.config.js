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
        "j-primary": "#4466FF", // brand blue
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
            maxWidth: "960px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen xl": {
            maxWidth: "960px",
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
      });
    },
  ],
};
