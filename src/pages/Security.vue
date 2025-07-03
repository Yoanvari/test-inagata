<script setup lang="ts">
import ToggleSwitch from "../components/ToggleSwitch.vue";
</script>
<template>
  <div class="pt-[37px] text-[17px] font-medium text-[#333B69]">
    <div class="pb-[19px]">Two-factor Authentication</div>
    <div class="flex gap-[20px] items-center pt-[16px] pb-[27px]">
      <ToggleSwitch />
      <div class="text-[16px] font-normal text-[#232323]">
        Enable or disable two factor authentication
      </div>
    </div>
    <div class="pb-16px">Change Password</div>
    <div
      class="grid grid-cols-2 gap-x-[30px] gap-y-[22px] pt-[16px] pb-[27px] font-inter font-normal text-[#232323]"
    >
      <div class="flex justify-between flex-col h-[80px]">
        <div>Current Password</div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2]"
        >
          **********
        </div>
      </div>
      <div class="col-end-2">
        <div class="flex justify-between flex-col h-[80px]">
          <div>New Password</div>
          <div
            class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2]"
          >
            **********
          </div>
        </div>
      </div>
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
