<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-gray-800 text-white p-4">
    <nav class="flex gap-4">
      <RouterLink to="/">dashboard</RouterLink>
      <RouterLink to="/loan">Loan</RouterLink>
    </nav>
  </header>
</template>
