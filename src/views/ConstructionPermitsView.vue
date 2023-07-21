<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Construction Permit", link: "" },
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
      To access more information, kindly click
      <a
        href="https://ekhidmat.punjab.gov.pk/construction-industry-services"
        target="_blank"
        class="text-blue-500 font-bold hover:underline"
        >here</a
      >
    </p>
  </div>
</template>
