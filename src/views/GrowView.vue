<script setup>
import { ref, onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require('@/assets/images/bg-dashboard.jpg'));
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
    <div class="-mx-6">
      <h1 class="flex items-center space-x-2">
        <span
          ><img
            src="@/assets/images/heading-left.png"
            alt="heading-icon"
          />
        </span>
        <span class="text-primary-dark font-semibold">Grow Your Business</span>
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <div class="flex justify-evenly items-center pt-2">
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
        <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50 m-2"
        >
          <div class="h-full flex flex-col justify-center items-center py-6">
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
          </div>
        </div>
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
      </div>

      <div class="flex justify-evenly items-center pt-2">
        <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50 m-2"
        >
          <div class="h-full flex flex-col justify-center items-center py-6">
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
          <div class="h-full flex flex-col justify-center items-center py-6">
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
          </div>
        </div>
        <div class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50 m-2">
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
      </div>

      <div class="hidden flex justify-between items-center mt-8 mx-[95px]">
        <RouterLink
          :to="{ name: 'business-information-resources' }"
          class="bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50 flex items-center group cursor-pointer gap-1.5 px-4 py-2 rounded-2xl"
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
            class="w-full px-5 font-medium text-base text-primary-dark group-hover:text-primary-light"
          >
            Business Information Resources
          </span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'general-registrations-licenses' }"
          class="bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50 flex items-center group cursor-pointer gap-1.5 px-4 py-2 rounded-2xl"
        >
          <span class="relative"
            ><img
              class="object-cover transition-opacity"
              src="@/assets/images/general-registrations-licenses-hover.png"
              alt="Business Information Resources"
            />
            <img
              class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              src="@/assets/images/general-registrations-licenses.png"
              alt="Business Information Resources"
            />
          </span>
          <span
            class="border-r border-primary-dark h-10 mr-4 group-hover:border-white"
          ></span>
          <span
            class="w-full px-5 font-medium text-base text-primary-dark group-hover:text-white"
          >
            General Registrations /Licenses
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
