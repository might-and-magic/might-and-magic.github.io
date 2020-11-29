module.exports = {
  title: 'Might and Magic 6, 7, 8 & Merge',
  tagline: 'Might and Magic 6, 7, 8 & Merge',
  url: 'https://might-and-magic.github.io',
  baseUrl: './',
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
          to: 'mm678-i18n/',
          label: 'I18N',
          position: 'left',
        },
        {
          href: 'https://github.com/might-and-magic/might-and-magic.github.io',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
          sidebarPath: require.resolve('./sidebars/all.js'),
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
        routeBasePath: 'mm678-i18n',
        sidebarPath: require.resolve('./sidebars/mm678-i18n.js'),
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
        sidebarPath: require.resolve('./sidebars/mmmerge.js'),
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
        sidebarPath: require.resolve('./sidebars/mm6.js'),
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
        sidebarPath: require.resolve('./sidebars/mm7.js'),
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
        sidebarPath: require.resolve('./sidebars/mm8.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    'docusaurus-plugin-sass',
  ],
}
