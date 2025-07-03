<script setup lang="ts">
import ToggleSwitch from "../components/ToggleSwitch.vue";
</script>
<template>
  <div
    class="grid grid-cols-2 gap-x-[30px] pt-[42px] pb-[27px] font-inter font-normal text-[#232323]"
  >
    <div class="flex justify-between flex-col h-[80px]">
      <div>Currency</div>
      <div
        class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2]"
      >
        USD
      </div>
    </div>
    <div class="flex justify-between flex-col h-[80px]">
      <div>Time Zone</div>
      <div
        class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2]"
      >
        (GMT-12:00) International Date Line West
      </div>
    </div>
  </div>
  <div
    class="flex flex-col justify-start pb-[72px] font-normal text-[#232323] text-[16px]"
  >
    <div class="pb-[19px] font-medium text-[#333B69] text-[17px]">
      Notification
    </div>
    <div class="flex gap-[20px] items-center">
      <ToggleSwitch />
      <div>I send or receive digita currency</div>
    </div>
    <div class="flex gap-[20px] items-center pt-[16px]">
      <ToggleSwitch />
      <div>I receive merchant order</div>
    </div>
    <div class="flex gap-[20px] items-center pt-[16px]">
      <ToggleSwitch />
      <div>There are recommendation for my account</div>
    </div>
  </div>
  <!-- save button -->
  <div class="flex justify-end w-full h-[50px]">
    <div
      class="w-[190px] bg-[#1814F3] rounded-[15px] text-white flex items-center justify-center"
    >
      Save
    </div>
  </div>
</template>
