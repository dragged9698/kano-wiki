import dotenv from 'dotenv';
/* @ts-expect-error */
import mdFootnote from 'markdown-it-footnote';
import { defineConfigWithTheme, type DefaultTheme, type HeadConfig } from 'vitepress';
import './theme/types';


dotenv.config();

const BASE_PATH = '/';
const BASE_WITH_ORIGIN = `https://wiki.kano.gg${BASE_PATH}`;

interface ThemeConfig extends DefaultTheme.Config {

}

export default defineConfigWithTheme<ThemeConfig>({
  srcDir: './docs',
  outDir: './build',
  assetsDir: 'assets',
  base: '/',

  // Generate files as `/path/to/page.html` and URLs as `/path/to/page`
  cleanUrls: true,

  // Prevent builds when content has dead links
  ignoreDeadLinks: false,

  // Metadata
  lang: 'en-US',
  title: 'Kano Wiki',
  description: 'Official wiki for Kano RuneScape private server - Your comprehensive guide to gameplay, items, quests, and more.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/theme/kano_clear.png' }],
    ['meta', { name: 'theme-color', content: '#5f3914' }],
    ['meta', { name: 'discord:site', content: 'Kano RS Wiki' }],
    ['meta', { name: 'discord:title', content: 'Kano RS Wiki' }],
    ['meta', { name: 'discord:description', content: 'Official wiki for Kano RuneScape private server - Your comprehensive guide to gameplay, items, quests, and more.' }],
    ['meta', { name: 'discord:image', content: 'https://wiki.kano.gg/img/theme/kano_clear.png' }],
  ],

  // Sitemap
  lastUpdated: true,
  sitemap: {
    hostname: 'https://your-domain.com',
  },

  /**
   * Generate social media metadata tags at build time.
   * Note: this does not run when using the development server,
   * so it must be tested by doing a full build with `npm run build`.
   */
  transformHead({ pageData, page }) {
    // Get the raw title and description from frontmatter,
    // rather than the title which has the site suffix
    const { title, description, og_image } = pageData.frontmatter;
    const og_type = page === 'index.md' ? 'website' : 'article';

    // New meta tags to add to the <head>
    const tags: HeadConfig[] = [];

    // Add opengraph tags
    tags.push(['meta', { property: 'og:type', content: og_type }]);
    tags.push(['meta', { property: 'og:title', content: title }]);
    if (og_image) {
      const url = `${BASE_WITH_ORIGIN}img/og/${og_image}`;
      tags.push(['meta', { property: 'og:image', content: url }]);
    }

    return tags;
  },

  // Theme
  themeConfig: {
    siteTitle: 'Kano Wiki',
    logo: '../public/kano_clear.png',
    nav: [
      { text: 'Guides', link: '/guides/getting-started' },
      { text: 'Store', link: 'https://kano.gg/store/bonds' },
      { text: 'Hiscores', link: 'https://kano.gg/hiscores' },
      { text: 'Trade Post', link: 'https://kano.gg/tradepost' },
      { text: 'Vote', link: 'https://kano.gg/vote' },
    ],
    sidebar: {
        '/custom/': [
          {
            text: 'Overview', 
            link: '/custom/overview',
            items: [
              { 
                text: 'Warding',
                collapsed:true,
                link: '/custom/warding/overview',
                items: [
                  { text: 'Enchanting', link: '/custom/warding/enchanting' },
                ]},
              { 
                text: 'Plugins',
                collapsed:true,
                link: '/custom/plugins/overview',
                items: [
                  { text: 'Quick Teleports Plugin', link: '/custom/plugins/quick-teleports' },
                ]},
              { text: 'Bosses', link: '/custom/bosses/overview' },
            ]}
        ],
      '/skills/': [
        {
          text: 'Overview',
          link: '/skills/overview',
          items: [
            
            {
              text: 'Combat Skills',
              collapsed: true,
              link: '/skills/combat/overview',
              items: [
                { text: 'Melee', link: '/skills/combat/melee'},
                { text: 'Defence', link: '/skills/combat/defence'},
                { text: 'Ranged', link: '/skills/combat/ranged'},
                { text: 'Prayer', link: '/skills/combat/prayer'},
                { text: 'Magic', link: '/skills/combat/magic'},
                { text: 'Hitpoints', link: '/skills/combat/hitpoints'},
              ]
            },
            {
              text: 'Gathering Skills',
              collapsed: true,
              link: '/skills/gathering/overview',
              items: [
                { text: 'Farming', link: '/skills/gathering/farming' },
                { text: 'Fishing', link: '/skills/gathering/fishing' },
                { text: 'Hunter', link: '/skills/gathering/hunter' },
                { text: 'Mining', link: '/skills/gathering/mining' },
                { text: 'Woodcutting', link: '/skills/gathering/woodcutting' },
              ]
            },
            {
              text: 'Production Skills',
              collapsed: true,
              link: '/skills/production/overview',
              items: [
                { text: 'Cooking', link: '/skills/production/cooking' },
                { text: 'Crafting', link: '/skills/production/crafting' },
                { text: 'Fletching', link: '/skills/production/fletching' },
                { text: 'Herblore', link: '/skills/production/herblore' },
                { text: 'Runecraft', link: '/skills/production/runecraft' },
                { text: 'Smithing', link: '/skills/production/smithing' },
              ]
            },
            {
              text: 'Utility Skills',
              collapsed: true,
              link: '/skills/utility/overview',
              items: [
                { text: 'Agility', link: '/skills/utility/agility' },
                { text: 'Construction', link: '/skills/utility/construction' },
                { text: 'Firemaking', link: '/skills/utility/firemaking' },
                { text: 'Slayer', link: '/skills/utility/slayer' },
                { text: 'Thieving', link: '/skills/utility/thieving' },
              ]
            },
          ]
        },
        
      ],
      '/guides/': [
        {
          items: [
            {
              text: 'Getting Started',
              collapsed: true,
              link: '/guides/getting-started.md',
              items: [
                { text: 'Relics', link: '/guides/getting-started/relics' },

              ]
            },
            {
              text: 'Official Guides',
              collapsed: true,
              link: '/guides/official/overview',
              items: [
                { 
                  text: 'Combat',
                  collapsed: true,
                  link: '/guides/official/combat/overview',
                  items: [
                    { text: 'guide', link: '/guides/official/combat/guide' },

                  ]
                },
                {
                  text: 'Skilling',
                  collapsed: true,
                  link: '/guides/official/skilling/overview',
                  items: [
                    { text: 'Guide', link: '/guides/official/skilling/guide' },

                  ]
                },
                {
                  text: 'Money Making',
                  collapsed: true,
                  link: '/guides/official/money-making/overview',
                  items: [
                    { text: 'Combat', link: '/guides/official/money-making/combat' },
                    { text: 'Daily', link: '/guides/official/money-making/daily' },
                    { text: 'High-Req', link: '/guides/official/money-making/high-req' },
                    { text: 'Low-Req', link: '/guides/official/money-making/low-req' },
                    { text: 'Passive', link: '/guides/official/money-making/passive' },
                    { text: 'Skilling', link: '/guides/official/money-making/skilling' },
                  ]
                },
                {
                  text: 'Boss Guides',
                  collapsed: true,
                  items: [
                    {
                      text: 'Beginner Bosses',
                      collapsed: true,
                      items: [
                        { text: 'Giant Mole', link: '/guides/official/bosses/beginner/giant-mole' },
                        { text: 'Barrows', link: '/guides/official/bosses/beginner/barrows' },
                        { text: 'King Black Dragon', link: '/guides/official/bosses/beginner/kbd' },
                        { text: 'Chaos Fanatic', link: '/guides/official/bosses/beginner/chaos-fanatic' },
                      ]
                    },
                    {
                      text: 'Intermediate Bosses',
                      collapsed: true,
                      items: [
                        { text: 'Dagannoth Kings', link: '/guides/official/bosses/dagannoth-kings' },
                        { text: 'Sarachnis', link: '/guides/official/bosses/sarachnis' },
                        { text: 'Grotesque Guardians', link: '/guides/official/bosses/grotesque-guardians' },
                        { text: 'Kalphite Queen', link: '/guides/official/bosses/kalphite-queen' },
                      ]
                    },
                    {
                      text: 'Advanced Bosses',
                      collapsed: true,
                      items: [
                        { text: 'Vorkath', link: '/guides/official/bosses/vorkath' },
                        { text: 'Zulrah', link: '/guides/official/bosses/zulrah' },
                        { text: 'Alchemical Hydra', link: '/guides/official/bosses/alchemical-hydra' },
                        { text: 'Corrupted Gauntlet', link: '/guides/official/bosses/corrupted-gauntlet' },
                      ]
                    },
                    {
                      text: 'Raid Bosses',
                      collapsed: true,
                      items: [
                        { text: 'Chambers of Xeric', link: '/guides/official/bosses/chambers-of-xeric' },
                        { text: 'Theatre of Blood', link: '/guides/official/bosses/theatre-of-blood' },
                        { text: 'Tombs of Amascut', link: '/guides/official/bosses/tombs-of-amascut' },
                      ]
                    },
                  ]
                },            
              ]
            },
            {
              text: 'Community Guides',
              collapsed: true,
              link: '/guides/unofficial/overview',
              items: [
                { 
                  text: 'Combat',
                  collapsed: true,
                  items: [
                    { text: 'Melee', link: '/guides/training/combat/defence' },
                    { text: 'Ranged', link: '/guides/training/combat/ranged' },
                    { text: 'Magic', link: '/guides/training/combat/magic' },
                    { text: 'Prayer', link: '/guides/training/combat/prayer' },
                    { text: 'Hitpoints', link: '/guides/training/combat/hitpoints' },
                  ]
                },
                {
                  text: 'Skilling',
                  collapsed: true,
                  items: [
                    { text: 'Mining', link: '/guides/training/mining' },
                    { text: 'Fishing', link: '/guides/training/fishing' },
                    { text: 'Woodcutting', link: '/guides/training/woodcutting' },
                    { text: 'Hunter', link: '/guides/training/hunter' },
                  ]
                },
                {
                  text: 'Money Making',
                  collapsed: true,
                  items: [
                    { text: 'Smithing', link: '/guides/training/smithing' },
                    { text: 'Cooking', link: '/guides/training/cooking' },
                    { text: 'Fletching', link: '/guides/training/fletching' },
                    { text: 'Crafting', link: '/guides/training/crafting' },
                    { text: 'Herblore', link: '/guides/training/herblore' },
                    { text: 'Construction', link: '/guides/training/construction' },
                  ]
                },
                {
                  text: 'Boss Guides',
                  collapsed: true,
                  items: [
                    {
                      text: 'Beginner Bosses',
                      collapsed: true,
                      items: [
                        { text: 'Giant Mole', link: '/guides/official/bosses/beginner/giant-mole' },
                        { text: 'Barrows', link: '/guides/official/bosses/beginner/barrows' },
                        { text: 'King Black Dragon', link: '/guides/official/bosses/beginner/kbd' },
                        { text: 'Chaos Fanatic', link: '/guides/official/bosses/beginner/chaos-fanatic' },
                      ]
                    },
                    {
                      text: 'Intermediate Bosses',
                      collapsed: true,
                      items: [
                        { text: 'Dagannoth Kings', link: '/guides/official/bosses/dagannoth-kings' },
                        { text: 'Sarachnis', link: '/guides/official/bosses/sarachnis' },
                        { text: 'Grotesque Guardians', link: '/guides/official/bosses/grotesque-guardians' },
                        { text: 'Kalphite Queen', link: '/guides/official/bosses/kalphite-queen' },
                      ]
                    },
                    {
                      text: 'Advanced Bosses',
                      collapsed: true,
                      items: [
                        { text: 'Vorkath', link: '/guides/official/bosses/vorkath' },
                        { text: 'Zulrah', link: '/guides/official/bosses/zulrah' },
                        { text: 'Alchemical Hydra', link: '/guides/official/bosses/alchemical-hydra' },
                        { text: 'Corrupted Gauntlet', link: '/guides/official/bosses/corrupted-gauntlet' },
                      ]
                    },
                    {
                      text: 'Raid Bosses',
                      collapsed: true,
                      items: [
                        { text: 'Chambers of Xeric', link: '/guides/official/bosses/chambers-of-xeric' },
                        { text: 'Theatre of Blood', link: '/guides/official/bosses/theatre-of-blood' },
                        { text: 'Tombs of Amascut', link: '/guides/official/bosses/tombs-of-amascut' },
                      ]
                    },
                  ]
                },            
              ]
            }, 
            
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/uJvFgVPNsh' }, // Add your Discord link
      
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/dragged9698/kano-wiki/edit/main/docs/:path',
      text: 'Edit this page'
    },
  },

  postRender(context) {
    context.teleports;
  },

  markdown: {
    config: (md) => {
      md.use(mdFootnote);
    },
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return ['chatlio-widget'].includes(tag.toLowerCase());
        },
      },
    },
  },
});


