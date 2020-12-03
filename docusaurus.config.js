module.exports = {
  title: 'Might and Magic 6, 7, 8 & Merge',
  tagline: 'Might and Magic 6, 7, 8 & Merge',
  url: 'https://might-and-magic.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'logo/favicon.ico',
  organizationName: 'might-and-magic', // Usually your GitHub org/user name.
  projectName: 'might-and-magic.github.io', // Usually your repo name.
  themes: [],
  themeConfig: {
    prism: {
      additionalLanguages: ['lua', 'powershell', 'pascal', 'asm6502'],
    },
    navbar: {
      title: 'Might and Magic 6, 7, 8 & Merge',
      logo: {
        alt: 'Might and Magic 6, 7, 8 & Merge Fan Website Logo',
        src: 'logo/favicon-32x32.png',
      },
      items: [
        {
          to: 'all/',
          label: 'All',
          position: 'left',
        },
        {
          to: 'mmmerge/',
          label: 'MMMerge',
          position: 'left',
        },
        {
          to: 'mm6/',
          label: 'MM6',
          position: 'left',
        },
        {
          to: 'mm7/',
          label: 'MM7',
          position: 'left',
        },
        {
          to: 'mm8/',
          label: 'MM8',
          position: 'left',
        },
        {
          to: 'i18n/',
          label: 'I18N',
          position: 'left',
        },
        {
          position: 'right',
          label: 'View & Star GitHub Repo of ...',
          className: 'header-github-link',
          items: [
            {
              href: 'https://github.com/might-and-magic/might-and-magic.github.io',
              label: 'This website',
            },
            {
              href: 'https://github.com/might-and-magic/mm678-i18n',
              label: 'MM678 I18N',
            },
            {
              href: 'https://github.com/might-and-magic/erathian-font',
              label: 'Erathian Font',
            },
            {
              href: 'https://github.com/might-and-magic/fnt-generator',
              label: 'FNT font Generator',
            },
            {
              href: 'https://github.com/might-and-magic/mmarch',
              label: 'mmarch (CLI tool for LOD)',
            },
            {
              href: 'https://github.com/might-and-magic/mmmerge-update-patch',
              label: 'MMMerge Updater',
            },
            {
              href: 'https://github.com/tomchen',
              label: 'And follow @tomchen there!',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Home',
          items: [
            {
              label: 'Style Guide',
              to: 'all/',
            },
            {
              label: 'Second Doc',
              to: 'all/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'all/',
            },
            {
              label: 'GitHub',
              href:
                'https://github.com/might-and-magic/might-and-magic.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'all',
          path: 'all',
          routeBasePath: 'all',
          sidebarPath: require.resolve('./all/sidebar.js'),
          editUrl:
            'https://github.com/might-and-magic/might-and-magic.github.io/edit/master/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/all/',
            from: '/docs/',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mmloc',
        path: 'i18n',
        editUrl:
          'https://github.com/might-and-magic/might-and-magic.github.io/edit/master/',
        routeBasePath: 'i18n',
        sidebarPath: require.resolve('./i18n/sidebar.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mmmerge',
        path: 'mmmerge',
        editUrl:
          'https://github.com/might-and-magic/might-and-magic.github.io/edit/master/',
        routeBasePath: 'mmmerge',
        sidebarPath: require.resolve('./mmmerge/sidebar.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mmvi',
        path: 'mm6',
        editUrl:
          'https://github.com/might-and-magic/might-and-magic.github.io/edit/master/',
        routeBasePath: 'mm6',
        sidebarPath: require.resolve('./mm6/sidebar.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mmvii',
        path: 'mm7',
        editUrl:
          'https://github.com/might-and-magic/might-and-magic.github.io/edit/master/',
        routeBasePath: 'mm7',
        sidebarPath: require.resolve('./mm7/sidebar.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mmviii',
        path: 'mm8',
        editUrl:
          'https://github.com/might-and-magic/might-and-magic.github.io/edit/master/',
        routeBasePath: 'mm8',
        sidebarPath: require.resolve('./mm8/sidebar.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    'docusaurus-plugin-sass',
  ],
}
