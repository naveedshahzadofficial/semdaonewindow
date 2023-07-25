<script setup>
import { TileCircleComponent } from "@/components";
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [{ title: "Home", link: "" }]);
});
</script>
<template>
  <section class="px-4 py-8">
    <h3 class="text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-2xl lg:text-3xl">
      <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
      Its All About Doing Business
      </span>
    </h3>
    <!-- Start: Tiles -->
    <div class="flex items-center justify-center space-x-14 py-32">
      <TileCircleComponent
        :tile="{
          title: 'Plan',
          icon: require('@/assets/images/plain-icon.png'),
          icon_hover: require('@/assets/images/plain-icon-hover.png'),
          link: 'plan',
          tag_line: 'Navigate Toward Success',
        }"
      />
      <TileCircleComponent
        :tile="{
          title: 'Start',
          icon: require('@/assets/images/start-icon.png'),
          icon_hover: require('@/assets/images/start-icon-hover.png'),
          link: 'start',
          tag_line: 'Empowering Dreams, Igniting Success',
        }"
      />
      <TileCircleComponent
        :tile="{
          title: 'Grow',
          icon: require('@/assets/images/grow-icon.png'),
          icon_hover: require('@/assets/images/grow-icon-hover.png'),
          link: 'grow',
          tag_line: 'Unlock Your Potential',
        }"
      />
    </div>
    <!-- End: Tiles -->
  </section>
</template>
<style scoped lang="scss"></style>
