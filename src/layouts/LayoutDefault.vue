<script setup>
import { ref } from "vue";
import { HeaderDefault, FooterDefault, BreadCrumbs } from "./partials";
const breadcrumbs = ref();
const onLoadedBreadcrumbs = (_breadcrumbs) => {
  breadcrumbs.value = _breadcrumbs;
};
</script>
<template>
  <HeaderDefault />
  <BreadCrumbs :breadcrumbs="breadcrumbs" />

  <main
    class="min-h-screen bg-[url('@/assets/images/bg-dashboard.jpg')] bg-cover bg-no-repeat"
  >
    <div class="w-full mx-auto">
      <router-view @breadcrumbs="onLoadedBreadcrumbs" />
    </div>
  </main>
  <FooterDefault />
</template>
