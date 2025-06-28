<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="flex h-screen font-inter">
    <Sidebar />
    <div class="flex-col w-full">
      <Header />
      <router-view />
    </div>
  </div>
</template>
