<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
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
        <h1 class="flex items-center space-x-2">
          <span
            ><img
              src="@/assets/images/heading-left.png"
              alt="heading-icon"
            />
          </span>
          <span class="text-primary-dark font-semibold"
            >General Registrations / Licenses</span
          >
        </h1>
      </div>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <ul class="pb-4 list-disc ps-8">
        <li>Registration of trade mark/Copy right</li>
        <li>Registration of partnership</li>
        <li>Registration of Company</li>
        <li>NTN/Registration with SMEDA</li>
        <li>Registration for payment of tax on services</li>
        <li>Professional Tax registration</li>
        <li>L-17 License (Retail sale)</li>
        <li>L-17 License (Whole-Sale)</li>
        <li>Environmental Approval - EIA & IEE</li>
        <li>PESSI Registration</li>
        <li>Shops & Establishment Registration</li>
        <li>Registration of Factories</li>
        <li>Patent and Desing Registration</li>
      </ul>
    </div>
  </section>
</template>
