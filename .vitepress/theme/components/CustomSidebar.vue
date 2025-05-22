<template>
  <div class="custom-sidebar">
    <div v-for="group in items" :key="group.text" class="sidebar-group">
      <div class="sidebar-item">
        <img v-if="group.icon" :src="group.icon" class="sidebar-icon" alt="" />
        <a v-if="group.link" :href="group.link" class="sidebar-link">{{ group.text }}</a>
        <span v-else class="sidebar-text">{{ group.text }}</span>
      </div>
      <div v-if="group.items" class="sidebar-items">
        <div v-for="item in group.items" :key="item.text" class="sidebar-item-wrapper">
          <div class="sidebar-item">
            <img v-if="item.icon" :src="item.icon" class="sidebar-icon" alt="" />
            <a v-if="item.link" :href="item.link" class="sidebar-link">{{ item.text }}</a>
            <span v-else class="sidebar-text">{{ item.text }}</span>
          </div>
          <div v-if="item.items" class="sidebar-subitems">
            <div v-for="subitem in item.items" :key="subitem.text" class="sidebar-item">
              <img v-if="subitem.icon" :src="subitem.icon" class="sidebar-icon" alt="" />
              <a v-if="subitem.link" :href="subitem.link" class="sidebar-link">{{ subitem.text }}</a>
              <span v-else class="sidebar-text">{{ subitem.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CustomSidebarItem } from '../types';

defineProps<{
  items: CustomSidebarItem[];
}>();
</script>

<style scoped>
.custom-sidebar {
  padding: 12px;
}

.sidebar-group {
  margin-bottom: 24px;
}

.sidebar-items {
  margin-left: 24px;
  margin-top: 8px;
}

.sidebar-item-wrapper {
  margin-bottom: 8px;
}

.sidebar-subitems {
  margin-left: 24px;
  margin-top: 4px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.sidebar-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.sidebar-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.sidebar-link:hover {
  color: var(--vp-c-brand);
}

.sidebar-text {
  color: var(--vp-c-text-1);
}
</style> 