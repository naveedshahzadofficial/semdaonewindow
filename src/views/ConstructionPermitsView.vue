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
      <span class="text-primary-dark font-semibold">Construction Permit</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      Driven by a profound commitment to the construction industry's progress
      and efficient construction permits, the Government of Punjab's e-Khidmat
      project pioneers specialized industrial services. To acquire construction
      permits and their associated information, including official
      authorizations to commence construction or renovation projects within a
      specific geographical region.
    </p>
    <p class="font-normal pb-4">
      To access more information, kindly click below.
    </p>

    <a
      href="https://ekhidmat.punjab.gov.pk/construction-industry-services"
      target="_blank"
      class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
      >e-Khidmat Markaz
    </a>
  </div>
</template>
