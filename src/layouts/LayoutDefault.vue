<script setup>
import { HeaderDefault, FooterDefault } from "./partials";
</script>
<template>
  <HeaderDefault />
  <div
    class="min-h-screen bg-[url('@/assets/images/bg-dashboard.jpg')] bg-cover bg-no-repeat"
  >
    <main>
      <div class="container mx-auto px-4 py-8">
        <router-view />
      </div>
    </main>
  </div>
  <FooterDefault />
</template>
