// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Yanuar Aditia',
  plugins: [
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        icon_path: "./src/favicon.png",
        name: "Yanuar Aditia",
        short_name: "Yanuar",
        theme_color: "#efabc0",
        lang: "en",
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/exclude-me'],
        config: {
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2020-07-30',
          },
          '/contact': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2020-07-30',
          }
        }
      }
    },
    {
      use: "gridsome-plugin-service-worker",
    },
  ],
  testEnvironment: 'node'
}
