<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require('@/assets/images/Utility-Connections-Backgropund.jpg'));
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Utility Connections", link: "" },
  ]);
});
</script>
<template>
  <section class="px-4 py-8">
    <div class="-mx-6">
      <h1 class="flex items-center space-x-2  bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]">
           <span class="text-white font-semibold ml-8">Utility Connections</span>
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px] grid grid-cols-3">
      <div class="col-span-2">
        <p class="font-normal pb-4">
          To ensure the smooth setup and operation of any business, utilities are
          must. Here are the links to acquire essential utility connections,
          including electricity, water supply, gas supply, and telecommunications:
        </p>
        <ul class="pb-4">
          <li>
            <a
              href="http://www.enc.com.pk"
              target="_blank"
              class="text-blue-500 font-bold hover:underline"
              >Electricity</a
            >
          </li>
          <li>
            <a
              href="https://wasa.punjab.gov.pk/new_connection"
              target="_blank"
              class="text-blue-500 font-bold hover:underline"
              >Water Supply</a
            >
          </li>
          <li>
            <a
              href="https://www.sngpl.com.pk"
              target="_blank"
              class="text-blue-500 font-bold hover:underline"
              >Gas Supply</a
            >
          </li>
          <li>
            <a
              href="https://ptcl.com.pk"
              target="_blank"
              class="text-blue-500 font-bold hover:underline"
              >Telecommunications</a
            >
          </li>
        </ul>
      </div>
      <div class="h-[388px] w-[370px] bg-[url('@/assets/images/Utility-Connections-side.png')] bg-cover bg-no-repeat rounded-2xl"></div>
    </div>
  </section>
</template>
