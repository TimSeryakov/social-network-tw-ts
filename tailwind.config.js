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
        "j-secondary": "#4A6FFF", // brand light blue
        "j-hover": "#4161E3", // button and link hover
        "j-gray-50": "#FAFBFF", // bg in few section
        "j-gray-75": "#F0F1F5", // line in about section
        "j-gray-100": "#F0F1F5", // focus and hover background links in mobile menu
        "j-gray-200": "#676A7A", // text
        "j-gray-800": "#454752", // hero text
        "j-gray-600": "#444752", // other titles
        "j-red-400": "#FF7FA3", // text
        "j-red-200": "#FFF5F8", // bg
        "j-green-400": "#61CF9F", // text
        "j-green-200": "#EDFBF8", // bg
      },
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwindcss-pixel-dimensions")({
      width: {
        total: 500, // 900 is the default
      },
      height: {
        total: 900, // 900 is the default
      },
    }),
    function ({ addComponents }) {
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
