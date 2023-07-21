<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Industrial Services", link: "" },
  ]);
});
</script>
<template>
  <div class="-mx-6">
    <h1 class="flex items-center space-x-2">
      <span
        ><img
          src="@/assets/images/heading-left.png"
          alt="heading-icon"
        />
      </span>
      <span class="text-primary-dark font-semibold">Industrial Services</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      Integrating convenience and efficiency, e-Khidmat by the Government of
      Punjab presents specialized Industrial services aimed at providing optimal
      support for the Industry. It encompasses a comprehensive suite of
      specialized services tailored for Inspection authorities, Manufacturers,
      and Operators engaged in the management of Boilers and Pressure vessels.
      Additionally, it also addresses the interests of Dealers, Manufacturers,
      Repairers, and Users of Weights & Measures, delivering indispensable
      information and customized assistance to optimize their operational
      practices.
    </p>
    <p class="font-normal pb-4">
      For further details and registration, click
      <a
        href="https://ekhidmat.punjab.gov.pk/industrial-services"
        target="_blank"
        class="text-blue-500 hover:underline"
        >here</a
      >
    </p>
  </div>
</template>
