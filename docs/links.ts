import type { CardLink, FooterSection, MenuLinkGroup, MenuLinkItem } from '@theme/data/types';

// --------------------------------
// Link Groups / Sidebar



// --------------------------------
// Home

export const homeTopLinks: CardLink[] = [
  {
    title: 'Getting Started',
    url: '/guides/getting-started',
    description: 'Begin your journey in Kano with our comprehensive new player guide.',
    icon: '../public/img/rs/skills/Wave_emote_icon.webp'
  },
  {
    title: 'Guides',
    url: '/guides/getting-started',
    description: 'From money making to training, we have you covered.',
    icon: '../public/img/rs/skills/Quest_point_icon.png'
  },
  {
    title: 'Skills',
    url: '/skills/overview',
    description: 'Level up your character with various skills and abilities.',
    icon: '../public/img/rs/skills/Stats_icon.webp'
  },
  {
    title: 'Store',
    url: 'https://kano.gg/store',
    description: 'Donate today and get exclusive rewards!',
    icon: '../public/img/rs/Old_school_bond.webp'
  },
  {
    title: 'Custom Content',
    url: '/custom/overview',
    description: 'Explore unique features and content exclusive to Kano.',
    icon: '../public/img/rs/skills/Clan_symbol_-_Compass.webp'
  },
  {
    title: 'Donor Perks',
    url: 'https://kano.gg/donatorbenefits',
    description: 'Explore the perks of helping Kano grow.',
    icon: '../public/img/rs/skills/Member_icon.webp'
  }
];

export const homeExternalLinks: CardLink[] = [
  {
    title: 'Changelogs',
    description:
      'Stay up to date with our news, read tech posts from our engineers, and join in celebrating our community.',
    url: '#',
    large: true,
    bgImg: 'bolt',
  },
  {
    title: 'Discord',
    description:
      "Join our supportive community on Discord, ask questions, and share your character's progress.",
    url: 'https://discord.gg/uJvFgVPNsh',
    large: true,
    bgImg: 'squares',
  },
];

// --------------------------------
// Footer

export const footerSections: FooterSection[] = [
];
