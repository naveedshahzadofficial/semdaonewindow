<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "SEZs Services", link: "" },
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
      <span class="text-primary-dark font-semibold">SEZs Services</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      Empowering businesses with the cutting-edge SEZMIS platform, the Board of
      Investment (BOI) paves the way for sustained growth and prosperity. SECP
      registered companies can take advantage of distinctive and advantageous
      economic regulations, which include tax incentives, reduced tariffs,
      streamlined customs protocols, and relaxed labor laws, by registering
      themselves as an Enterprise on SEZMIS.
    </p>
    <p class="font-normal pb-4">
      For further details and registration, click
      <a
        href="https://sezmis.invest.gov.pk/sez"
        target="_blank"
        class="text-blue-500 font-bold hover:underline"
        >here</a
      >
    </p>
  </div>
</template>
