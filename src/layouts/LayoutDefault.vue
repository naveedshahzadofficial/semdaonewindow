<script setup>
import { ref } from "vue";
import { HeaderDefault, FooterDefault, BreadCrumbs } from "./partials";
const breadcrumbs = ref();
import mitt from "mitt";
const emitter = mitt();
emitter.on("breadcrumbs", (_breadcrumbs) => {
  breadcrumbs.value = _breadcrumbs;
});
</script>
<template>
  <HeaderDefault />
  <BreadCrumbs :breadcrumbs="breadcrumbs" />
  <div
    class="min-h-screen bg-[url('@/assets/images/bg-dashboard.jpg')] bg-cover bg-no-repeat"
  >
    <main>
      <div class="w-full mx-auto px-4 py-8">
        <router-view />
      </div>
    </main>
  </div>
  <FooterDefault />
</template>
