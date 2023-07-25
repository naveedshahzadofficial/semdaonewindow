<script setup>
import { ref } from "vue";
import { HeaderDefault, FooterDefault, BreadCrumbs } from "./partials";
const breadcrumbs = ref();
const onLoadedBreadcrumbs = (_breadcrumbs) => {
  breadcrumbs.value = _breadcrumbs;
};
const background= ref(require('@/assets/images/bg-dashboard.jpg'));
const onLoadBackground = (_background) => {
  console.log(_background)
  background.value = _background;
};
</script>
<template>
  <HeaderDefault />
  <BreadCrumbs :breadcrumbs="breadcrumbs" />

  <main :style="{ background: `url(${background}) no-repeat bottom right`}"
    class="min-h-screen bg-cover bg-no-repeat" style="background-size: cover"
  >
    <div class="w-full mx-auto">
      <router-view @breadcrumbs="onLoadedBreadcrumbs" @background="onLoadBackground" />
    </div>
  </main>
  <FooterDefault />
</template>
