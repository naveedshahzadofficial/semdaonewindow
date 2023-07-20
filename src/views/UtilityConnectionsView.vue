<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Utility Connections", link: "" },
  ]);
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
      <span class="text-primary-dark font-semibold">Utility Connections</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      To ensure the smooth setup and operation of any business, utilities are
      must. Here are the links to acquire essential utility connections,
      including electricity, water supply, gas supply, and telecommunications:
    </p>
    <ul class="pb-4 list-disc ps-8">
      <li>
        Electricity
        <a
          href="http://www.enc.com.pk"
          target="_blank"
          class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
          >Apply for new Connection</a
        >
      </li>
      <li>Water Supply</li>
      <li>Gas Supply</li>
      <li>Telecommunications</li>
    </ul>
  </div>
</template>
