<script setup>
import { ref } from "vue";
const activeTab = ref(1);
const changeTab = (newTab) => {
  activeTab.value = newTab;
};

const tileServices = ref([
  {
    id: 1,
    name: "Trading Services",
    icon: require("@/assets/images/trading-services.png"),
    icon_hover: require("@/assets/images/trading-services-hover.png"),
  },
  {
    id: 2,
    name: "SEZs Services",
    icon: require("@/assets/images/sezs-services.png"),
    icon_hover: require("@/assets/images/sezs-services-hover.png"),
  },
  {
    id: 3,
    name: "Industrial Services",
    icon: require("@/assets/images/industrial-services.png"),
    icon_hover: require("@/assets/images/industrial-services-hover.png"),
  },
]);
</script>
<template>
  <div class="px-20 py-6">
    <div class="flex justify-center gap-1">
      <div
        @click.prevent="changeTab(1)"
        :class="
          activeTab === 1
            ? 'bg-gradient-to-r from-blue-600 to-green-400'
            : 'bg-gray-300'
        "
        class="w-full text-center font-normal cursor-pointer py-2.5"
      >
        String a Business
      </div>
      <div
        @click.prevent="changeTab(2)"
        :class="
          activeTab === 2
            ? 'bg-gradient-to-r from-blue-600 to-green-400'
            : 'bg-gray-300'
        "
        class="w-full text-center font-normal cursor-pointer py-2.5"
      >
        Registered Business
      </div>
      <div
        @click.prevent="changeTab(3)"
        :class="
          activeTab === 3
            ? 'bg-gradient-to-r from-blue-600 to-green-400'
            : 'bg-gray-300'
        "
        class="w-full text-center font-normal cursor-pointer py-2.5"
      >
        Unregistered Business
      </div>
    </div>
    <div
      v-show="activeTab === 1"
      class="border border-gray-400 px-8 py-8 min-h-screen"
    >
      <h2 class="font-semibold py-2">String a Business</h2>
      <p class="font-normal pb-4">
        Starting a legal business typically entails several crucial steps and
        requirements. While the specific requirements can vary based on the type
        of business, here are some fundamental elements to consider:
      </p>
      <ul class="pb-4 list-disc ps-8">
        <li>Business Name</li>
        <li>Legal Structure</li>
        <li>Register Your Business</li>
        <li>Tax Obligations</li>
        <li>Business Bank Account</li>
        <li>Insurance</li>
        <li>Intellectual Property Protection</li>
        <li>Compliance and Regulations</li>
        <li>Financial Management</li>
      </ul>
      <p class="font-normal pb-4">
        These are general guidelines, specific requirements can vary depending
        on your location and the nature of your business. It is advisable to
        consult with legal and financial professionals who can provide guidance
        tailored to your specific circumstances. For further details,
        <a
          href="#"
          class="text-primary-light hover:text-primary-dark hover:underline"
          target="_blank"
          >click here</a
        >
      </p>

      <a
        href="#"
        class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
        >Registration Portal Link</a
      >
    </div>

    <div
      v-show="activeTab === 2"
      class="border border-gray-400 px-8 py-8 min-h-screen"
    >
      <div class="flex justify-between items-center pt-2">
        <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-400 to-green-200 bg-opacity-60 m-2"
        >
          <div class="h-full flex flex-col justify-between items-center py-6">
            <template
              v-for="(tileService, index) in tileServices"
              :key="tileService.id"
            >
              <div
                class="flex flex-col items-center group cursor-pointer gap-1.5"
              >
                <span class="relative"
                  ><img
                    class="transition-opacity"
                    :src="tileService.icon"
                    :alt="tileService.name"
                  />
                  <img
                    class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    :src="tileService.icon_hover"
                    :alt="tileService.name"
                  />
                </span>
                <span
                  class="font-medium text-base text-primary-dark group-hover:text-primary-light"
                  >{{ tileService.name }}</span
                >
              </div>

              <div
                v-if="index !== tileServices.length - 1"
                class="flex w-2/4"
              >
                <hr
                  class="w-full h-px bg-primary-dark bg-opacity-60 border-0"
                />
              </div>
            </template>
          </div>
        </div>
        <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-400 to-green-200 bg-opacity-50 m-2"
        >
          <div class="h-full flex flex-col justify-center items-center py-6">
            <div
              class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
                ><img
                  class="transition-opacity"
                  src="@/assets/images/expansion-diversification.png"
                  alt="Expansion / Diversification"
                />
                <img
                  class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="@/assets/images/expansion-diversification-hover.png"
                  alt="Expansion / Diversification"
                />
              </span>
              <span
                class="font-medium text-base text-primary-dark group-hover:text-primary-light"
              >
                Expansion / Diversification
              </span>
            </div>
          </div>
        </div>
        <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-400 to-green-200 bg-opacity-50 m-2"
        >
          <div class="h-full flex flex-col justify-evenly items-center py-6">
            <div
              class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
                ><img
                  class="transition-opacity"
                  src="@/assets/images/construction-permits.png"
                  alt="Construction Permits"
                />
                <img
                  class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="@/assets/images/construction-permits-hover.png"
                  alt="Construction Permits"
                />
              </span>
              <span
                class="font-medium text-base text-primary-dark group-hover:text-primary-light"
              >
                Construction Permits
              </span>
            </div>

            <div class="flex w-2/4">
              <hr class="w-full h-px bg-primary-dark bg-opacity-60 border-0" />
            </div>

            <div
              class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
                ><img
                  class="transition-opacity"
                  src="@/assets/images/utility-connections.png"
                  alt="Utility Connections"
                />
                <img
                  class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="@/assets/images/utility-connections-hover.png"
                  alt="Utility Connections"
                />
              </span>
              <span
                class="font-medium text-base text-primary-dark group-hover:text-primary-light"
              >
                Utility Connection s
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center"></div>
    </div>

    <div
      v-show="activeTab === 3"
      class="border border-gray-400 px-8 py-8 min-h-screen"
    >
      <h2 class="font-semibold py-2">Unregistered Business</h2>
      <p class="font-normal pb-4">
        In order to register your business, kindly furnish the required
        information. Please ensure that the information you provide corresponds
        to the nature and activities of your business.
      </p>
    </div>
  </div>
</template>
