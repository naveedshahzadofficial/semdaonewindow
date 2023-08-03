<script setup>
import { TileComponent } from "@/components";
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs", "background"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require("@/assets/images/bg-dashboard.jpg"));
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Plan", link: "plan" },
    { title: "Sector/Business Specific Information", link: "" },
  ]);
});
</script>
<template>
  <section class="px-4 py-8">
    <div class="-ms-6 overflow-hidden">
      <h1
        class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[450px]"
      >
        <span class="text-white font-semibold ml-8"
          >Sector/Business Specific Information</span
        >
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <p class="font-normal pb-4">
        Access sector-specific information, including Business Guides,
        Commercial Contracts, Pre-Feasibility Studies, and Regulatory Procedures
      </p>

      <!-- Start: Tiles -->
      <div
        class="flex flex-col items-center justify-center space-y-6 py-10 md:flex-row md:space-y-0 md:space-x-10"
      >
        <TileComponent
          :tile="{
            title: 'Cutlery',
            icon: require('@/assets/images/cutlery.png'),
            icon_hover: require('@/assets/images/cutlery-hover.png'),
            icon_side: require('@/assets/images/cutlery-opacity.png'),
            classes: 'bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50',
            link: 'cutlery',
          }"
        />

        <TileComponent
          :tile="{
            title: 'Pharmaceuticals',
            icon: require('@/assets/images/pharmaceuticals.png'),
            icon_hover: require('@/assets/images/pharmaceuticals-hover.png'),
            icon_side: require('@/assets/images/pharmaceuticals-opacity.png'),
            classes: 'bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50',
            link: 'pharmaceuticals',
          }"
        />

        <TileComponent
          :tile="{
            title: 'Agrofood',
            icon: require('@/assets/images/agrofood.png'),
            icon_hover: require('@/assets/images/agrofood-hover.png'),
            icon_side: require('@/assets/images/agrofood-opacity.png'),
            classes: 'bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50',
            link: 'agro-food',
          }"
        />

        <TileComponent
          :tile="{
            title: 'Autoparts',
            icon: require('@/assets/images/autoparts.png'),
            icon_hover: require('@/assets/images/autoparts-hover.png'),
            icon_side: require('@/assets/images/autoparts-opacity.png'),
            classes: 'bg-gradient-to-tr from-blue-500 to-green-300 bg-opacity-50',
            link: 'auto-parts',
          }"
        />
      </div>
      <!-- End: Tiles -->
      <div class="flex items-center justify-center mb-10 md:mb-0">
        <RouterLink
          :to="{ name: 'general-registrations-licenses' }"
          class="bg-gradient-to-tr from-blue-500 to-green-200 bg-opacity-50 flex items-center group cursor-pointer gap-1.5 px-4 py-2 rounded-2xl max-w-md"
        >
          <span class="relative"
            ><img
              class="object-cover transition-opacity"
              src="@/assets/images/general-registrations-licenses.png"
              alt="General Registrations /Licenses"
            />
            <img
              class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              src="@/assets/images/general-registrations-licenses-hover.png"
              alt="General Registrations /Licenses"
            />
          </span>
          <span
            class="border-r border-primary-dark h-10 mr-4 group-hover:border-white"
          ></span>
          <span
            class="w-full px-5 font-medium text-sm md:text-base text-primary-dark group-hover:text-white"
          >
            General Registrations /Licenses
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
