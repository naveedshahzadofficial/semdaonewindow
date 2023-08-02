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
    name: "Cross Border Trade Services",
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
        <div>
          <h3 class="font-semibold relative text-center text-sm  text-primary-dark">Trade</h3>
          <div
          class="w-[262px] h-[346px] rounded-3xl bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50 m-2"
        >
          <div class="h-full flex flex-col justify-evenly items-center py-6">
            <a
                href="https://pakistan.tradeportal.org/objective/search?l=en&embed=&includeSearch=true&filter_tab=1&flt_2=3&prd_2=&flt_3=&prd_3="
                target="_blank"
                class="flex flex-col items-center group cursor-pointer gap-1.5"
            >
              <span class="relative"
              ><img
                  class="transition-opacity h-11 w-11"
                  src="@/assets/images/pre-feasibility-studies.png"
                  alt="Trade Portal"
              />
                <img
                    class="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 h-11 w-11"
                    src="@/assets/images/pre-feasibility-studies-hover.png"
                    alt="Trade Portal"
                />
              </span>
              <span
                  class="font-medium text-base text-primary-dark group-hover:text-white px-2 text-center"
              >
                Trade Portal
              </span>
            </a>
            <div class="flex w-2/4">
              <hr class="w-full h-px bg-primary-dark bg-opacity-60 border-0" />
            </div>
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
                SMEDA eLearning Export<br> Portal
              </span>
            </a>
          </div>
        </div>
        </div>
        <div>
          <h3 class="font-semibold relative text-center text-sm  text-primary-dark">Permits and Utilities</h3>
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
        <div>
          <h3 class="font-semibold relative text-center text-sm text-primary-dark">Services</h3>
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
      </div>
    </div>
    <div class="-ms-6">
      <h1 class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[280px]">
        <span class="text-white font-semibold ml-8">Complaints / Feedback</span>
      </h1>
    </div>
    <div class="flex px-6 mb-10 md:mb-0 pt-4">
      <div class=" flex-col md:flex-row md:justify-evenly md:space-y-0">
        <span class="absolute">
        <img
            class="object-cover"
            src="@/assets/images/Call-Icon.jpg"
            alt="(042)111-111-456"
        />
      </span>
        <span class="font-light text-base text-primary-dark group-hover:text-white pl-6 px-4"
      >(042)111-111-456</span
      >
      </div>
      <div class=" flex-col md:flex-row md:justify-evenly md:space-y-0">
        <span class="absolute">
        <img
            class="object-cover"
            src="@/assets/images/mail-icon.jpg"
            alt="helpdesk.punjab@smeda.org.pk"
        />
      </span>
        <span class="font-light text-base text-primary-dark group-hover:text-white pl-6 px-4"
        >helpdesk.punjab@smeda.org.pk</span
        >
      </div>
    </div>
    <div class="h-full flex flex-col justify-between ml-6 mb-10">
        <span class="absolute">
        <img
            class="object-cover"
            src="@/assets/images/Address-Icon.jpg"
            alt="Address"
        />
      </span>
        <span class="font-light text-base text-primary-dark group-hover:text-white pl-6 px-4"
      >3rd Floor, 3rd Building, Aiwan-e-Iqbal Complex, Egerton Road, Lahore</span
      >
    </div>
  </section>
</template>
