import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Chanaka Bandara',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Chanaka Bandara',
      logo: {
        alt: 'Chanaka Bandara Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'researchSidebar',
          position: 'left',
          label: 'Research',
        },
        {
          type: 'docSidebar',
          sidebarId: 'aiSidebar',
          position: 'left',
          label: 'AI & Data Science',
        },
        { to: '/volunteering', label: 'Volunteering', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://www.linkedin.com/in/chanaka-bandara/',
          label: 'Linkedin',
          position: 'right',
        },
        {
          href: 'https://www.researchgate.net/profile/Chanaka-Bandara-7',
          label: 'ResearchGate',
          position: 'right',
        },
        {
          href: 'https://github.com/ChanakaDev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'Research',
              to: '/docs/research/intro',
            },
            {
              label: 'AI & Data Science',
              to: '/docs/ai/intro',
            },
          ],
        },
        {
          title: 'Articles',
          items: [
            {
              label: 'Volunteering',
              to: '/volunteering',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/chanaka-bandara/',
            },
            {
              label: 'ResearchGate',
              href: 'https://www.researchgate.net/profile/Chanaka-Bandara-7',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ChanakaDev',
            },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chanaka Bandara. Built with React.js`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'volunteering',                  // Unique ID for the plugin
        routeBasePath: 'volunteering',            // URL path → /volunteering
        path: './volunteering',                   // Folder path in your project root
        showReadingTime: true,
        blogTitle: 'Volunteering',
        blogDescription: 'Stories and updates from my volunteering work',
      },
    ],
  ],


};

export default config;
