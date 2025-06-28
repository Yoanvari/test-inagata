<script setup lang="ts">
import Icon from "../components/Icon.vue";
import SidebarItem from "./SidebarItem.vue";
</script>

<template>
  <aside class="bg-[#ffffff]">
    <nav class="flex flex-col text-[#B1B1B1] font-medium text-[18px] w-[250px]">
      <!-- logo -->
      <div class="pt-[31px] pl-[38px] pb-[46px]">
        <Icon name="Logo" class="w-[148px] h-[36px]" />
      </div>
      <!-- dashboard -->
      <SidebarItem to="/dashboard" icon="Home" label="Dashboard" />
      <!-- transactions -->
      <SidebarItem to="/transaction" icon="Loan" label="Transactions" />
      <!-- accounts -->
      <SidebarItem to="/account" icon="Home" label="Accounts" />
      <!-- investments -->
      <SidebarItem to="/investment" icon="Home" label="Investments" />
      <!-- credit cards -->
      <SidebarItem to="/credit-card" icon="Home" label="Credit Cards" />
      <!-- loan -->
      <SidebarItem to="/loan" icon="Loan" label="Loans" />
      <!-- services -->
      <SidebarItem to="/service" icon="Loan" label="Services" />
      <!-- previlages -->
      <SidebarItem to="/privilege" icon="Loan" label="My Privileges" />
      <!-- setting -->
      <SidebarItem to="/setting" icon="Loan" label="Setting" />
    </nav>
  </aside>
</template>
