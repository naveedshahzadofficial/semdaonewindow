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
  <div
    class="min-h-screen bg-[url('@/assets/images/bg-dashboard.jpg')] bg-cover bg-no-repeat"
  >
    <main>
      <div class="w-full mx-auto px-4 py-8">
        <router-view @breadcrumbs="onLoadedBreadcrumbs" />
      </div>
    </main>
  </div>
  <FooterDefault />
</template>
