// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').PluginConfig} */
const addAliasPlugin = () => ({
  name: 'add-alias-plugin',
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@scss': path.resolve(__dirname, './src/scss'),
      },
    },
  }),
});

/** @type {import('@docusaurus/types').PluginConfig} */
const injectPlausiblePlugin = () => ({
  name: 'inject-plausible-plugin',
  injectHtmlTags: () => ({
    headTags: {
      tagName: 'script',
      attributes: {
        src: 'https://plausible.io/js/plausible.js',
        defer: true,
        'data-domain': 'auth-console-docs.gamium.world',
      },
    },
  }),
});

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Auth Console Docs',
  url: 'https://auth-console-docs.gamium.world',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'Gamium', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gamiumapp/auth-console-docs',
          editLocalizedFiles: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Gamium Logo',
          src: 'img/gamium_logo.svg',
          srcDark: 'img/gamium_dark_logo.svg',
          href: 'https://gamium.world',
        },
        items: [
          {
            type: 'doc',
            docId: 'docs/README',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'sdk/README',
            position: 'left',
            label: 'SDK',
          },
          {
            to: 'api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/gamiumapp/auth-console-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Logo',
          src: '/img/gamium_dark_logo.svg',
        },
        style: 'dark',
        links: [
          {
            label: 'Docs',
            to: '/',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/gamiumapp/auth-console-docs',
          },
          {
            label: 'About Us',
            href: 'https://gamium.world',
          },
          {
            label: 'Contact Us',
            href: 'mailto: contact@gamiumworld.com',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gamium LTD. `,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        /**
         * When the page uses 'docusaurus-theme-redoc' theme, it requires 'scala' language in prism, or it will crash.
         *
         * Since 'additionalLanguages' here will override `"additionalLanguages": ["scala"]` from 'docusaurus-theme-redoc'
         * in `.docusaurus/globalData.json`, we should append 'scala' here instead.
         */
        additionalLanguages: ['swift', 'kotlin', 'groovy', 'java', 'scala'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'DE7QZWOVO6',
        apiKey: '4c64ad7f3b8622f59d8121dbac801337',
        indexName: 'gamium',
      },
    }),
  plugins: [addAliasPlugin, injectPlausiblePlugin, 'docusaurus-plugin-sass'],
  themes: ['docusaurus-theme-redoc', '@docusaurus/theme-mermaid'],
};

module.exports = config;
