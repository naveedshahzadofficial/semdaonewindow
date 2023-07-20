<script setup>
import { TileCircleComponent } from "@/components";
import { onMounted } from "vue";
import mitt from "mitt";
const emitter = mitt();
emitter.emit(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<template>
  <section>
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
