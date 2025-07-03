<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const isActive = (path: string) =>
  computed(() => route.path === `/setting/${path}`);
</script>

<template>
  <div class="bg-[#f5f7fa] w-full h-[924px] lg:px-[40px] px-[25px] pt-[30px]">
    <div class="bg-[#ffffff] rounded-[25px] pt-[37px] px-[30px] pb-[30px]">
      <!-- menu -->
      <div
        class="justify-between h-[30px] flex sm:justify-start gap-[46px] font-medium font-inter text-[#718EBF] border-b-[1px] border-[#F4F5F7]"
      >
        <RouterLink
          to="/setting/edit-profile"
          class="lg:w-[114px] w-[94px] flex justify-center relative sm:text-[12px] lg:text-[16px]"
          :class="isActive('edit-profile').value ? 'text-[#1814F3]' : ''"
        >
          Edit Profile
          <div
            class="absolute bottom-0 w-full h-[3px] rounded-t-[10px]"
            :class="
              isActive('edit-profile').value ? 'bg-[#1814F3]' : 'bg-[#ffffff]'
            "
          ></div>
        </RouterLink>
        <RouterLink
          to="/setting/preferences"
          class="lg:w-[114px] w-[94px] flex justify-center relative sm:text-[12px] lg:text-[16px]"
          :class="isActive('preferences').value ? 'text-[#1814F3]' : ''"
        >
          Preferences
          <div
            class="absolute bottom-0 w-full h-[3px] rounded-t-[10px]"
            :class="
              isActive('preferences').value ? 'bg-[#1814F3]' : 'bg-[#ffffff]'
            "
          ></div>
        </RouterLink>
        <RouterLink
          to="/setting/security"
          class="lg:w-[114px] w-[94px] flex justify-center relative sm:text-[12px] lg:text-[16px]"
          :class="isActive('security').value ? 'text-[#1814F3]' : ''"
        >
          Security
          <div
            class="absolute bottom-0 w-full h-[3px] rounded-t-[10px]"
            :class="
              isActive('security').value ? 'bg-[#1814F3]' : 'bg-[#ffffff]'
            "
          ></div>
        </RouterLink>
      </div>
      <!-- konten -->
      <router-view />
    </div>
  </div>
</template>
