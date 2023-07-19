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
      <span class="text-primary-dark font-semibold">Cutlery</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
      assumenda, incidunt nihil deserunt deleniti iure consectetur natus totam
      odio eos, laudantium quasi doloribus possimus ut excepturi? Saepe fuga
      officiis in.
    </p>
  </div>
</template>
