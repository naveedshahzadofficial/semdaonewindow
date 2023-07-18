<script setup>
import { ref } from "vue";
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
  <div class="-mx-6">
    <h1 class="flex items-center">
      <span
        ><img
          src="@/assets/images/heading-left.png"
          alt="heading-icon"
        />
      </span>
      <span class="text-primary-dark font-semibold">Grow</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <div class="flex justify-evenly items-center pt-2">
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
              <hr class="w-full h-px bg-primary-dark bg-opacity-60 border-0" />
            </div>
          </template>
        </div>
      </div>
      <div
        class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-400 to-green-200 bg-opacity-50 m-2"
      >
        <div class="h-full flex flex-col justify-center items-center py-6">
          <div class="flex flex-col items-center group cursor-pointer gap-1.5">
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
          <div class="flex flex-col items-center group cursor-pointer gap-1.5">
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

          <div class="flex flex-col items-center group cursor-pointer gap-1.5">
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
              Utility Connections
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center mt-8">
      <div
        class="bg-gradient-to-tr from-blue-500 to-green-200 bg-opacity-50 flex items-center group cursor-pointer gap-1.5 px-4 py-2 rounded-3xl"
      >
        <span class="relative"
          ><img
            class="object-cover transition-opacity"
            src="@/assets/images/construction-permits.png"
            alt="Business Information Resources"
          />
          <img
            class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            src="@/assets/images/construction-permits-hover.png"
            alt="Business Information Resources"
          />
        </span>
        <span
          class="border-r border-white h-10 mr-4 group-hover:border-primary-light"
        ></span>
        <span
          class="w-44 font-medium text-base text-primary-dark group-hover:text-primary-light"
        >
          Business Information Resources
        </span>
      </div>
    </div>
  </div>
</template>
