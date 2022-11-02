// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '熊貓電腦',
  tagline: '快速收送、使命必達',
  url: 'https://pandapc.simty.work',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'no2499', // Usually your GitHub org/user name.
  projectName: 'panda-docus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant-TW',
    locales: ['zh-Hant-TW'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '熊貓電腦',
        logo: {
          alt: '熊貓電腦',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '服務項目',
          },
          {to: '/area', label: '收送服務區域', position: 'left'},
          {to: '/price', label: '價格表', position: 'left'},
          {to: '/contact', label: '和我們聯絡', position: 'left'},
          {to: '/blog', label: '精選文章', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: '我們的蝦皮賣場',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '服務',
            items: [
              {
                label: '我們的服務項目',
                to: '/docs/intro',
              },
              {
                label: '快速收送的服務區域',
                to: '/area',
              },
            ],
          },
          {
            title: '我們的社群',
            items: [
              {
                label: '蝦皮',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'instagram',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Facebook',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '精選文章',
                to: '/blog',
              },
              {
                label: '和我們聯絡',
                to: '/contact',
              },
              {
                label: 'GITHUB',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 熊貓電腦 - [ 台北市、新北市、高雄市 ]`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
