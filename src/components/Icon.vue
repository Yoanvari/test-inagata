<script setup lang="ts">
import { computed, type DefineComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    default: "w-[25px] h-[25px] text-[#B1B1B1]",
  },
});

const icons = import.meta.glob<DefineComponent<{}, {}, any>>("./icons/*.vue", {
  eager: true,
});

const Component = computed(() => {
  const key = `./icons/Icon${props.name}.vue`;
  return icons[key]?.default || null;
});
</script>

<template>
  <component :is="Component" :class="props.class" v-if="Component" />
  <span v-else class="text-red-500">Icon not found: {{ name }}</span>
</template>
