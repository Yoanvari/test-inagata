<script setup lang="ts">
import Icon from "../components/Icon.vue";
import BarChart from "../components/BarChart.vue";
</script>

<template>
  <section class="h-[1074px] px-[40px] pt-[24px] bg-[#f5f7fa]">
    <div class="grid grid-cols-3 gap-x-[30px] gap-y-[20px]">
      <!-- card -->
      <div class="col-span-2 h-[282px] flex justify-between gap-x-[30px]">
        <div class="w-full flex justify-between flex-col">
          <div class="text-left font-semibold text-[22px] text-[#343C6A]">
            My Cards
          </div>
          <div
            class="relative h-[235px] rounded-[20px] text-white gradient-box"
          >
            <div
              class="w-full grid grid-cols-2 pl-[26px] pr-[24px] pt-[24px] gap-y-[33px]"
            >
              <div class="flex flex-col">
                <span class="font-normal text-[12px]">Balance</span>
                <span class="font-semibold text-[20px]">%5,756</span>
              </div>
              <div class="flex justify-end">
                <icon name="ChipWhite" class="size-[35px]" />
              </div>
              <div class="flex flex-col">
                <span class="font-normal text-[12px] text-white/70"
                  >CARD HOLDER</span
                >
                <span class="font-semibold text-[15px]">Eddy Cusuma</span>
              </div>
              <div class="flex flex-col">
                <span class="font-normal text-[12px] text-white/70"
                  >VALID THRU</span
                >
                <span class="font-semibold text-[15px]">12/22</span>
              </div>
            </div>
            <div
              class="absolute bottom-0 left-0 w-full h-[70px] rounded-bl-[20px] rounded-br-[20px] bg-linear-to-b from-white/15 to-white/0"
            >
              <div
                class="h-full flex flex-row justify-between items-center pl-[26px] pr-[24px]"
              >
                <span class="text-[22px] font-semibold"
                  >3778 **** **** 1234</span
                >
                <div>
                  <div
                    class="relative mr-[14px] size-[30px] rounded-full bg-white/50"
                  >
                    <div
                      class="absolute bottom-0 left-[14px] size-[30px] rounded-full bg-white/50"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-between flex-col">
          <div
            class="text-right mr-[7px] mt-[5px] text-[#343C6A] text-[17px] font-semibold"
          >
            See All
          </div>
          <div
            class="relative h-[235px] rounded-[20px] border-[1px] border-[#DFEAF2] bg-[#ffffff] text-[#343C6A]"
          >
            <div
              class="w-full grid grid-cols-2 pl-[26px] pr-[24px] pt-[24px] gap-y-[33px]"
            >
              <div class="flex flex-col">
                <span class="font-normal text-[12px]">Balance</span>
                <span class="font-semibold text-[20px]">%5,756</span>
              </div>
              <div class="flex justify-end">
                <icon name="ChipBlack" class="size-[35px]" />
              </div>
              <div class="flex flex-col">
                <span class="font-normal text-[12px] text-[#718EBF]"
                  >CARD HOLDER</span
                >
                <span class="font-semibold text-[15px]">Eddy Cusuma</span>
              </div>
              <div class="flex flex-col">
                <span class="font-normal text-[12px] text-[#718EBF]"
                  >VALID THRU</span
                >
                <span class="font-semibold text-[15px]">12/22</span>
              </div>
            </div>
            <div
              class="absolute bottom-0 left-0 w-full h-[70px] rounded-bl-[20px] rounded-br-[20px] border-[1px] border-[#DFEAF2]"
            >
              <div
                class="h-full flex flex-row justify-between items-center pl-[26px] pr-[24px]"
              >
                <span class="text-[22px] font-semibold"
                  >3778 **** **** 1234</span
                >
                <div>
                  <div
                    class="relative mr-[14px] size-[30px] rounded-full bg-[#9199AF]/50"
                  >
                    <div
                      class="absolute bottom-0 left-[14px] size-[30px] rounded-full bg-[#9199AF]/50"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- transaction -->
      <div class="w-full flex justify-between flex-col">
        <span class="text-left font-semibold text-[22px] text-[#343C6A]"
          >Recent Transaction</span
        >
        <div class="h-[235px] rounded-[25px] p-[25px] bg-white">
          <div class="grid grid-cols-1 gap-y-[10px]">
            <div class="flex flex-row justify-between">
              <div class="flex flex-row justify-start gap-[17px]">
                <div
                  class="flex justify-center shrink-0 items-center size-[55px] bg-[#FFF5D9] rounded-full"
                >
                  <Icon name="Business" class="text-[#FFBB38]" />
                </div>
                <div class="flex flex-col justify-center">
                  <span class="text-[#232323] text-[16px] font-medium"
                    >Deposit from my Card</span
                  >
                  <span class="text-[#718EBF] text-[15px] font-normal"
                    >28 January 2021</span
                  >
                </div>
              </div>
              <div
                class="text-[#FF4B4A] text-[16px] font-medium flex items-center text-right"
              >
                -$850
              </div>
            </div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row justify-start gap-[17px]">
                <div
                  class="flex justify-center shrink-0 items-center size-[55px] bg-[#E7EDFF] rounded-full"
                >
                  <Icon name="Paypal" class="text-[#396AFF]" />
                </div>
                <div class="flex flex-col justify-center">
                  <span class="text-[#232323] text-[16px] font-medium"
                    >Deposit Paypal</span
                  >
                  <span class="text-[#718EBF] text-[15px] font-normal"
                    >25 January 2021</span
                  >
                </div>
              </div>
              <div
                class="text-[#41D4A8] text-[16px] font-medium flex items-center text-right"
              >
                +$2,500
              </div>
            </div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row justify-start gap-[17px]">
                <div
                  class="flex justify-center shrink-0 items-center size-[55px] bg-[#DCFAF8] rounded-full"
                >
                  <Icon name="Coin" class="text-[#16DBCC]" />
                </div>
                <div class="flex flex-col justify-center">
                  <span class="text-[#232323] text-[16px] font-medium"
                    >Jemi Wilson</span
                  >
                  <span class="text-[#718EBF] text-[15px] font-normal"
                    >21 January 2021</span
                  >
                </div>
              </div>
              <div
                class="text-[#41D4A8] text-[16px] font-medium flex items-center text-right"
              >
                +$5,400
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- activity -->
      <div
        class="col-span-2 h-[367px] flex flex-col justify-between gap-x-[30px]"
      >
        <span class="text-left font-semibold text-[22px] text-[#343C6A]"
          >Weekly Activity</span
        >
        <BarChart />
      </div>
      <!-- statistics -->
      <div class="w-full flex flex-col justify-between">
        <span class="text-left font-semibold text-[22px] text-[#343C6A]"
          >Expense Statistics</span
        >
        <div
          class="flex justify-center items-center w-full h-[322px] rounded-[25px] bg-white"
        >
          <div class="relative size-[260px]">
            <div class="absolute top-[0%]">
              <svg
                class="w-full h-[130px] fill-[#343C6A] pl-[10px]"
                viewBox="0 0 186 130"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92.8913 129.218L185.783 36.3271C161.378 13.7772 128.76 0 92.8913 0C57.0427 0 24.4241 13.7971 0 36.3271L92.8913 129.218Z"
                />
              </svg>
            </div>
            <div class="absolute bottom-1/2 right-0">
              <svg
                class="w-full h-[103px] fill-[#FC7900]"
                viewBox="0 0 146 103"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M145.129 102.76C143.574 63.2029 127.743 27.3344 102.621 0.138916L0 102.76H145.129Z"
                />
              </svg>
            </div>
            <div class="absolute bottom-0 right-0">
              <svg
                class="h-[120px] w-full fill-[#1814F3] pr-[32px]"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0V119.668C64.9382 117.116 117.116 64.9382 119.668 0H0Z"
                />
              </svg>
            </div>
            <div class="absolute bottom-0 left-0">
              <svg
                class="w-full h-[190px] fill-[#FA00FF] pb-[18px]"
                viewBox="0 0 109 190"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M108.503 78.516L29.9868 0C11.3846 20.1374 0 47.0538 0 76.6418C0 137.533 48.1703 187.158 108.483 189.531V78.516H108.503Z"
                />
              </svg>
            </div>
            <div
              class="absolute flex flex-col top-6 left-14 text-center font-bold text-white"
            >
              <span class="text-[16px]">30%</span>
              <span class="text-[13px]">Entertainment</span>
            </div>
            <div
              class="absolute flex flex-col top-20 right-6 text-center font-bold text-white"
            >
              <span class="text-[16px]">15%</span>
              <span class="text-[13px]">Bill Expense</span>
            </div>
            <div
              class="absolute flex flex-col bottom-13 right-21 text-center font-bold text-white"
            >
              <span class="text-[16px]">35%</span>
              <span class="text-[13px]">Others</span>
            </div>
            <div
              class="absolute flex flex-col bottom-21 left-4 text-center font-bold text-white"
            >
              <span class="text-[16px]">20%</span>
              <span class="text-[13px]">Investment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.gradient-box {
  background: linear-gradient(107.38deg, #4c49ed 2.61%, #0a06f4 101.2%);
}
</style>
