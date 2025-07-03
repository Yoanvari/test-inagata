<script setup lang="ts">
import { ref } from "vue";

const isOn = ref(false);
</script>

<template>
  <button
    @click="isOn = !isOn"
    :class="[
      'w-14 h-[31px] rounded-full p-1 flex items-center transition-colors duration-300',
      isOn ? 'bg-[#16DBCC]' : 'bg-[#DFEAF2]',
    ]"
  >
    <div
      :class="[
        'bg-white w-[27px] h-[27px] rounded-full shadow-md transform transition-transform duration-300',
        isOn ? 'translate-x-[23px]' : 'translate-x-[-2px]',
      ]"
    ></div>
  </button>
</template>
