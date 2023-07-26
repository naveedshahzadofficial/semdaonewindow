<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs", "background"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require("@/assets/images/Industrial-Services-bg.jpg"));
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Industrial Services", link: "" },
  ]);
});
</script>
<template>
  <section class="px-4 py-8">
    <div class="-ms-6">
      <h1
        class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]"
      >
        <span class="text-white font-semibold ml-8">Industrial Services</span>
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px] grid grid-cols-1 md:grid-cols-3">
      <div class="col-span-2">
        <p class="font-normal pb-4">
          Integrating convenience and efficiency, e-Khidmat by the Government of
          Punjab presents specialized Industrial services aimed at providing
          optimal support for the Industry. It encompasses a comprehensive suite
          of specialized services tailored for Inspection authorities,
          Manufacturers, and Operators engaged in the management of Boilers and
          Pressure vessels. Additionally, it also addresses the interests of
          Dealers, Manufacturers, Repairers, and Users of Weights & Measures,
          delivering indispensable information and customized assistance to
          optimize their operational practices.
        </p>
        <p class="font-normal pb-4">
          For further details and registration, click
          <a
            href="https://ekhidmat.punjab.gov.pk/industrial-services"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >here</a
          >
        </p>
      </div>
      <div
        class="flex items-center justify-center w-[300px] md:w-[370px] md:h-[388px]"
      >
        <img
          class="object-cover rounded-2xl"
          src="@/assets/images/Industrial-Services-side.png"
          alt="Industrial Services"
        />
      </div>
    </div>
  </section>
</template>
