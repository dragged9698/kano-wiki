<template>
  <div class="sidebar-item">
    <img v-if="item.icon" :src="item.icon" class="sidebar-icon" alt="" />
    <a v-if="item.link" :href="item.link" class="sidebar-link">{{ item.text }}</a>
    <span v-else class="sidebar-text">{{ item.text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    text: string
    link?: string
    icon?: string
  }
}>();
</script>

<style scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  gap: 8px;
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