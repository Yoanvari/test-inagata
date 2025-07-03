<script setup lang="ts">
import Icon from "../components/Icon.vue";
import { dummyLoan } from "../data/dummyLoan";
</script>
<template>
  <section class="bg-[#f5f7fa] w-full h-[924px] px-[40px] pt-[30px]">
    <!-- summary -->
    <div class="grid grid-cols-4 gap-[30px]">
      <div
        class="flex flex-row items-center justify-center h-[120px] bg-[#ffffff] rounded-[25px] py-[25px] gap-[15px]"
      >
        <div
          class="flex justify-center items-center size-[70px] rounded-full bg-[#E7EDFF]"
        >
          <Icon name="Account" class="size-[30px] text-[#396AFF]" />
        </div>
        <div class="flex flex-col">
          <div class="font-normal text-[16px] text-[#718EBF]">
            Personal Loans
          </div>
          <div class="font-semibold text-[20px] text-[#232323]">$50,000</div>
        </div>
      </div>
      <div
        class="flex flex-row items-center justify-center h-[120px] bg-[#ffffff] rounded-[25px] py-[25px] gap-[15px]"
      >
        <div
          class="flex justify-center items-center size-[70px] rounded-full bg-[#FFF5D9]"
        >
          <Icon name="Case" class="size-[30px] text-[#FFBB38]" />
        </div>
        <div class="flex flex-col">
          <div class="font-normal text-[16px] text-[#718EBF]">
            Corporate Loans
          </div>
          <div class="font-semibold text-[20px] text-[#232323]">$100,000</div>
        </div>
      </div>
      <div
        class="flex flex-row items-center justify-center h-[120px] bg-[#ffffff] rounded-[25px] py-[25px] gap-[15px]"
      >
        <div
          class="flex justify-center items-center size-[70px] rounded-full bg-[#FFE0EB]"
        >
          <Icon name="Graph" class="size-[30px] text-[#FF82AC]" />
        </div>
        <div class="flex flex-col">
          <div class="font-normal text-[16px] text-[#718EBF]">
            Business Loans
          </div>
          <div class="font-semibold text-[20px] text-[#232323]">$500,000</div>
        </div>
      </div>
      <div
        class="flex flex-row items-center justify-center h-[120px] bg-[#ffffff] rounded-[25px] py-[25px] gap-[15px]"
      >
        <div
          class="flex justify-center items-center size-[70px] rounded-full bg-[#DCFAF8]"
        >
          <Icon name="Service" class="size-[30px] text-[#16DBCC]" />
        </div>
        <div class="flex flex-col">
          <div class="font-normal text-[16px] text-[#718EBF]">Custom Loans</div>
          <div class="font-semibold text-[20px] text-[#232323]">
            Choose Money
          </div>
        </div>
      </div>
    </div>
    <div class="pt-[24px] pb-[15px] font-semibold text-[22px] text-[#333B69]">
      Active Loans Overview
    </div>
    <!-- table -->
    <div class="w-full rounded-[25px] bg-[#ffffff] px-[30px] py-[20px]">
      <table class="w-full table-fixed">
        <thead
          class="text-left border-b-[1px] border-[#E6EFF5] text-[#718EBF] font-medium text-[16px]"
        >
          <tr>
            <th class="w-4/36">SL No</th>
            <th class="w-6/36">Loan Money</th>
            <th class="w-6/36">Left to repay</th>
            <th class="w-6/36">Duration</th>
            <th class="w-5/36">Interest rate</th>
            <th class="w-6/36">Installment</th>
            <th class="w-5/36">Repay</th>
          </tr>
        </thead>
        <tbody class="text-left text-[#232323] font-normal text-[16px]">
          <tr
            v-for="loan in dummyLoan"
            :key="loan.id"
            class="border-b-[1px] border-[#F2F4F7]"
          >
            <td class="w-4/36">{{ loan.id }}</td>
            <td class="w-6/36">{{ loan.money }}</td>
            <td class="w-6/36">{{ loan.repay }}</td>
            <td class="w-6/36">{{ loan.duration }}</td>
            <td class="w-5/36">{{ loan.interest }}</td>
            <td class="w-6/36">{{ loan.installment }}</td>
            <td class="w-5/36">
              <div
                class="flex justify-center items-center w-[100px] h-[35px] rounded-[50px] border-[1px] text-[15px] font-medium"
                :class="
                  loan.status === true
                    ? 'border-[#1814F3] text-[#1814F3]'
                    : 'border-[#232323] text-[#232323]'
                "
              >
                Repay
              </div>
            </td>
          </tr>
          <tr class="text-[#FE5C73] font-medium text-[16px]">
            <td class="w-4/36">Total</td>
            <td class="w-6/36">$125,0000</td>
            <td class="w-6/36">$750,000</td>
            <td></td>
            <td></td>
            <td class="w-6/36">$50,000 / month</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
table th {
  @apply pb-[11px];
}
table td {
  @apply py-[15px];
}
</style>
