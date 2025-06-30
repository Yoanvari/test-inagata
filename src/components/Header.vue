<script setup lang="ts">
import Icon from "../components/Icon.vue";
</script>

<template>
  <header
    class="bg-[#ffffff] text-white border-b-[1px] border-[#E6EFF5] h-[101px] items-center justify-between flex"
  >
    <div class="font-inter font-semibold text-[28px] text-[#343C6A] pl-[40px]">
      Overview
    </div>
    <div class="flex flex-row items-center">
      <!-- search -->
      <div
        class="w-[255px] h-[50px] bg-[#F5F7FA] rounded-r-full rounded-l-full items-center flex"
      >
        <div class="pl-[25px] pr-[15px] flex flex-row">
          <Icon name="Search" />
        </div>
        <div class="font-inter text-[15px] font-normal text-[#8BA3CB]">
          Search for something
        </div>
      </div>
      <!-- setting -->
      <div class="pl-[30px]">
        <Icon name="SettingCircle" class="w-[50px] h-[50px]" />
      </div>
      <!-- notif -->
      <div class="pl-[30px]">
        <Icon name="NotifCircle" class="w-[50px] h-[50px]" />
      </div>
      <!-- profile -->
      <div class="pr-[40px] pl-[35px]">
        <Icon name="Profile" class="w-[60px] h-[60px] rounded-full" />
      </div>
    </div>
  </header>
</template>
