<script setup>
import { ref, onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs", "background"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require("@/assets/images/bg-dashboard.jpg"));
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "" },
  ]);
});
const tileServices = ref([
  {
    id: 1,
    name: "Trading Services",
    icon: require("@/assets/images/trading-services.png"),
    icon_hover: require("@/assets/images/trading-services-hover.png"),
    link: "trading-services",
  },
  {
    id: 2,
    name: "SEZs Services",
    icon: require("@/assets/images/sezs-services.png"),
    icon_hover: require("@/assets/images/sezs-services-hover.png"),
    link: "sezs-services",
  },
  {
    id: 3,
    name: "Industrial Services",
    icon: require("@/assets/images/industrial-services.png"),
    icon_hover: require("@/assets/images/industrial-services-hover.png"),
    link: "industrial-services",
  },
]);
</script>

<template>
  <section class="px-4 py-8">
    <div class="-ms-6">
      <h1
        class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]"
      >
        <span class="text-white font-semibold ml-8">Grow Your Business</span>
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px] mb-10 md:mb-0">
      <div
        class="flex flex-col items-center pt-2 space-y-6 md:flex-row md:justify-evenly md:space-y-0"
      >
        <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50 m-2"
        >
          <div class="h-full flex flex-col justify-evenly items-center py-6">
            <RouterLink
              :to="{ name: 'expansion-diversification' }"
              class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
                ><img
                  class="transition-opacity"
                  src="@/assets/images/expansion-diversification-hover.png"
                  alt="Sector/Business Specific Information"
                />
                <img
                  class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="@/assets/images/expansion-diversification.png"
                  alt="Sector/Business Specific Information"
                />
              </span>
              <span
                class="font-medium text-base text-center text-primary-dark group-hover:text-white"
              >
                Sector/Business Specific Information
              </span>
            </RouterLink>
            <div class="flex w-2/4">
              <hr class="w-full h-px bg-primary-dark bg-opacity-60 border-0" />
            </div>
            <RouterLink
              :to="{ name: 'business-information-resources' }"
              class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
                ><img
                  class="transition-opacity"
                  src="@/assets/images/business-information-resources-hover.png"
                  alt="Business Information Resources"
                />
                <img
                  class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="@/assets/images/business-information-resources.png"
                  alt="Business Information Resources"
                />
              </span>
              <span
                class="font-medium text-base text-primary-dark group-hover:text-white px-2 text-center"
              >
                Business Information Resources
              </span>
            </RouterLink>
          </div>
        </div>
        <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50 m-2"
        >
          <div class="h-full flex flex-col justify-evenly items-center py-6">
            <a
              href="https://www.remitpakistan.org/"
              target="_blank"
              class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
                ><img
                  class="transition-opacity"
                  src="@/assets/images/general-registrations-licenses.png"
                  alt="SMEDA eLearning Export Portal"
                />
                <img
                  class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="@/assets/images/general-registrations-licenses-hover.png"
                  alt="SMEDA eLearning Export Portal"
                />
              </span>
              <span
                class="font-medium text-base text-primary-dark group-hover:text-white px-2 text-center"
              >
                SMEDA eLearning Export Portal
              </span>
            </a>
            <div class="flex w-2/4">
              <hr class="w-full h-px bg-primary-dark bg-opacity-60 border-0" />
            </div>
            <a
              href="https://pakistan.tradeportal.org/"
              target="_blank"
              class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
                ><img
                  class="transition-opacity"
                  src="@/assets/images/general-registrations-licenses.png"
                  alt="Pakistan Trade Portal"
                />
                <img
                  class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="@/assets/images/general-registrations-licenses-hover.png"
                  alt="Pakistan Trade Portal"
                />
              </span>
              <span
                class="font-medium text-base text-primary-dark group-hover:text-white px-2 text-center"
              >
                Pakistan Trade Portal
              </span>
            </a>
          </div>
        </div>
        <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-60 m-2"
        >
          <div class="h-full flex flex-col justify-between items-center py-6">
            <template
              v-for="(tileService, index) in tileServices"
              :key="tileService.id"
            >
              <RouterLink
                :to="{ name: tileService.link }"
                class="flex flex-col items-center group cursor-pointer gap-1.5"
              >
                <span class="relative"
                  ><img
                    class="transition-opacity"
                    :src="tileService.icon_hover"
                    :alt="tileService.name"
                  />
                  <img
                    class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    :src="tileService.icon"
                    :alt="tileService.name"
                  />
                </span>
                <span
                  class="font-medium text-base text-primary-dark group-hover:text-white"
                  >{{ tileService.name }}</span
                >
              </RouterLink>

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
      </div>

      <div
        class="flex flex-col items-center pt-6 space-y-6 md:flex-row md:justify-evenly md:pt-2 md:space-y-0"
      >
        <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50 m-2"
        >
          <div class="h-full flex flex-col justify-evenly items-center py-6">
            <RouterLink
              :to="{ name: 'construction-permits' }"
              class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
                ><img
                  class="transition-opacity"
                  src="@/assets/images/construction-permits-hover.png"
                  alt="Construction Permits"
                />
                <img
                  class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="@/assets/images/construction-permits.png"
                  alt="Construction Permits"
                />
              </span>
              <span
                class="font-medium text-base text-primary-dark group-hover:text-white"
              >
                Construction Permits
              </span>
            </RouterLink>

            <div class="flex w-2/4">
              <hr class="w-full h-px bg-primary-dark bg-opacity-60 border-0" />
            </div>

            <RouterLink
              :to="{ name: 'utility-connections' }"
              class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
                ><img
                  class="transition-opacity"
                  src="@/assets/images/utility-connections-hover.png"
                  alt="Utility Connections"
                />
                <img
                  class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="@/assets/images/utility-connections.png"
                  alt="Utility Connections"
                />
              </span>
              <span
                class="font-medium text-base text-primary-dark group-hover:text-white"
              >
                Utility Connections
              </span>
            </RouterLink>
          </div>
        </div>

        <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50 m-2"
        >
          <div class="h-full flex flex-col justify-center items-center py-6">
            <RouterLink
              :to="{ name: 'complaints-feedback' }"
              class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
                ><img
                  class="transition-opacity"
                  src="@/assets/images/cluster-profiles.png"
                  alt="Complaints / Feedback"
                />
                <img
                  class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="@/assets/images/cluster-profiles-hover.png"
                  alt="Complaints / Feedback"
                />
              </span>
              <span
                class="font-medium text-base text-primary-dark group-hover:text-white px-2 text-center"
              >
                Complaints / Feedback
              </span>
            </RouterLink>
          </div>
        </div>
        <div class="w-[262px] h-[346px] m-2 hidden md:block"></div>
      </div>
    </div>
  </section>
</template>
