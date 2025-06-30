<script setup lang="ts">
import Icon from "../components/Icon.vue";
import SidebarItem from "./SidebarItem.vue";
</script>

<template>
  <aside class="bg-[#ffffff] border-r-[1px] border-[#E6EFF5]">
    <nav class="flex flex-col text-[#B1B1B1] font-medium text-[18px] w-[250px]">
      <!-- logo -->
      <div class="pt-[31px] pl-[38px] pb-[46px]">
        <Icon name="Logo" class="w-[148px] h-[36px]" />
      </div>
      <!-- dashboard -->
      <SidebarItem to="/dashboard" icon="Home" label="Dashboard" />
      <!-- transactions -->
      <SidebarItem to="/transaction" icon="Transaction" label="Transactions" />
      <!-- accounts -->
      <SidebarItem to="/account" icon="Account" label="Accounts" />
      <!-- investments -->
      <SidebarItem to="/investment" icon="Investment" label="Investments" />
      <!-- credit cards -->
      <SidebarItem to="/credit-card" icon="Credit" label="Credit Cards" />
      <!-- loan -->
      <SidebarItem to="/loan" icon="Loan" label="Loans" />
      <!-- services -->
      <SidebarItem to="/service" icon="Service" label="Services" />
      <!-- previlages -->
      <SidebarItem to="/privilege" icon="Privilege" label="My Privileges" />
      <!-- setting -->
      <SidebarItem to="/setting" icon="Setting" label="Setting" />
    </nav>
  </aside>
</template>
