<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    {
      title: "Business Information Resources",
      link: "business-information-resources",
    },
    { title: "SME Resources", link: "" },
  ]);
});
</script>
<template>
  <section class="px-4 py-8">
    <div class="-mx-6">
      <h1 class="flex items-center space-x-2  bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]">
        <span class="text-white font-semibold ml-8">SME Resources</span>
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <ul>
        <li>
          <a
            href="https://moip.gov.pk/"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >Ministry of Industries and Production</a
          >
        </li>
        <li>
          <a
            href="https://www.commerce.gov.pk/"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >Ministry of Commerce</a
          >
        </li>
        <li>
          <a
            href="https://tdap.gov.pk/"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >Trade Development Authority of Pakistan</a
          >
        </li>
        <li>
          <a
            href="https://micadr.com/"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >Musaliha International Center for Arbitration and Dispute
            Resolution (MICADR)</a
          >
        </li>
        <li>
          <a
            href="https://fto.gov.pk/"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >Federal Tax Ombudsman</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>
