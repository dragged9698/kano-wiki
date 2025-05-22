import DefaultTheme from 'vitepress/theme';
import CustomLayout from './components/CustomLayout.vue';
import CustomSidebar from './components/CustomSidebar.vue';
import type { App } from 'vue';

import './scripts/edit-link';
import './styles/index.scss';

export default {
  ...DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }: { app: App }) {
    app.component('CustomSidebar', CustomSidebar);
  }
};
