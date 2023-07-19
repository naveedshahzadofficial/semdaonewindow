<script setup>
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});
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
      <span class="text-primary-dark font-semibold">Industrial Services</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      Industrial services encompass a comprehensive suite of specialized
      offerings tailored for Inspection Authorities, Manufacturers, and
      Operators engaged in the management of Boilers and Pressure vessels.
      Additionally, these services extend their offerings to address the unique
      interests of Dealers, Manufacturers, Repairers, and Users of Weights &
      Measures, delivering indispensable information and customized assistance
      to optimize their operational practices. To access more information,
      kindly click the button below.
    </p>
    <a
      href="https://ekhidmat.punjab.gov.pk/industrial-services"
      target="_blank"
      class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
      >eKhide-Khidmat Markaz
    </a>
  </div>
</template>
