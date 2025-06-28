<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import Icon from "./Icon.vue";
import { computed } from "vue";

const props = defineProps<{
  to: string;
  icon: string;
  label: string;
}>();

const route = useRoute();

const isActive = computed(() => route.path === props.to);
</script>

<template>
  <div class="w-full flex justify-start relative">
    <RouterLink
      :to="to"
      class="flex flex-row items-center h-[60px] pl-[44px]"
      :class="isActive ? 'text-[#2D60FF]' : 'text-[#B1B1B1]'"
    >
      <Icon :name="icon" class="w-[25px] h-[25px]" />
      <span class="pl-[26px]">{{ label }}</span>
    </RouterLink>
    <div
      class="absolute bottom-0 left-0 h-full w-[6px] rounded-br-full rounded-tr-full"
      :class="isActive ? 'bg-[#2D60FF]' : 'bg-white'"
    ></div>
  </div>
</template>
