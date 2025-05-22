<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import CustomSidebar from './CustomSidebar.vue';
import { useData } from 'vitepress';

const { Layout } = DefaultTheme;
const { site } = useData();
</script>

<template>
  <Layout>
    <template #sidebar>
      <CustomSidebar :items="site.themeConfig.sidebar" />
    </template>
  </Layout>
</template>
