<script setup lang="ts">
import Icon from "../components/Icon.vue";
</script>

<template>
  <div
    class="flex flex-col sm:flex-row justify-between pt-[52px] space-x-[55px] w-full"
  >
    <!-- foto profile -->
    <div class="relative flex justify-center mt-[3px] sm:h-[130px] h-[170px]">
      <Icon
        name="Profile"
        class="size-[170px] sm:size-[110px] lg:size-[130px] rounded-full"
      />
      <div
        class="absolute bottom-[24px] left-[306px] lg:bottom-[20px] lg:left-[100px] sm:bottom-[38px] sm:left-[86px]"
      >
        <Icon name="Pencil" class="size-[39px] sm:size-[25px] lg:size-[30px]" />
      </div>
    </div>
    <!-- data profile -->
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-[29px] gap-y-[22px] font-inter font-normal text-[#232323] pb-[30px] pt-[22px] sm:pt-0"
    >
      <div class="flex justify-between flex-col h-[80px] lg:w-full">
        <div class="font-normal text-[13px] lg:text-[16px]">Your Name</div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2] text-[12px] lg:text-[15px]"
        >
          Charlene Reed
        </div>
      </div>
      <div class="flex justify-between flex-col h-[80px]">
        <div class="font-normal text-[13px] lg:text-[16px]">User Name</div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2] text-[12px] lg:text-[15px]"
        >
          Charlene Reed
        </div>
      </div>
      <div class="flex justify-between flex-col h-[80px]">
        <div class="font-normal text-[13px] lg:text-[16px]">Email</div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2] text-[12px] lg:text-[15px]"
        >
          charlenereed@gmail.com
        </div>
      </div>
      <div class="flex justify-between flex-col h-[80px]">
        <div class="font-normal text-[13px] lg:text-[16px]">Password</div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2] text-[12px] lg:text-[15px]"
        >
          **********
        </div>
      </div>
      <div class="flex justify-between flex-col h-[80px]">
        <div class="font-normal text-[13px] lg:text-[16px]">Date of Birth</div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2] text-[12px] lg:text-[15px]"
        >
          25 January 1990
        </div>
      </div>
      <div class="flex justify-between flex-col h-[80px]">
        <div class="font-normal text-[13px] lg:text-[16px]">
          Present Address
        </div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2] text-[12px] lg:text-[15px]"
        >
          San Jose, California, USA
        </div>
      </div>
      <div class="flex justify-between flex-col h-[80px]">
        <div class="font-normal text-[13px] lg:text-[16px]">
          Permanent Address
        </div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2] text-[12px] lg:text-[15px]"
        >
          San Jose, California, USA
        </div>
      </div>
      <div class="flex justify-between flex-col h-[80px]">
        <div class="font-normal text-[13px] lg:text-[16px]">City</div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2] text-[12px] lg:text-[15px]"
        >
          San Jose
        </div>
      </div>
      <div class="flex justify-between flex-col h-[80px]">
        <div class="font-normal text-[13px] lg:text-[16px]">Postal Code</div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2] text-[12px] lg:text-[15px]"
        >
          45962
        </div>
      </div>
      <div class="flex justify-between flex-col h-[80px]">
        <div class="font-normal text-[13px] lg:text-[16px]">Country</div>
        <div
          class="flex items-center h-[50px] rounded-[15px] border-[1px] pl-[20px] text-[#718EBF] border-[#DFEAF2] text-[12px] lg:text-[15px]"
        >
          USA
        </div>
      </div>
    </div>
  </div>
  <!-- save button -->
  <div class="flex justify-end w-full h-[50px]">
    <div
      class="w-full sm:w-[190px] bg-[#1814F3] rounded-[15px] text-white flex items-center justify-center"
    >
      Save
    </div>
  </div>
</template>
