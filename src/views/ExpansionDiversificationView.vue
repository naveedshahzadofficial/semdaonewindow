<script setup>
import { TileComponent } from "@/components";
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
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
      <span class="text-primary-dark font-semibold"
        >Expansion/Diversification</span
      >
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta natus
      consectetur iusto quos quasi. Facilis laborum fuga tempore voluptate
      quibusdam, accusamus quidem doloremque similique. Non cumque ea velit enim
      fuga?
    </p>

    <!-- Start: Tiles -->
    <div class="flex items-center justify-center gap-6 py-10">
      <TileComponent
        :tile="{
          title: 'Cutlery',
          icon: require('@/assets/images/construction-permits.png'),
          icon_hover: require('@/assets/images/construction-permits-hover.png'),
          icon_side: require('@/assets/images/construction-permits.png'),
          classes: 'bg-orange-400',
          link: 'cutlery',
        }"
      />

      <TileComponent
        :tile="{
          title: 'Pharmaceuticals',
          icon: require('@/assets/images/construction-permits.png'),
          icon_hover: require('@/assets/images/construction-permits-hover.png'),
          icon_side: require('@/assets/images/construction-permits.png'),
          classes: 'bg-blue-400',
          link: 'pharmaceuticals',
        }"
      />

      <TileComponent
        :tile="{
          title: 'Agrofood',
          icon: require('@/assets/images/construction-permits.png'),
          icon_hover: require('@/assets/images/construction-permits-hover.png'),
          icon_side: require('@/assets/images/construction-permits.png'),
          classes: 'bg-red-400',
          link: 'agro-food',
        }"
      />

      <TileComponent
        :tile="{
          title: 'Autoparts',
          icon: require('@/assets/images/construction-permits.png'),
          icon_hover: require('@/assets/images/construction-permits-hover.png'),
          icon_side: require('@/assets/images/construction-permits.png'),
          classes: 'bg-slate-400',
          link: 'auto-parts',
        }"
      />
    </div>
    <!-- End: Tiles -->
  </div>
</template>
