<script setup>
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
      <span class="text-primary-dark font-semibold">Autoparts</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore placeat
      neque exercitationem autem amet laborum minus aspernatur nisi quis esse
      at, alias earum? Quos obcaecati quidem quo ducimus odio harum!
    </p>
  </div>
</template>
