<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require('@/assets/images/bg-dashboard.jpg'));
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "General Registrations/Licenses", link: "" },
  ]);
});
</script>
<style lang="scss">
tr:nth-child(even) {
  background-color: #f2f2f2; /* Set the background color for even rows */
}

tr:nth-child(odd) {
  background-color: #ffffff; /* Set the background color for odd rows */
}
td {
  @apply px-2 py-2;
  border: 1px solid #ccc; /* Add border to each td */
  padding: 8px; /* Add padding to each td */
}
</style>
<template>
  <section class="px-4 py-8">
    <div class="flex justify-between">
      <div class="-mx-6">
        <h1 class="flex items-center space-x-2  bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[400px]">
          <span class="text-white font-semibold ml-8">General Registrations / Licenses</span>
        </h1>
      </div>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>Registration of trade mark/Copy right</li>
        <li>Registration of partnership</li>
        <li>Registration of Company</li>
        <li>NTN Registration</li>
        <li>Registration for payment of tax on services</li>
        <li>Professional Tax registration</li>
        <li>L-17 License (Retail sale)</li>
        <li>L-17 License (Whole-Sale)</li>
        <li>Environmental Approval - EIA & IEE</li>
        <li>ESSI Registration</li>
        <li>Shops & Establishment Registration</li>
        <li>Registration of Factories</li>
        <li>Patent and Desing Registration</li>
        <li>Registration with EOBI</li>
        <li>Certification with PCSIR</li>
      </ul>
    </div>
  </section>
</template>
