import type { DefaultTheme } from 'vitepress';

export interface CustomSidebarItem {
  text: string;
  link?: string;
  icon?: string;
  collapsed?: boolean;
  items?: CustomSidebarItem[];
}

export interface CustomThemeConfig extends DefaultTheme.Config {
  sidebar?: {
    [key: string]: CustomSidebarItem[];
  };
} 